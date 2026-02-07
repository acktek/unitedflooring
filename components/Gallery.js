"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import Lightbox from "./Lightbox";

const galleryItems = [
  { src: "/photos/IMG_4963.JPG", alt: "Bathroom shower tile installation", category: "bathroom", label: "Shower Installation", wide: true },
  { src: "/photos/IMG_4342.JPG", alt: "Kitchen tile and stone installation", category: "kitchen", label: "Kitchen Renovation" },
  { src: "/photos/IMG_5430.JPG", alt: "Hexagonal wall tile installation", category: "tile", label: "Hex Wall Tile" },
  { src: "/photos/IMG_4128.JPG", alt: "Herringbone tile shower installation in Monmouth County NJ", category: "bathroom", label: "Custom Herringbone Shower" },
  { src: "/photos/IMG_5086.JPG", alt: "Hexagonal mosaic tile floor installation", category: "tile", label: "Hex Mosaic Floor" },
  { src: "/photos/IMG_4129.JPG", alt: "Herringbone tile shower with pebble floor in NJ", category: "bathroom", label: "Herringbone & Pebble Floor", wide: true },
  { src: "/photos/IMG_4965.JPG", alt: "Modern bathroom tile installation", category: "bathroom", label: "Modern Bath Tile" },
  { src: "/photos/IMG_4087.JPG", alt: "Subway tile bathroom wall installation", category: "tile", label: "Subway Tile Wall" },
  { src: "/photos/IMG_4341.JPG", alt: "Dark marble kitchen countertop installation", category: "kitchen", label: "Dark Marble Finish" },
  { src: "/photos/IMG_4055.JPG", alt: "Outdoor patio tile installation NJ", category: "outdoor", label: "Outdoor Patio Tile" },
  { src: "/photos/IMG_5024.JPG", alt: "Penny round tile bathroom floor", category: "tile", label: "Penny Round Floor" },
  { src: "/photos/IMG_4961.JPG", alt: "Shower niche with large format tile", category: "bathroom", label: "Shower Niche Detail" },
  { src: "/photos/IMG_5422.JPG", alt: "Diamond pattern floor tile installation", category: "tile", label: "Diamond Pattern Floor", wide: true },
  { src: "/photos/IMG_4088.JPG", alt: "Bathroom renovation tile installation NJ", category: "bathroom", label: "Bath Renovation" },
  { src: "/photos/IMG_4056.JPG", alt: "Outdoor tile patio work New Jersey", category: "outdoor", label: "Patio Tilework" },
  { src: "/photos/IMG_5096.JPG", alt: "Custom tile floor pattern installation", category: "tile", label: "Custom Floor Pattern" },
  { src: "/photos/IMG_5431.JPG", alt: "Professional tile installation NJ", category: "tile", label: "Professional Tilework" },
];

const filters = [
  { value: "all", label: "All Projects" },
  { value: "bathroom", label: "Bathrooms" },
  { value: "tile", label: "Tile & Stone" },
  { value: "kitchen", label: "Kitchen" },
  { value: "outdoor", label: "Outdoor" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

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
          {filters.map((filter) => (
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
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100 flex items-end p-5">
                <span className="text-white font-heading text-[0.85rem] font-medium translate-y-2.5 transition-transform duration-400 group-hover:translate-y-0">
                  {item.label}
                </span>
              </div>
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
