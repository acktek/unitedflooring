"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

export default function Lightbox({ items, currentIndex, isOpen, onClose, onNext, onPrev }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[currentIndex];
  const isVideo = currentItem?.type === "video";

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/92 backdrop-blur-[20px] flex items-center justify-center transition-all duration-400"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full cursor-pointer transition-colors duration-300 hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full cursor-pointer transition-colors duration-300 hover:bg-white/20"
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative max-w-[90vw] max-h-[85vh]">
        {isVideo ? (
          <video
            key={currentItem.src}
            src={currentItem.src}
            className="max-w-[90vw] max-h-[85vh] rounded-lg"
            controls
            autoPlay
            playsInline
            preload="auto"
          />
        ) : (
          <Image
            src={currentItem.src}
            alt={currentItem.alt || "Project photo"}
            width={1200}
            height={800}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />
        )}
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 rounded-full cursor-pointer transition-colors duration-300 hover:bg-white/20"
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
