"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";

export default function HeroManager({ hero, onChange }) {
  const [replacing, setReplacing] = useState(false);

  function handleUpload(result) {
    onChange({ src: result.src, publicId: result.publicId });
    setReplacing(false);
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Hero Background</h2>
        <p className="text-sm text-gray-500">This image appears as the background of the main hero section at the top of the page.</p>
      </div>

      {/* Preview */}
      <div className="relative rounded-xl overflow-hidden bg-gray-100 mb-4" style={{ aspectRatio: "16/7" }}>
        {hero.src ? (
          <>
            {/* Simulate how it looks on the actual site */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#122840] via-[#1B3A5C] to-[#2A5F8F]" />
            <div
              className="absolute inset-0 bg-center bg-cover opacity-15 grayscale-[30%]"
              style={{ backgroundImage: `url('${hero.src}')` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white/80 text-sm font-medium">Current Hero Background</p>
                <p className="text-white/40 text-xs mt-1">Shown at 15% opacity with grayscale filter</p>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <p>No hero image set</p>
          </div>
        )}
      </div>

      {replacing ? (
        <div className="space-y-3">
          <ImageUploader onUpload={handleUpload} />
          <button
            onClick={() => setReplacing(false)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setReplacing(true)}
          className="px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg hover:bg-blue transition-colors"
        >
          Change Hero Image
        </button>
      )}
    </div>
  );
}
