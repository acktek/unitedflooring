import Link from "next/link";

export const metadata = {
  title: "7M Logo Variations — United Flooring",
  robots: "noindex, nofollow",
};

const logos = [
  {
    name: "Shore Classic",
    bg: "beige",
    border: "#1B3A5C",
    borderOpacity: "0.2",
    herringbone: "#1B3A5C",
    herringboneOpacity: "0.5",
    title: "#1B3A5C",
    subtitle: "#2A5F8F",
    tagline: "#9CA3AF",
    tagText: "LICENSED & INSURED \u2022 NJ",
  },
  {
    name: "Midnight",
    bg: "dark",
    bgColor: "#122840",
    border: "rgba(255,255,255,0.12)",
    borderOpacity: "1",
    herringbone: "#4A90C4",
    herringboneOpacity: "0.35",
    title: "#FFFFFF",
    subtitle: "#4A90C4",
    tagline: "rgba(255,255,255,0.25)",
    tagText: "LICENSED & INSURED \u2022 NJ",
  },
  {
    name: "Driftwood",
    bg: "custom",
    bgColor: "#F7F3ED",
    border: "#8B7355",
    borderOpacity: "0.25",
    herringbone: "#8B7355",
    herringboneOpacity: "0.4",
    title: "#5C4A32",
    subtitle: "#8B7355",
    tagline: "#B8A88A",
    tagText: "TILE & STONE \u2022 NJ",
  },
  {
    name: "Ocean",
    bg: "custom",
    bgColor: "#F0F6FA",
    border: "#1A6B8A",
    borderOpacity: "0.2",
    herringbone: "#1A6B8A",
    herringboneOpacity: "0.45",
    title: "#0D3B4F",
    subtitle: "#1A6B8A",
    tagline: "#7FAFC4",
    tagText: "MONMOUTH COUNTY \u2022 NJ",
  },
  {
    name: "Slate",
    bg: "custom",
    bgColor: "#F4F4F6",
    border: "#4A4A5A",
    borderOpacity: "0.2",
    herringbone: "#4A4A5A",
    herringboneOpacity: "0.4",
    title: "#2C2C3A",
    subtitle: "#6B6B7B",
    tagline: "#A0A0B0",
    tagText: "PREMIUM INSTALLATION \u2022 NJ",
  },
  {
    name: "Deep Navy",
    bg: "custom",
    bgColor: "#0E1F33",
    border: "rgba(255,255,255,0.08)",
    borderOpacity: "1",
    herringbone: "#C9A96E",
    herringboneOpacity: "0.4",
    title: "#FFFFFF",
    subtitle: "#C9A96E",
    tagline: "rgba(255,255,255,0.2)",
    tagText: "EST. NEW JERSEY",
  },
  {
    name: "Terracotta",
    bg: "custom",
    bgColor: "#FBF5F0",
    border: "#C4734F",
    borderOpacity: "0.2",
    herringbone: "#C4734F",
    herringboneOpacity: "0.4",
    title: "#8B4230",
    subtitle: "#C4734F",
    tagline: "#D4A08A",
    tagText: "TILE & STONE \u2022 NJ",
  },
  {
    name: "Evergreen",
    bg: "custom",
    bgColor: "#F2F6F2",
    border: "#2D5A3D",
    borderOpacity: "0.2",
    herringbone: "#2D5A3D",
    herringboneOpacity: "0.45",
    title: "#1A3A25",
    subtitle: "#2D5A3D",
    tagline: "#7BA08A",
    tagText: "QUALITY CRAFTSMANSHIP \u2022 NJ",
  },
  {
    name: "Charcoal",
    bg: "custom",
    bgColor: "#1C1C1C",
    border: "rgba(255,255,255,0.1)",
    borderOpacity: "1",
    herringbone: "#E8E8E8",
    herringboneOpacity: "0.2",
    title: "#FFFFFF",
    subtitle: "#AAAAAA",
    tagline: "rgba(255,255,255,0.2)",
    tagText: "LICENSED & INSURED \u2022 NJ",
  },
  {
    name: "Sand Dollar",
    bg: "custom",
    bgColor: "#FAF6EE",
    border: "#C4A46E",
    borderOpacity: "0.25",
    herringbone: "#C4A46E",
    herringboneOpacity: "0.45",
    title: "#7A6535",
    subtitle: "#C4A46E",
    tagline: "#D4C4A0",
    tagText: "FLOORING SPECIALISTS \u2022 NJ",
  },
  {
    name: "Steel",
    bg: "custom",
    bgColor: "#EAEEF2",
    border: "#3A5068",
    borderOpacity: "0.2",
    herringbone: "#3A5068",
    herringboneOpacity: "0.4",
    title: "#1E3040",
    subtitle: "#3A5068",
    tagline: "#8A9AAA",
    tagText: "OCEAN COUNTY \u2022 NJ",
  },
  {
    name: "Espresso",
    bg: "custom",
    bgColor: "#2A1F18",
    border: "rgba(255,255,255,0.08)",
    borderOpacity: "1",
    herringbone: "#D4A06A",
    herringboneOpacity: "0.35",
    title: "#FAF0E4",
    subtitle: "#D4A06A",
    tagline: "rgba(255,255,255,0.2)",
    tagText: "HARDWOOD & TILE \u2022 NJ",
  },
  {
    name: "Marble White",
    bg: "custom",
    bgColor: "#FFFFFF",
    border: "#D0D0D0",
    borderOpacity: "0.5",
    herringbone: "#B0B0B0",
    herringboneOpacity: "0.35",
    title: "#333333",
    subtitle: "#888888",
    tagline: "#BBBBBB",
    tagText: "TILE & STONE \u2022 NJ",
  },
  {
    name: "Copper",
    bg: "custom",
    bgColor: "#F8F2EC",
    border: "#B8734A",
    borderOpacity: "0.25",
    herringbone: "#B8734A",
    herringboneOpacity: "0.45",
    title: "#6E3A1E",
    subtitle: "#B8734A",
    tagline: "#CCA080",
    tagText: "EST. NEW JERSEY",
  },
  {
    name: "Sage",
    bg: "custom",
    bgColor: "#F4F6F0",
    border: "#6A7F5A",
    borderOpacity: "0.2",
    herringbone: "#6A7F5A",
    herringboneOpacity: "0.4",
    title: "#3A4A2E",
    subtitle: "#6A7F5A",
    tagline: "#A0B090",
    tagText: "PREMIUM INSTALLATION \u2022 NJ",
  },
  {
    name: "Onyx",
    bg: "custom",
    bgColor: "#111111",
    border: "rgba(255,255,255,0.06)",
    borderOpacity: "1",
    herringbone: "#FFFFFF",
    herringboneOpacity: "0.15",
    title: "#FFFFFF",
    subtitle: "rgba(255,255,255,0.5)",
    tagline: "rgba(255,255,255,0.15)",
    tagText: "UNITED FLOORING \u2022 NJ",
  },
  {
    name: "Tidewater",
    bg: "custom",
    bgColor: "#EEF4F4",
    border: "#3A7A7A",
    borderOpacity: "0.2",
    herringbone: "#3A7A7A",
    herringboneOpacity: "0.4",
    title: "#1E4A4A",
    subtitle: "#3A7A7A",
    tagline: "#80AAAA",
    tagText: "JERSEY SHORE \u2022 NJ",
  },
  {
    name: "Merlot",
    bg: "custom",
    bgColor: "#2E1620",
    border: "rgba(255,255,255,0.08)",
    borderOpacity: "1",
    herringbone: "#C4808A",
    herringboneOpacity: "0.35",
    title: "#FAF0F0",
    subtitle: "#C4808A",
    tagline: "rgba(255,255,255,0.2)",
    tagText: "TILE & STONE \u2022 NJ",
  },
  {
    name: "Sandstone",
    bg: "custom",
    bgColor: "#F5EDE0",
    border: "#A08050",
    borderOpacity: "0.2",
    herringbone: "#A08050",
    herringboneOpacity: "0.45",
    title: "#5A4428",
    subtitle: "#A08050",
    tagline: "#C4B090",
    tagText: "MONMOUTH & OCEAN COUNTY",
  },
  {
    name: "Arctic",
    bg: "custom",
    bgColor: "#F8FAFC",
    border: "#5A8AAA",
    borderOpacity: "0.15",
    herringbone: "#5A8AAA",
    herringboneOpacity: "0.35",
    title: "#2A4A60",
    subtitle: "#5A8AAA",
    tagline: "#90B0C4",
    tagText: "QUALITY CRAFTSMANSHIP \u2022 NJ",
  },
  {
    name: "Bronze",
    bg: "custom",
    bgColor: "#1A1610",
    border: "rgba(255,255,255,0.06)",
    borderOpacity: "1",
    herringbone: "#CDA050",
    herringboneOpacity: "0.4",
    title: "#F0E0C0",
    subtitle: "#CDA050",
    tagline: "rgba(255,255,255,0.18)",
    tagText: "LICENSED & INSURED \u2022 NJ",
  },
  {
    name: "Porcelain",
    bg: "custom",
    bgColor: "#FAFAFA",
    border: "#1B3A5C",
    borderOpacity: "0.12",
    herringbone: "#1B3A5C",
    herringboneOpacity: "0.3",
    title: "#1B3A5C",
    subtitle: "#4A90C4",
    tagline: "#C0C0C0",
    tagText: "FLOORING SPECIALISTS \u2022 NJ",
  },
  {
    name: "Cobalt",
    bg: "custom",
    bgColor: "#0A1A30",
    border: "rgba(100,160,255,0.15)",
    borderOpacity: "1",
    herringbone: "#6090D0",
    herringboneOpacity: "0.35",
    title: "#FFFFFF",
    subtitle: "#6090D0",
    tagline: "rgba(255,255,255,0.2)",
    tagText: "PREMIUM INSTALLATION \u2022 NJ",
  },
  {
    name: "Ash",
    bg: "custom",
    bgColor: "#F0EFED",
    border: "#7A7A70",
    borderOpacity: "0.2",
    herringbone: "#7A7A70",
    herringboneOpacity: "0.35",
    title: "#3A3A35",
    subtitle: "#7A7A70",
    tagline: "#A8A8A0",
    tagText: "EST. NEW JERSEY",
  },
  {
    name: "Blueprint",
    bg: "custom",
    bgColor: "#E8EEF4",
    border: "#2A5F8F",
    borderOpacity: "0.2",
    herringbone: "#2A5F8F",
    herringboneOpacity: "0.45",
    title: "#1B3A5C",
    subtitle: "#2A5F8F",
    tagline: "#8AAAC4",
    tagText: "TILE & STONE \u2022 NJ",
  },
];

