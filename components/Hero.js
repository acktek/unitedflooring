export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-linear-135 from-navy-dark via-navy to-blue overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/photos/IMG_4963.JPG')] bg-center bg-cover bg-no-repeat opacity-15 grayscale-[30%]"
      />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-linear-to-t from-white to-transparent" />

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-2 max-w-[700px]">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-[10px] border border-white/15 rounded-full font-heading text-[0.75rem] font-semibold tracking-[2px] uppercase text-beige mb-7 before:content-[''] before:w-2 before:h-2 before:bg-[#4ADE80] before:rounded-full">
          Licensed &amp; Insured
        </div>
        <h1 className="font-heading text-[clamp(2.8rem,6vw,4.5rem)] font-bold text-white leading-[1.1] mb-6 max-md:text-[clamp(2.2rem,7vw,3.2rem)]">
          Premium Flooring<br />&amp; <span className="text-beige-warm">Tile Experts</span>
        </h1>
        <p className="text-[1.15rem] text-white/75 leading-[1.8] mb-10 max-w-[520px] max-md:text-base">
          Transforming homes across Monmouth &amp; Ocean County with expert installation of tile, marble,
          granite, hardwood and stone. From kitchen renovations to custom showers — craftsmanship you can trust.
        </p>
        <div className="flex gap-4 flex-wrap max-md:flex-col">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-lg font-heading text-[0.9rem] font-semibold tracking-[0.3px] bg-blue text-white transition-all duration-300 hover:bg-blue-light hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(42,95,143,0.3)] max-md:text-center max-md:justify-center"
          >
            Get a Free Estimate
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-lg font-heading text-[0.9rem] font-semibold tracking-[0.3px] bg-transparent text-white border-[1.5px] border-white/30 transition-all duration-300 hover:border-white hover:bg-white/10 max-md:text-center max-md:justify-center"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-2 flex flex-col items-center gap-2 text-white/40 text-[0.7rem] tracking-[2px] uppercase animate-[float_3s_ease-in-out_infinite] max-md:hidden">
        <span>Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
