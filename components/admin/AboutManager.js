"use client";

import { useState } from "react";
import Image from "next/image";
import ImageUploader from "./ImageUploader";

const slots = [
  { key: "large", label: "Main Photo (large)", description: "Spans full width at the top of the About section" },
  { key: "small-left", label: "Bottom Left", description: "Small square photo on the left" },
  { key: "small-right", label: "Bottom Right", description: "Small square photo on the right" },
];

export default function AboutManager({ aboutImages, onChange }) {
  const [replacingSlot, setReplacingSlot] = useState(null);

  function handleUpload(slot, result) {
    const updated = aboutImages.map((img) =>
      img.slot === slot ? { ...img, src: result.src, publicId: result.publicId } : img
    );
    onChange(updated);
    setReplacingSlot(null);
  }

  function handleUpdateAlt(slot, alt) {
    onChange(aboutImages.map((img) => (img.slot === slot ? { ...img, alt } : img)));
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">About Section Photos</h2>
        <p className="text-sm text-gray-500">These 3 photos appear in the About Us section. One large photo on top, two smaller ones below.</p>
      </div>

      <div className="space-y-4">
        {slots.map((slot) => {
          const img = aboutImages.find((i) => i.slot === slot.key) || {};
          return (
            <div key={slot.key} className="bg-white border border-gray-100 rounded-xl p-4">
              <div className="flex gap-4 items-start">
                {/* Preview */}
                <div className={`relative rounded-lg overflow-hidden bg-gray-100 shrink-0 ${
                  slot.key === "large" ? "w-40 h-24" : "w-24 h-24"
                }`}>
                  {img.src ? (
                    <Image
                      src={img.src}
                      alt={img.alt || slot.label}
                      fill
                      className="object-cover"
                      sizes={slot.key === "large" ? "160px" : "96px"}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{slot.label}</p>
                  <p className="text-xs text-gray-400 mb-2">{slot.description}</p>
                  <input
                    type="text"
                    value={img.alt || ""}
                    onChange={(e) => handleUpdateAlt(slot.key, e.target.value)}
                    placeholder="Image description (for SEO)"
                    className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue"
                  />
                </div>

                {/* Replace button */}
                <button
                  onClick={() => setReplacingSlot(replacingSlot === slot.key ? null : slot.key)}
                  className="shrink-0 px-3 py-1.5 text-sm font-medium text-blue hover:bg-blue/5 rounded-lg transition-colors"
                >
                  {replacingSlot === slot.key ? "Cancel" : "Replace"}
                </button>
              </div>

              {replacingSlot === slot.key && (
                <div className="mt-4">
                  <ImageUploader onUpload={(result) => handleUpload(slot.key, result)} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
