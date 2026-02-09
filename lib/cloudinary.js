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

export async function deleteImage(publicId) {
  ensureConfig();
  await cloudinary.uploader.destroy(publicId);
}
