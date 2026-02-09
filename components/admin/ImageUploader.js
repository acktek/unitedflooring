"use client";

import { useState, useRef } from "react";

export default function ImageUploader({ onUpload, className = "" }) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileRef = useRef(null);

  async function handleFile(file) {
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, and WebP images are allowed.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("File too large. Maximum size is 10MB.");
      return;
    }

    // Show preview immediately
    setPreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }

      const result = await res.json();
      onUpload(result);
    } catch (err) {
      alert(err.message || "Upload failed. Please try again.");
    } finally {
      setUploading(false);
      setPreview(null);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
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
      {preview ? (
        <div className="p-4 text-center">
          <img src={preview} alt="Uploading..." className="w-20 h-20 object-cover rounded-lg mx-auto mb-2" />
          <p className="text-sm text-gray-500">Uploading...</p>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center p-6 cursor-pointer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-400 mb-2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span className="text-sm font-medium text-gray-600">
            {uploading ? "Uploading..." : "Drop image here or click to upload"}
          </span>
          <span className="text-xs text-gray-400 mt-1">JPG, PNG, WebP up to 10MB</span>
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
            disabled={uploading}
          />
        </label>
      )}
    </div>
  );
}
