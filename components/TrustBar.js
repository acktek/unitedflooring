export default function TrustBar() {
  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-navy">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Licensed & Insured",
      sub: "Full coverage protection",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-navy">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Monmouth & Ocean County",
      sub: "Proudly serving the Shore area",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-navy">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      label: "Quality Craftsmanship",
      sub: "Precision on every project",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-navy">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      label: "Free Estimates",
      sub: "No-obligation quotes",
    },
  ];

  return (
    <section className="py-[50px] bg-white border-b border-black/[0.04]">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex justify-center items-center gap-15 flex-wrap max-md:gap-[30px] max-sm:flex-col max-sm:gap-5 max-sm:items-start">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3.5 text-gray">
              <div className="w-11 h-11 flex items-center justify-center bg-beige rounded-[10px] shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="font-heading text-[0.8rem] font-semibold tracking-[0.5px] text-navy">{item.label}</div>
                <div className="text-[0.75rem] text-gray-light">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
