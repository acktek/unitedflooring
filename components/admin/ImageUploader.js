"use client";

import { useState, useRef } from "react";

export default function ImageUploader({ onUpload, multiple = false, className = "" }) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(0); // count of in-progress uploads
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);
  const fileRef = useRef(null);

  function validateFile(file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return `${file.name}: Only JPG, PNG, and WebP allowed.`;
    }
    if (file.size > 10 * 1024 * 1024) {
      return `${file.name}: File too large (max 10MB).`;
    }
    return null;
  }

  async function uploadOne(file) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || `Failed to upload ${file.name}`);
    }

    return res.json();
  }

  async function handleFiles(fileList) {
    const files = Array.from(fileList);
    if (files.length === 0) return;

    // Validate all files first
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

    // Upload files in parallel (max 3 concurrent)
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

    // Notify parent for each successful upload
    for (const result of results) {
      onUpload(result);
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
            {multiple ? "Drop images here or click to upload" : "Drop image here or click to upload"}
          </span>
          <span className="text-xs text-gray-400 mt-1">
            JPG, PNG, WebP up to 10MB{multiple ? " each" : ""}
          </span>
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple={multiple}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
      )}
    </div>
  );
}
