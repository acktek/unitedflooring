import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  "Licensed & Fully Insured",
  "Free Project Estimates",
  "Expert Tile & Stone Work",
  "Hardwood Specialists",
  "Kitchen & Bath Remodels",
  "Concrete & Paver Work",
];

export default function About() {
  return (
    <section id="about" className="py-[100px] bg-white max-md:py-[72px] max-sm:py-[56px]">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-20 items-center max-lg:gap-12 max-md:grid-cols-1 max-md:gap-10">
          <ScrollReveal className="grid grid-cols-2 gap-4 max-md:order-[-1]">
            <div className="col-span-2 relative h-[280px] rounded-xl overflow-hidden max-md:h-[200px]">
              <Image
                src="/photos/IMG_4086.JPG"
                alt="United Flooring bathroom tile project"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 45vw"
                unoptimized
              />
            </div>
            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <Image
                src="/photos/IMG_4343.JPG"
                alt="United Flooring stone installation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 22vw"
                unoptimized
              />
            </div>
            <div className="relative h-[200px] rounded-xl overflow-hidden">
              <Image
                src="/photos/IMG_5088.JPG"
                alt="United Flooring tile craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 22vw"
                unoptimized
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <span className="inline-block font-heading text-[0.75rem] font-semibold tracking-[3px] uppercase text-blue mb-4">
              About Us
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-navy leading-[1.2] mb-5">
              Craftsmanship That<br />Speaks for Itself
            </h2>
            <p className="text-[1.1rem] text-gray max-w-[600px] leading-[1.8] mb-8">
              United Flooring is a full-service flooring and renovation company serving homeowners across
              Monmouth and Ocean County, New Jersey. We take pride in delivering precision craftsmanship on
              every project — whether it&apos;s a custom tile shower, a full kitchen remodel, or refinishing
              hardwood floors.
            </p>
            <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-beige rounded-md shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 stroke-navy">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-[0.9rem] font-medium text-charcoal">{feature}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
