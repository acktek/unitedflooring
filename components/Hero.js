export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/photos/IMG_4963.JPG')] bg-center bg-cover bg-no-repeat opacity-[0.07] grayscale-[30%]"
      />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-linear-to-t from-beige to-transparent" />

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-2 max-w-[700px]">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-navy/[0.06] border border-navy/10 rounded-full font-heading text-[0.75rem] font-semibold tracking-[2px] uppercase text-navy mb-7 before:content-[''] before:w-2 before:h-2 before:bg-[#4ADE80] before:rounded-full">
          Licensed &amp; Insured
        </div>
        <h1 className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] font-bold text-navy leading-[1.1] mb-6 max-md:text-[clamp(2.2rem,7vw,3.2rem)]">
          Premium Flooring<br />&amp; <span className="text-blue">Tile Experts</span>
        </h1>
        <p className="text-[1.15rem] text-gray leading-[1.8] mb-10 max-w-[520px] max-md:text-base">
          Transforming homes across Monmouth &amp; Ocean County with expert installation of tile, marble,
          granite, hardwood and stone. From kitchen renovations to custom showers — craftsmanship you can trust.
        </p>
        <div className="flex gap-4 flex-wrap max-md:flex-col">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-lg font-heading text-[0.9rem] font-semibold tracking-[0.3px] bg-navy text-white transition-all duration-300 hover:bg-blue hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(27,58,92,0.25)] max-md:text-center max-md:justify-center"
          >
            Get a Free Estimate
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-lg font-heading text-[0.9rem] font-semibold tracking-[0.3px] bg-transparent text-navy border-[1.5px] border-navy/20 transition-all duration-300 hover:border-navy hover:bg-navy/[0.04] max-md:text-center max-md:justify-center"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-2 flex flex-col items-center gap-2 text-navy/30 text-[0.7rem] tracking-[2px] uppercase animate-[float_3s_ease-in-out_infinite] max-md:hidden">
        <span>Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-navy/30 to-transparent" />
      </div>
    </section>
  );
}
