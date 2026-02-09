import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { deleteImage } from "@/lib/cloudinary";
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
    const { publicId } = await request.json();

    if (!publicId) {
      return NextResponse.json({ error: "publicId is required" }, { status: 400 });
    }

    await deleteImage(publicId);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
