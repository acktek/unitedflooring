import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { generateSignature } from "@/lib/cloudinary";
import { cookies } from "next/headers";

export async function POST() {
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
    const params = generateSignature();
    return NextResponse.json(params);
  } catch {
    return NextResponse.json({ error: "Failed to generate signature" }, { status: 500 });
  }
}
