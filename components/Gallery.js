"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Lightbox from "./Lightbox";
import { defaultConfig } from "@/lib/defaults";

export default function Gallery({ items = defaultConfig.gallery, categories = defaultConfig.categories }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeFilter === "all"
    ? items
    : items.filter((item) => item.category === activeFilter);

  const filteredSrcs = filtered.map((item) => item.src);

  function openLightbox(index) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <section id="gallery" className="py-[100px] bg-beige max-md:py-[72px] max-sm:py-[56px]">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block font-heading text-[0.75rem] font-semibold tracking-[3px] uppercase text-blue mb-4">
            Our Portfolio
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-navy leading-[1.2] mb-5">
            Recent Projects
          </h2>
          <p className="text-[1.1rem] text-gray max-w-[600px] leading-[1.8] mx-auto">
            Browse our latest work — from custom tile showers to full kitchen renovations across the Jersey Shore.
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex justify-center gap-2 mb-10 flex-wrap max-sm:gap-1.5">
          {categories.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 font-heading text-[0.8rem] font-medium tracking-[0.5px] rounded-full border transition-all duration-300 cursor-pointer max-sm:px-4 max-sm:py-2 max-sm:text-[0.72rem] ${
                activeFilter === filter.value
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-gray border-beige-dark hover:bg-navy hover:text-white hover:border-navy"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-2 max-sm:grid-cols-1">
          {filtered.map((item, index) => (
            <div
              key={item.src}
              onClick={() => openLightbox(index)}
              className={`relative rounded-xl overflow-hidden cursor-pointer bg-beige-warm group ${
                item.wide ? "col-span-2 aspect-[2/1] max-lg:col-span-1 max-lg:aspect-square" : "aspect-square"
              }`}
              style={{ animation: "fadeIn 0.5s ease forwards" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-[1.08]"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        images={filteredSrcs}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % filteredSrcs.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + filteredSrcs.length) % filteredSrcs.length)}
      />
    </section>
  );
}
