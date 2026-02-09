// Default photo config — used as seed data and fallback when KV is unavailable.
// This mirrors the original hardcoded data from Gallery.js, Hero.js, and About.js.

export const defaultConfig = {
  gallery: [
    { id: "gal_001", src: "/photos/IMG_4963.JPG", alt: "Bathroom shower tile installation", category: "bathroom", label: "Shower Installation", wide: true },
    { id: "gal_002", src: "/photos/IMG_4342.JPG", alt: "Kitchen tile and stone installation", category: "kitchen", label: "Kitchen Renovation", wide: false },
    { id: "gal_003", src: "/photos/IMG_5430.JPG", alt: "Hexagonal wall tile installation", category: "tile", label: "Hex Wall Tile", wide: false },
    { id: "gal_004", src: "/photos/IMG_5086.JPG", alt: "Hexagonal mosaic tile floor installation", category: "tile", label: "Hex Mosaic Floor", wide: false },
    { id: "gal_005", src: "/photos/IMG_4129.JPG", alt: "Herringbone tile shower with pebble floor in NJ", category: "bathroom", label: "Herringbone & Pebble Floor", wide: true },
    { id: "gal_006", src: "/photos/IMG_4965.JPG", alt: "Modern bathroom tile installation", category: "bathroom", label: "Modern Bath Tile", wide: false },
    { id: "gal_007", src: "/photos/IMG_4087.JPG", alt: "Subway tile bathroom wall installation", category: "tile", label: "Subway Tile Wall", wide: false },
    { id: "gal_008", src: "/photos/IMG_4341.JPG", alt: "Dark marble kitchen countertop installation", category: "kitchen", label: "Dark Marble Finish", wide: false },
    { id: "gal_009", src: "/photos/IMG_4055.JPG", alt: "Outdoor patio tile installation NJ", category: "outdoor", label: "Outdoor Patio Tile", wide: false },
    { id: "gal_010", src: "/photos/IMG_4961.JPG", alt: "Shower niche with large format tile", category: "bathroom", label: "Shower Niche Detail", wide: false },
    { id: "gal_011", src: "/photos/IMG_5422.JPG", alt: "Diamond pattern floor tile installation", category: "tile", label: "Diamond Pattern Floor", wide: true },
    { id: "gal_012", src: "/photos/IMG_4088.JPG", alt: "Bathroom renovation tile installation NJ", category: "bathroom", label: "Bath Renovation", wide: false },
    { id: "gal_013", src: "/photos/IMG_4056.JPG", alt: "Outdoor tile patio work New Jersey", category: "outdoor", label: "Patio Tilework", wide: false },
    { id: "gal_014", src: "/photos/IMG_5096.JPG", alt: "Custom tile floor pattern installation", category: "tile", label: "Custom Floor Pattern", wide: false },
    { id: "gal_015", src: "/photos/IMG_5431.JPG", alt: "Professional tile installation NJ", category: "tile", label: "Professional Tilework", wide: false },
  ],
  categories: [
    { value: "all", label: "All Projects" },
    { value: "bathroom", label: "Bathrooms" },
    { value: "tile", label: "Tile & Stone" },
    { value: "kitchen", label: "Kitchen" },
    { value: "outdoor", label: "Outdoor" },
  ],
  hero: {
    src: "/photos/IMG_4963.JPG",
  },
  about: [
    { src: "/photos/IMG_4086.JPG", alt: "United Flooring bathroom tile project", slot: "large" },
    { src: "/photos/IMG_4343.JPG", alt: "United Flooring stone installation", slot: "small-left" },
    { src: "/photos/IMG_5088.JPG", alt: "United Flooring tile craftsmanship", slot: "small-right" },
  ],
};
