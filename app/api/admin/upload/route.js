import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { uploadImage, uploadVideo } from "@/lib/cloudinary";
import { cookies } from "next/headers";

export const maxDuration = 60;

const imageTypes = ["image/jpeg", "image/png", "image/webp"];
const videoTypes = ["video/mp4", "video/quicktime", "video/webm"];
const allowedTypes = [...imageTypes, ...videoTypes];

const IMAGE_MAX = 10 * 1024 * 1024;
const VIDEO_MAX = 50 * 1024 * 1024;

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

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Only JPG, PNG, WebP images and MP4, MOV, WebM videos are allowed" }, { status: 400 });
    }

    const isVideo = videoTypes.includes(file.type);
    const maxSize = isVideo ? VIDEO_MAX : IMAGE_MAX;
    if (file.size > maxSize) {
      return NextResponse.json({ error: `File too large. Maximum size is ${isVideo ? "50MB" : "10MB"}.` }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const result = isVideo
      ? await uploadVideo(buffer, file.name)
      : await uploadImage(buffer, file.name);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
