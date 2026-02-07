import Link from "next/link";

export const metadata = {
  title: "Logo Concepts — United Flooring",
  robots: "noindex, nofollow",
};

const logos = [
  // --- Original 12 ---
  {
    number: "01",
    style: "Clean Wordmark",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <text x="160" y="38" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="28" fill="#1B3A5C" letterSpacing="4">UNITED</text>
        <line x1="60" y1="48" x2="260" y2="48" stroke="#4A90C4" strokeWidth="1.5"/>
        <text x="160" y="72" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="16" fill="#6B7280" letterSpacing="8">FLOORING</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="8" fill="#9CA3AF" letterSpacing="3">NEW JERSEY</text>
      </svg>
    ),
  },
  {
    number: "02",
    style: "Tile Grid Icon",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="126" y="6" width="16" height="16" rx="1" fill="#1B3A5C"/>
        <rect x="145" y="6" width="16" height="16" rx="1" fill="#2A5F8F"/>
        <rect x="126" y="25" width="16" height="16" rx="1" fill="#4A90C4"/>
        <rect x="145" y="25" width="16" height="16" rx="1" fill="#1B3A5C"/>
        <rect x="164" y="6" width="16" height="16" rx="1" fill="#4A90C4"/>
        <rect x="164" y="25" width="16" height="16" rx="1" fill="#2A5F8F"/>
        <text x="160" y="68" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="22" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="88" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize="13" fill="#2A5F8F" letterSpacing="6">FLOORING</text>
        <text x="160" y="106" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="2">{"TILE \u2022 STONE \u2022 HARDWOOD"}</text>
      </svg>
    ),
  },
  {
    number: "03",
    style: "Bold Contrast",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <text x="160" y="50" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="40" fill="#FFFFFF" letterSpacing="2">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="300" fontSize="18" fill="#4A90C4" letterSpacing="12">FLOORING</text>
        <line x1="70" y1="82" x2="250" y2="82" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <text x="160" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="rgba(255,255,255,0.35)" letterSpacing="2">{"MONMOUTH \u2022 OCEAN COUNTY NJ"}</text>
      </svg>
    ),
  },
  {
    number: "04",
    style: "Elegant Serif",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <text x="160" y="42" textAnchor="middle" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="30" fill="#1B3A5C">United</text>
        <text x="160" y="68" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="12" fill="#2A5F8F" letterSpacing="10">{"TILE & STONE"}</text>
        <line x1="100" y1="54" x2="130" y2="54" stroke="#E8DFD0" strokeWidth="2"/>
        <line x1="190" y1="54" x2="220" y2="54" stroke="#E8DFD0" strokeWidth="2"/>
        <circle cx="160" cy="54" r="2" fill="#4A90C4"/>
      </svg>
    ),
  },
  {
    number: "05",
    style: "Hex Tile Badge",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <polygon points="160,8 190,22 190,50 160,64 130,50 130,22" fill="none" stroke="#1B3A5C" strokeWidth="2.5"/>
        <text x="160" y="42" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="18" fill="#1B3A5C">UF</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="20" fill="#1B3A5C" letterSpacing="2">UNITED</text>
        <text x="160" y="110" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="12" fill="#2A5F8F" letterSpacing="6">FLOORING</text>
      </svg>
    ),
  },
  {
    number: "06",
    style: "Diamond Mark",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <polygon points="160,10 188,38 160,66 132,38" fill="none" stroke="#4A90C4" strokeWidth="2"/>
        <polygon points="160,18 182,38 160,58 138,38" fill="#4A90C4" opacity="0.15"/>
        <text x="160" y="44" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="16" fill="#FFFFFF">UTS</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="16" fill="#FFFFFF" letterSpacing="2">UNITED</text>
        <text x="160" y="110" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#4A90C4" letterSpacing="5">{"TILE & STONE"}</text>
      </svg>
    ),
  },
  {
    number: "07",
    style: "Compact Badge (Light)",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="70" y="8" width="180" height="86" rx="8" fill="none" stroke="#1B3A5C" strokeWidth="1" opacity="0.2"/>
        <g opacity="0.5" stroke="#1B3A5C" strokeWidth="1.5" fill="none">
          <line x1="130" y1="16" x2="145" y2="30"/><line x1="145" y1="16" x2="130" y2="30"/>
          <line x1="150" y1="16" x2="165" y2="30"/><line x1="165" y1="16" x2="150" y2="30"/>
          <line x1="170" y1="16" x2="185" y2="30"/><line x1="185" y1="16" x2="170" y2="30"/>
        </g>
        <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#2A5F8F" letterSpacing="6">FLOORING</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="6" fill="#9CA3AF" letterSpacing="2">LICENSED &amp; INSURED &bull; NJ</text>
      </svg>
    ),
  },
  {
    number: "08",
    style: "Circle Monogram",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <circle cx="160" cy="40" r="32" fill="none" stroke="#1B3A5C" strokeWidth="2"/>
        <circle cx="160" cy="40" r="27" fill="#1B3A5C"/>
        <text x="160" y="48" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="22" fill="#FFFFFF" letterSpacing="2">UF</text>
        <text x="160" y="96" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="14" fill="#1B3A5C" letterSpacing="4">UNITED FLOORING</text>
        <text x="160" y="114" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="8" fill="#9CA3AF" letterSpacing="2">WEST LONG BRANCH, NJ</text>
      </svg>
    ),
  },
  {
    number: "09",
    style: "Left-aligned Stack",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="60" y="10" width="3" height="80" fill="#4A90C4"/>
        <text x="76" y="40" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="26" fill="#FFFFFF" letterSpacing="3">UNITED</text>
        <text x="76" y="66" fontFamily="Montserrat, sans-serif" fontWeight="300" fontSize="20" fill="rgba(255,255,255,0.5)" letterSpacing="5">TILE</text>
        <text x="168" y="66" fontFamily="Montserrat, sans-serif" fontWeight="300" fontSize="20" fill="#4A90C4" letterSpacing="5">{"& STONE"}</text>
      </svg>
    ),
  },
  {
    number: "10",
    style: "Arch & Tile",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <path d="M140,68 L140,26 Q160,4 180,26 L180,68" fill="none" stroke="#1B3A5C" strokeWidth="2.5"/>
        <line x1="140" y1="68" x2="180" y2="68" stroke="#E8DFD0" strokeWidth="3"/>
        <rect x="148" y="50" width="10" height="10" rx="1" fill="#E8DFD0" opacity="0.6"/>
        <rect x="162" y="50" width="10" height="10" rx="1" fill="#E8DFD0" opacity="0.4"/>
        <rect x="148" y="36" width="10" height="10" rx="1" fill="#E8DFD0" opacity="0.3"/>
        <rect x="162" y="36" width="10" height="10" rx="1" fill="#E8DFD0" opacity="0.5"/>
        <text x="160" y="94" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="18" fill="#1B3A5C" letterSpacing="2">UNITED</text>
        <text x="160" y="112" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#2A5F8F" letterSpacing="6">FLOORING</text>
      </svg>
    ),
  },
  {
    number: "11",
    style: "Classic Seal",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <circle cx="160" cy="62" r="54" fill="none" stroke="#1B3A5C" strokeWidth="2"/>
        <circle cx="160" cy="62" r="48" fill="none" stroke="#1B3A5C" strokeWidth="0.5"/>
        <defs>
          <path id="topArc" d="M108,62 A52,52 0 0,1 212,62"/>
          <path id="bottomArc" d="M212,62 A52,52 0 0,1 108,62"/>
        </defs>
        <text fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="9" fill="#1B3A5C" letterSpacing="4">
          <textPath href="#topArc" startOffset="50%" textAnchor="middle">{"UNITED TILE & STONE"}</textPath>
        </text>
        <text fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="3">
          <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">{"WEST LONG BRANCH \u2022 NEW JERSEY"}</textPath>
        </text>
        <line x1="130" y1="54" x2="148" y2="54" stroke="#E8DFD0" strokeWidth="1.5"/>
        <line x1="172" y1="54" x2="190" y2="54" stroke="#E8DFD0" strokeWidth="1.5"/>
        <text x="160" y="60" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="14" fill="#1B3A5C">est.</text>
        <text x="160" y="80" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="11" fill="#1B3A5C" letterSpacing="2">NJ</text>
      </svg>
    ),
  },
  {
    number: "12",
    style: "Geometric Lettermark",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <path d="M128,18 L128,44 Q128,58 142,58 L148,58 Q162,58 162,44 L162,18" fill="none" stroke="#4A90C4" strokeWidth="4" strokeLinecap="round"/>
        <line x1="174" y1="18" x2="174" y2="58" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
        <line x1="174" y1="18" x2="198" y2="18" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
        <line x1="174" y1="36" x2="192" y2="36" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="160" cy="76" r="2" fill="#4A90C4"/>
        <text x="160" y="98" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11" fill="rgba(255,255,255,0.9)" letterSpacing="6">UNITED FLOORING</text>
        <text x="160" y="116" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="rgba(255,255,255,0.3)" letterSpacing="2">{"TILE \u2022 STONE \u2022 HARDWOOD \u2022 PAVERS"}</text>
      </svg>
    ),
  },
  // --- New 12 logos (13-24) ---
  {
    number: "13",
    style: "Stacked Minimal",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <text x="160" y="34" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="32" fill="#1B3A5C" letterSpacing="6">UNITED</text>
        <text x="160" y="58" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="300" fontSize="14" fill="#2A5F8F" letterSpacing="14">FLOORING</text>
        <rect x="130" y="68" width="60" height="1" fill="#E8DFD0"/>
        <text x="160" y="86" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="7" fill="#9CA3AF" letterSpacing="4">SINCE EST. NJ</text>
      </svg>
    ),
  },
  {
    number: "14",
    style: "Brick Pattern",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        {/* Brick rows */}
        <g opacity="0.4" fill="#1B3A5C">
          <rect x="115" y="6" width="26" height="10" rx="1"/><rect x="144" y="6" width="26" height="10" rx="1"/><rect x="173" y="6" width="26" height="10" rx="1"/>
          <rect x="128" y="19" width="26" height="10" rx="1"/><rect x="157" y="19" width="26" height="10" rx="1"/>
        </g>
        <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="24" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="78" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="14" fill="#2A5F8F" letterSpacing="6">TILE &amp; STONE</text>
        <line x1="90" y1="88" x2="230" y2="88" stroke="#1B3A5C" strokeWidth="0.5" opacity="0.3"/>
        <text x="160" y="104" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="3">INSTALLATION SPECIALISTS</text>
      </svg>
    ),
  },
  {
    number: "15",
    style: "Shield Badge",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <path d="M160,8 L195,22 L195,58 Q195,82 160,96 Q125,82 125,58 L125,22 Z" fill="none" stroke="#4A90C4" strokeWidth="2"/>
        <path d="M160,16 L188,28 L188,56 Q188,76 160,88 Q132,76 132,56 L132,28 Z" fill="#4A90C4" opacity="0.1"/>
        <text x="160" y="52" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="14" fill="#FFFFFF" letterSpacing="1">UNITED</text>
        <text x="160" y="68" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="8" fill="#4A90C4" letterSpacing="3">FLOORING</text>
        <text x="160" y="118" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="10" fill="rgba(255,255,255,0.7)" letterSpacing="4">LICENSED &amp; INSURED</text>
        <text x="160" y="134" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="rgba(255,255,255,0.3)" letterSpacing="2">NEW JERSEY</text>
      </svg>
    ),
  },
  {
    number: "16",
    style: "Double Line Frame",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="60" y="10" width="200" height="90" rx="2" fill="none" stroke="#1B3A5C" strokeWidth="2"/>
        <rect x="66" y="16" width="188" height="78" rx="1" fill="none" stroke="#1B3A5C" strokeWidth="0.5"/>
        <text x="160" y="48" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="22" fill="#1B3A5C" letterSpacing="4">UNITED</text>
        <line x1="100" y1="56" x2="220" y2="56" stroke="#4A90C4" strokeWidth="1"/>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="12" fill="#2A5F8F" letterSpacing="8">FLOORING</text>
        <text x="160" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="2">WEST LONG BRANCH, NJ</text>
      </svg>
    ),
  },
  {
    number: "17",
    style: "Mosaic Square",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        {/* 3x3 mosaic */}
        <g>
          <rect x="140" y="6" width="12" height="12" fill="#1B3A5C"/><rect x="154" y="6" width="12" height="12" fill="#2A5F8F"/><rect x="168" y="6" width="12" height="12" fill="#4A90C4"/>
          <rect x="140" y="20" width="12" height="12" fill="#4A90C4"/><rect x="154" y="20" width="12" height="12" fill="#1B3A5C"/><rect x="168" y="20" width="12" height="12" fill="#2A5F8F"/>
          <rect x="140" y="34" width="12" height="12" fill="#2A5F8F"/><rect x="154" y="34" width="12" height="12" fill="#4A90C4"/><rect x="168" y="34" width="12" height="12" fill="#1B3A5C"/>
        </g>
        <text x="160" y="72" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="92" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="500" fontSize="12" fill="#2A5F8F" letterSpacing="7">TILE &amp; STONE</text>
        <text x="160" y="112" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="2">{"FLOORS \u2022 WALLS \u2022 SHOWERS"}</text>
      </svg>
    ),
  },
  {
    number: "18",
    style: "Horizon Line",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <text x="160" y="40" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="800" fontSize="34" fill="#FFFFFF" letterSpacing="5">UNITED</text>
        <line x1="50" y1="52" x2="270" y2="52" stroke="#4A90C4" strokeWidth="2"/>
        <text x="160" y="72" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="rgba(255,255,255,0.5)" letterSpacing="10">FLOORING NJ</text>
        <text x="160" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="rgba(255,255,255,0.25)" letterSpacing="2">QUALITY CRAFTSMANSHIP</text>
      </svg>
    ),
  },
  {
    number: "19",
    style: "Corner Brackets",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        {/* Corner brackets */}
        <path d="M80,15 L80,10 L85,10" fill="none" stroke="#1B3A5C" strokeWidth="2"/><path d="M240,15 L240,10 L235,10" fill="none" stroke="#1B3A5C" strokeWidth="2"/>
        <path d="M80,95 L80,100 L85,100" fill="none" stroke="#1B3A5C" strokeWidth="2"/><path d="M240,95 L240,100 L235,100" fill="none" stroke="#1B3A5C" strokeWidth="2"/>
        <text x="160" y="42" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="26" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <circle cx="160" cy="54" r="1.5" fill="#4A90C4"/>
        <text x="160" y="70" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="13" fill="#2A5F8F" letterSpacing="6">FLOORING</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="8" fill="#9CA3AF" letterSpacing="3">NEW JERSEY</text>
      </svg>
    ),
  },
  {
    number: "20",
    style: "Split Tone",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="70" y="15" width="90" height="70" fill="#1B3A5C" rx="4"/>
        <text x="115" y="48" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="16" fill="#FFFFFF" letterSpacing="2">UNITED</text>
        <text x="115" y="66" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="9" fill="#4A90C4" letterSpacing="4">FLOORING</text>
        <text x="210" y="42" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="10" fill="#1B3A5C" letterSpacing="2">TILE</text>
        <text x="210" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="10" fill="#2A5F8F" letterSpacing="2">STONE</text>
        <text x="210" y="70" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="10" fill="#4A90C4" letterSpacing="2">WOOD</text>
        <text x="210" y="84" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="10" fill="#9CA3AF" letterSpacing="2">PAVERS</text>
      </svg>
    ),
  },
  {
    number: "21",
    style: "Circular Stamp",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <circle cx="160" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 3"/>
        <circle cx="160" cy="60" r="42" fill="none" stroke="#4A90C4" strokeWidth="1.5"/>
        <text x="160" y="54" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="18" fill="#FFFFFF" letterSpacing="2">UNITED</text>
        <text x="160" y="72" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="10" fill="#4A90C4" letterSpacing="5">FLOORING</text>
        <line x1="130" y1="42" x2="190" y2="42" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
        <text x="160" y="120" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="rgba(255,255,255,0.3)" letterSpacing="2">{"MONMOUTH \u2022 OCEAN COUNTY"}</text>
      </svg>
    ),
  },
  {
    number: "22",
    style: "Geometric Tiles",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        {/* Rotated square tiles */}
        <g transform="translate(160,28)">
          <rect x="-14" y="-14" width="20" height="20" fill="#1B3A5C" transform="rotate(45)"/>
          <rect x="8" y="-14" width="20" height="20" fill="#2A5F8F" transform="rotate(45)"/>
          <rect x="-3" y="8" width="20" height="20" fill="#4A90C4" transform="rotate(45)"/>
        </g>
        <text x="160" y="78" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="20" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="98" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#2A5F8F" letterSpacing="7">FLOORING</text>
        <text x="160" y="114" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="2">NJ</text>
      </svg>
    ),
  },
  {
    number: "23",
    style: "Horizontal Bars",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="80" y="12" width="160" height="4" rx="2" fill="#1B3A5C"/>
        <rect x="80" y="20" width="160" height="4" rx="2" fill="#2A5F8F"/>
        <rect x="80" y="28" width="160" height="4" rx="2" fill="#4A90C4"/>
        <text x="160" y="58" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="24" fill="#1B3A5C" letterSpacing="4">UNITED</text>
        <text x="160" y="78" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="12" fill="#2A5F8F" letterSpacing="8">FLOORING</text>
        <text x="160" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="3">WEST LONG BRANCH, NJ</text>
      </svg>
    ),
  },
  {
    number: "24",
    style: "Monogram Crest",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        {/* Octagon */}
        <polygon points="160,6 186,16 196,42 196,62 186,88 160,98 134,88 124,62 124,42 134,16" fill="none" stroke="#4A90C4" strokeWidth="1.5"/>
        <text x="160" y="46" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="28" fill="#FFFFFF" letterSpacing="1">U</text>
        <text x="160" y="72" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="300" fontSize="18" fill="#4A90C4" letterSpacing="1">F</text>
        <line x1="140" y1="50" x2="180" y2="50" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
        <text x="160" y="118" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="11" fill="rgba(255,255,255,0.8)" letterSpacing="5">UNITED FLOORING</text>
        <text x="160" y="134" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="rgba(255,255,255,0.3)" letterSpacing="2">{"TILE \u2022 STONE \u2022 HARDWOOD"}</text>
      </svg>
    ),
  },
  // --- 7M Variations ---
  {
    number: "25",
    style: "7M — Compact Badge Dark",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="70" y="8" width="180" height="86" rx="8" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <g opacity="0.35" stroke="#4A90C4" strokeWidth="1.5" fill="none">
          <line x1="130" y1="16" x2="145" y2="30"/><line x1="145" y1="16" x2="130" y2="30"/>
          <line x1="150" y1="16" x2="165" y2="30"/><line x1="165" y1="16" x2="150" y2="30"/>
          <line x1="170" y1="16" x2="185" y2="30"/><line x1="185" y1="16" x2="170" y2="30"/>
        </g>
        <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#FFFFFF" letterSpacing="3">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#4A90C4" letterSpacing="6">FLOORING</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="6" fill="rgba(255,255,255,0.25)" letterSpacing="2">LICENSED &amp; INSURED &bull; NJ</text>
      </svg>
    ),
  },
  {
    number: "26",
    style: "7M — Tile & Stone Badge",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="70" y="8" width="180" height="86" rx="8" fill="none" stroke="#1B3A5C" strokeWidth="1" opacity="0.2"/>
        <g opacity="0.5" stroke="#1B3A5C" strokeWidth="1.5" fill="none">
          <line x1="130" y1="16" x2="145" y2="30"/><line x1="145" y1="16" x2="130" y2="30"/>
          <line x1="150" y1="16" x2="165" y2="30"/><line x1="165" y1="16" x2="150" y2="30"/>
          <line x1="170" y1="16" x2="185" y2="30"/><line x1="185" y1="16" x2="170" y2="30"/>
        </g>
        <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="10" fill="#2A5F8F" letterSpacing="5">TILE &amp; STONE</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="6" fill="#9CA3AF" letterSpacing="2">LICENSED &amp; INSURED &bull; NJ</text>
      </svg>
    ),
  },
  {
    number: "27",
    style: "7M — Clean White Box",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="70" y="8" width="180" height="86" rx="4" fill="#F5F0E8"/>
        <g opacity="0.5" stroke="#1B3A5C" strokeWidth="1.5" fill="none">
          <line x1="130" y1="16" x2="145" y2="30"/><line x1="145" y1="16" x2="130" y2="30"/>
          <line x1="150" y1="16" x2="165" y2="30"/><line x1="165" y1="16" x2="150" y2="30"/>
          <line x1="170" y1="16" x2="185" y2="30"/><line x1="185" y1="16" x2="170" y2="30"/>
        </g>
        <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#2A5F8F" letterSpacing="6">FLOORING</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="6" fill="#9CA3AF" letterSpacing="2">PREMIUM INSTALLATION &bull; NJ</text>
      </svg>
    ),
  },
  {
    number: "28",
    style: "7M — Badge + Divider",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="75" y="6" width="170" height="106" rx="10" fill="none" stroke="#1B3A5C" strokeWidth="1.5"/>
        <g opacity="0.4" stroke="#1B3A5C" strokeWidth="1.2" fill="none">
          <line x1="140" y1="14" x2="150" y2="24"/><line x1="150" y1="14" x2="140" y2="24"/>
          <line x1="153" y1="14" x2="163" y2="24"/><line x1="163" y1="14" x2="153" y2="24"/>
          <line x1="166" y1="14" x2="176" y2="24"/><line x1="176" y1="14" x2="166" y2="24"/>
        </g>
        <line x1="95" y1="30" x2="225" y2="30" stroke="#E8DFD0" strokeWidth="1"/>
        <text x="160" y="54" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="22" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="12" fill="#2A5F8F" letterSpacing="7">FLOORING</text>
        <line x1="95" y1="84" x2="225" y2="84" stroke="#E8DFD0" strokeWidth="1"/>
        <g opacity="0.4" stroke="#1B3A5C" strokeWidth="1.2" fill="none">
          <line x1="140" y1="90" x2="150" y2="100"/><line x1="150" y1="90" x2="140" y2="100"/>
          <line x1="153" y1="90" x2="163" y2="100"/><line x1="163" y1="90" x2="153" y2="100"/>
          <line x1="166" y1="90" x2="176" y2="100"/><line x1="176" y1="90" x2="166" y2="100"/>
        </g>
      </svg>
    ),
  },
  {
    number: "29",
    style: "7M — Wide Horizontal",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="50" y="6" width="220" height="78" rx="6" fill="none" stroke="#1B3A5C" strokeWidth="1" opacity="0.15"/>
        <g opacity="0.45" stroke="#1B3A5C" strokeWidth="1.2" fill="none">
          <line x1="60" y1="14" x2="70" y2="24"/><line x1="70" y1="14" x2="60" y2="24"/>
          <line x1="74" y1="14" x2="84" y2="24"/><line x1="84" y1="14" x2="74" y2="24"/>
          <line x1="88" y1="14" x2="98" y2="24"/><line x1="98" y1="14" x2="88" y2="24"/>
        </g>
        <text x="190" y="22" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="12" fill="#1B3A5C" letterSpacing="2">UNITED FLOORING</text>
        <line x1="60" y1="34" x2="260" y2="34" stroke="#E8DFD0" strokeWidth="1"/>
        <text x="160" y="54" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="600" fontSize="9" fill="#2A5F8F" letterSpacing="3">{"TILE \u2022 STONE \u2022 HARDWOOD \u2022 PAVERS"}</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="2">MONMOUTH &amp; OCEAN COUNTY, NJ</text>
      </svg>
    ),
  },
  {
    number: "30",
    style: "7M — Herringbone Circle",
    bg: "beige",
    svg: (
      <svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <circle cx="160" cy="36" r="28" fill="none" stroke="#1B3A5C" strokeWidth="1.5"/>
        <g opacity="0.5" stroke="#1B3A5C" strokeWidth="1.5" fill="none">
          <line x1="146" y1="28" x2="154" y2="36"/><line x1="154" y1="28" x2="146" y2="36"/>
          <line x1="156" y1="28" x2="164" y2="36"/><line x1="164" y1="28" x2="156" y2="36"/>
          <line x1="166" y1="28" x2="174" y2="36"/><line x1="174" y1="28" x2="166" y2="36"/>
        </g>
        <text x="160" y="88" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="106" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#2A5F8F" letterSpacing="6">FLOORING</text>
        <text x="160" y="122" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#9CA3AF" letterSpacing="2">NEW JERSEY</text>
      </svg>
    ),
  },
  {
    number: "31",
    style: "7M — Dark Tile & Stone",
    bg: "dark",
    svg: (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <rect x="70" y="8" width="180" height="86" rx="8" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <g opacity="0.35" stroke="#4A90C4" strokeWidth="1.5" fill="none">
          <line x1="130" y1="16" x2="145" y2="30"/><line x1="145" y1="16" x2="130" y2="30"/>
          <line x1="150" y1="16" x2="165" y2="30"/><line x1="165" y1="16" x2="150" y2="30"/>
          <line x1="170" y1="16" x2="185" y2="30"/><line x1="185" y1="16" x2="170" y2="30"/>
        </g>
        <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#FFFFFF" letterSpacing="3">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="10" fill="#4A90C4" letterSpacing="5">TILE &amp; STONE</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="6" fill="rgba(255,255,255,0.25)" letterSpacing="2">LICENSED &amp; INSURED &bull; NJ</text>
      </svg>
    ),
  },
  {
    number: "32",
    style: "7M — Minimal Accent",
    bg: "white",
    svg: (
      <svg viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg" className="max-w-[280px] w-full h-auto">
        <g opacity="0.6" stroke="#2A5F8F" strokeWidth="2" fill="none">
          <line x1="152" y1="8" x2="160" y2="18"/><line x1="160" y1="8" x2="152" y2="18"/>
          <line x1="160" y1="8" x2="168" y2="18"/><line x1="168" y1="8" x2="160" y2="18"/>
        </g>
        <text x="160" y="44" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="28" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="64" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="14" fill="#2A5F8F" letterSpacing="8">FLOORING</text>
        <rect x="120" y="74" width="80" height="2" rx="1" fill="#E8DFD0"/>
        <text x="160" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="7" fill="#9CA3AF" letterSpacing="3">NEW JERSEY</text>
      </svg>
    ),
  },
];

