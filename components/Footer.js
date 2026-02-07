import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-15 pb-[30px] bg-navy-dark">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 max-lg:grid-cols-2 max-lg:gap-9 max-md:grid-cols-1 max-md:gap-8">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block font-heading text-[1.4rem] font-bold tracking-[0.5px] text-white mb-4">
              UNITED <span className="font-normal text-blue">FLOORING</span>
            </a>
            <p className="text-[0.88rem] text-white/50 leading-[1.7] max-w-[300px]">
              Professional flooring installation and renovation services serving Monmouth &amp; Ocean County, NJ. Licensed and insured.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-semibold tracking-[1.5px] uppercase text-white/90 mb-5">Services</h4>
            <a href="#services" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">Tile &amp; Stone</a>
            <a href="#services" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">Kitchen Remodels</a>
            <a href="#services" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">Bath Renovations</a>
            <a href="#services" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">Hardwood Floors</a>
            <a href="#services" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">Concrete &amp; Pavers</a>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-semibold tracking-[1.5px] uppercase text-white/90 mb-5">Company</h4>
            <a href="#about" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">About Us</a>
            <a href="#gallery" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">Our Work</a>
            <a href="#contact" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">Contact</a>
            <Link href="/logos" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">Brand</Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-[0.8rem] font-semibold tracking-[1.5px] uppercase text-white/90 mb-5">Contact</h4>
            <a href="tel:9089072998" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">908-907-2998</a>
            <a href="mailto:junior@unitedflooringnj.com" className="block text-[0.88rem] text-white/45 mb-3 transition-colors duration-300 hover:text-white">junior@unitedflooringnj.com</a>
            <span className="block text-[0.88rem] text-white/45 mb-3">36 Victor Ave<br />West Long Branch, NJ 07764</span>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex justify-between items-center max-md:flex-col max-md:gap-3 max-md:text-center">
          <p className="text-[0.8rem] text-white/30">&copy; 2026 United Flooring. All rights reserved.</p>
          <p className="text-[0.8rem] text-white/30">Serving Monmouth &amp; Ocean County, NJ</p>
        </div>
      </div>
    </footer>
  );
}