export default function Logo7MPage() {
  return (
    <>
      <Link
        href="/"
        className="fixed top-6 left-6 z-[100] inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-black/[0.08] rounded-lg font-heading text-[0.8rem] font-semibold text-navy no-underline transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:bg-navy hover:text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Site
      </Link>

      <section className="pt-[120px] pb-[100px] bg-off-white min-h-screen">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block font-heading text-[0.75rem] font-semibold tracking-[3px] uppercase text-blue mb-4">
              7M Collection
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-navy leading-[1.2] mb-5">
              Compact Badge Logos
            </h2>
            <p className="text-[1.1rem] text-gray max-w-[600px] leading-[1.8] mx-auto">
              {logos.length} color variations of the 7M herringbone badge — same layout, every palette.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="rounded-2xl p-12 px-8 flex flex-col items-center justify-center min-h-[260px] border border-black/[0.04] transition-all duration-400 relative overflow-hidden cursor-default hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                style={{ backgroundColor: logo.bgColor || (logo.bg === "beige" ? "#F5F0E8" : logo.bg === "dark" ? "#1B3A5C" : "#FFFFFF") }}
              >
                <span
                  className="absolute top-4 left-5 font-heading text-[0.7rem] font-bold tracking-[1px] uppercase"
                  style={{ color: logo.tagline }}
                >
                  {logo.name}
                </span>
                <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
                  <rect x="70" y="8" width="180" height="86" rx="8" fill="none" stroke={logo.border} strokeWidth="1" opacity={logo.borderOpacity}/>
                  <g opacity={logo.herringboneOpacity} stroke={logo.herringbone} strokeWidth="1.5" fill="none">
                    <line x1="130" y1="16" x2="145" y2="30"/><line x1="145" y1="16" x2="130" y2="30"/>
                    <line x1="150" y1="16" x2="165" y2="30"/><line x1="165" y1="16" x2="150" y2="30"/>
                    <line x1="170" y1="16" x2="185" y2="30"/><line x1="185" y1="16" x2="170" y2="30"/>
                  </g>
                  <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill={logo.title} letterSpacing="3">UNITED</text>
                  <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill={logo.subtitle} letterSpacing="6">FLOORING</text>
                  <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="6" fill={logo.tagline} letterSpacing="2">{logo.tagText}</text>
                </svg>
                <span
                  className="mt-5 font-heading text-[0.72rem] font-medium tracking-[0.5px] uppercase"
                  style={{ color: logo.tagline }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