export default function LogosPage() {
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
              Brand Concepts
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-navy leading-[1.2] mb-5">
              Logo Options
            </h2>
            <p className="text-[1.1rem] text-gray max-w-[600px] leading-[1.8] mx-auto">
              32 logo concepts for review. Mix of &ldquo;United Flooring&rdquo; and &ldquo;United Tile &amp; Stone&rdquo; variations, including 7M herringbone badge options.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {logos.map((logo) => (
              <div
                key={logo.number}
                className={`rounded-2xl p-12 px-8 flex flex-col items-center justify-center min-h-[260px] border border-black/[0.04] transition-all duration-400 relative overflow-hidden cursor-default hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${
                  logo.bg === "dark"
                    ? "bg-navy"
                    : logo.bg === "beige"
                    ? "bg-beige"
                    : "bg-white"
                }`}
              >
                <span
                  className={`absolute top-4 left-5 font-heading text-[0.7rem] font-bold tracking-[1px] uppercase ${
                    logo.bg === "dark" ? "text-white/30" : "text-gray-light"
                  }`}
                >
                  Concept {logo.number}
                </span>
                {logo.svg}
                <span
                  className={`mt-5 font-heading text-[0.72rem] font-medium tracking-[0.5px] uppercase ${
                    logo.bg === "dark" ? "text-white/40" : "text-gray"
                  }`}
                >
                  {logo.style}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
