import { v2 as cloudinary } from "cloudinary";

let configured = false;

function ensureConfig() {
  if (!configured) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    configured = true;
  }
}

export async function uploadImage(fileBuffer, filename) {
  ensureConfig();

  const base64 = fileBuffer.toString("base64");
  const ext = filename.split(".").pop().toLowerCase();
  const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";

  const result = await cloudinary.uploader.upload(
    `data:${mime};base64,${base64}`,
    {
      folder: "united-flooring",
      resource_type: "image",
    }
  );

  // Insert f_auto,q_auto into the delivery URL for auto format (WebP/AVIF) + quality
  const optimizedUrl = result.secure_url.replace(
    "/image/upload/",
    "/image/upload/f_auto,q_auto/"
  );

  return {
    src: optimizedUrl,
    publicId: result.public_id,
    width: result.width,
    height: result.height,
  };
}

export async function uploadVideo(fileBuffer, filename) {
  ensureConfig();

  const base64 = fileBuffer.toString("base64");
  const ext = filename.split(".").pop().toLowerCase();
  const mimeMap = { mp4: "video/mp4", mov: "video/quicktime", webm: "video/webm" };
  const mime = mimeMap[ext] || "video/mp4";

  const result = await cloudinary.uploader.upload(
    `data:${mime};base64,${base64}`,
    {
      folder: "united-flooring",
      resource_type: "video",
    }
  );

  const optimizedUrl = result.secure_url.replace(
    "/video/upload/",
    "/video/upload/f_auto,q_auto/"
  );

  // Auto-generate thumbnail from Cloudinary (first frame)
  const thumbnail = result.secure_url
    .replace("/video/upload/", "/video/upload/f_jpg,q_auto,so_0/")
    .replace(/\.[^.]+$/, ".jpg");

  return {
    src: optimizedUrl,
    publicId: result.public_id,
    width: result.width,
    height: result.height,
    type: "video",
    thumbnail,
  };
}

export function generateSignature() {
  ensureConfig();

  const timestamp = Math.round(Date.now() / 1000);
  const params = { folder: "united-flooring", timestamp };
  const signature = cloudinary.utils.api_sign_request(
    params,
    process.env.CLOUDINARY_API_SECRET
  );

  return {
    signature,
    timestamp,
    folder: "united-flooring",
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
  };
}

export async function deleteImage(publicId, resourceType = "image") {
  ensureConfig();
  await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
}
