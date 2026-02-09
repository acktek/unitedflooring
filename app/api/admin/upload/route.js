import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { uploadImage } from "@/lib/cloudinary";
import { cookies } from "next/headers";

export async function POST(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("uf_admin_token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await verifyToken(token);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Only JPG, PNG, and WebP images are allowed" }, { status: 400 });
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Maximum size is 10MB." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = await uploadImage(buffer, file.name);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
