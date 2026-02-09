"use client";

import { useState, useRef } from "react";

const imageTypes = ["image/jpeg", "image/png", "image/webp"];
const videoTypes = ["video/mp4", "video/quicktime", "video/webm"];

const acceptMap = {
  image: "image/jpeg,image/png,image/webp",
  video: "video/mp4,video/quicktime,video/webm",
  both: "image/jpeg,image/png,image/webp,video/mp4,video/quicktime,video/webm",
};

function buildResult(data) {
  const isVideo = data.resource_type === "video";

  if (isVideo) {
    const optimizedUrl = data.secure_url.replace(
      "/video/upload/",
      "/video/upload/f_auto,q_auto/"
    );
    const thumbnail = data.secure_url
      .replace("/video/upload/", "/image/upload/f_auto,q_auto/")
      .replace(/\.[^.]+$/, ".jpg");

    return {
      src: optimizedUrl,
      publicId: data.public_id,
      width: data.width,
      height: data.height,
      type: "video",
      thumbnail,
    };
  }

  const optimizedUrl = data.secure_url.replace(
    "/image/upload/",
    "/image/upload/f_auto,q_auto/"
  );

  return {
    src: optimizedUrl,
    publicId: data.public_id,
    width: data.width,
    height: data.height,
  };
}

export default function ImageUploader({ onUpload, multiple = false, mode = "image", className = "" }) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);
  const fileRef = useRef(null);

  function validateFile(file) {
    let allowed;
    if (mode === "image") allowed = imageTypes;
    else if (mode === "video") allowed = videoTypes;
    else allowed = [...imageTypes, ...videoTypes];

    if (!allowed.includes(file.type)) {
      return `${file.name}: File type not allowed.`;
    }

    const isVideo = videoTypes.includes(file.type);
    const maxSize = isVideo ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return `${file.name}: File too large (max ${isVideo ? "50MB" : "10MB"}).`;
    }
    return null;
  }

  async function uploadOne(file) {
    // Get signed upload params from our server (tiny JSON, no file data)
    const signRes = await fetch("/api/admin/sign-upload", { method: "POST" });
    if (!signRes.ok) {
      throw new Error("Authentication failed");
    }
    const { signature, timestamp, folder, cloudName, apiKey } = await signRes.json();

    // Upload directly to Cloudinary (bypasses server body size limits)
    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", folder);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
      { method: "POST", body: formData }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `Failed to upload ${file.name}`);
    }

    const data = await res.json();
    return buildResult(data);
  }

  async function handleFiles(fileList) {
    const files = Array.from(fileList);
    if (files.length === 0) return;

    const errors = files.map(validateFile).filter(Boolean);
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    setTotal(files.length);
    setCompleted(0);
    setUploading(files.length);

    const results = [];
    const uploadErrors = [];

    const queue = [...files];
    const workers = Array.from({ length: Math.min(3, queue.length) }, async () => {
      while (queue.length > 0) {
        const file = queue.shift();
        try {
          const result = await uploadOne(file);
          results.push(result);
          setCompleted((c) => c + 1);
        } catch (err) {
          uploadErrors.push(err.message);
          setCompleted((c) => c + 1);
        }
      }
    });

    await Promise.all(workers);

    if (results.length > 0) {
      onUpload(results);
    }

    if (uploadErrors.length > 0) {
      alert(`${uploadErrors.length} upload(s) failed:\n${uploadErrors.join("\n")}`);
    }

    setUploading(0);
    setTotal(0);
    setCompleted(0);
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }

  const isUploading = uploading > 0;

  let helpText;
  if (mode === "video") {
    helpText = `MP4, MOV, WebM up to 50MB${multiple ? " each" : ""}`;
  } else if (mode === "both") {
    helpText = `Images (JPG, PNG, WebP up to 10MB) or videos (MP4, MOV, WebM up to 50MB)`;
  } else {
    helpText = `JPG, PNG, WebP up to 10MB${multiple ? " each" : ""}`;
  }

  let dropText;
  if (mode === "video") {
    dropText = multiple ? "Drop videos here or click to upload" : "Drop video here or click to upload";
  } else if (mode === "both") {
    dropText = multiple ? "Drop files here or click to upload" : "Drop file here or click to upload";
  } else {
    dropText = multiple ? "Drop images here or click to upload" : "Drop image here or click to upload";
  }

  return (
    <div
      className={`relative border-2 border-dashed rounded-xl transition-colors ${
        dragging ? "border-blue bg-blue/5" : "border-gray-200 hover:border-gray-300"
      } ${className}`}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      {isUploading ? (
        <div className="p-6 text-center">
          <div className="w-8 h-8 border-2 border-navy border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm font-medium text-gray-600">
            Uploading {completed} of {total}...
          </p>
          <div className="w-48 h-1.5 bg-gray-100 rounded-full mx-auto mt-3 overflow-hidden">
            <div
              className="h-full bg-navy rounded-full transition-all duration-300"
              style={{ width: `${total > 0 ? (completed / total) * 100 : 0}%` }}
            />
          </div>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center p-6 cursor-pointer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-400 mb-2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span className="text-sm font-medium text-gray-600">
            {dropText}
          </span>
          <span className="text-xs text-gray-400 mt-1">
            {helpText}
          </span>
          <input
            ref={fileRef}
            type="file"
            accept={acceptMap[mode] || acceptMap.image}
            multiple={multiple}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
      )}
    </div>
  );
}
