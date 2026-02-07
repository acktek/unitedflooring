import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 stroke-navy transition-colors duration-300 group-hover:stroke-white">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Tile & Stone Installation",
    desc: "Expert installation of tile, porcelain, marble, granite and natural stone for floors, walls, showers and backsplashes.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 stroke-navy transition-colors duration-300 group-hover:stroke-white">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Kitchen & Bath Renovation",
    desc: "Complete kitchen and bathroom remodels from demolition to the finishing touches. We handle every detail of the transformation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 stroke-navy transition-colors duration-300 group-hover:stroke-white">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    title: "Hardwood Flooring",
    desc: "Professional hardwood floor installation, sanding and refinishing. Restore your existing floors or install beautiful new wood flooring.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 stroke-navy transition-colors duration-300 group-hover:stroke-white">
        <line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    ),
    title: "Concrete & Pavers",
    desc: "Durable and attractive concrete work and paver installations for patios, walkways, driveways and outdoor living spaces.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[100px] bg-white max-md:py-[72px] max-sm:py-[56px]">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block font-heading text-[0.75rem] font-semibold tracking-[3px] uppercase text-blue mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-navy leading-[1.2] mb-5">
            Our Services
          </h2>
          <p className="text-[1.1rem] text-gray max-w-[600px] leading-[1.8] mx-auto">
            From elegant tile work to solid hardwood floors, we deliver expert craftsmanship for every surface in your home.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-4">
          {services.map((service) => (
            <ScrollReveal
              key={service.title}
              className="group p-10 px-[30px] bg-off-white rounded-2xl border border-transparent relative overflow-hidden transition-all duration-400 hover:bg-white hover:border-black/[0.06] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-linear-to-r before:from-blue before:to-blue-light before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-beige rounded-[14px] mb-6 transition-colors duration-300 group-hover:bg-navy">
                {service.icon}
              </div>
              <h3 className="font-heading text-[1.15rem] font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-[0.92rem] text-gray leading-[1.7]">{service.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
