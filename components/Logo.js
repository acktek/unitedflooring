/**
 * 7M Herringbone Badge Logo — two variants:
 *   variant="inline"  → horizontal nav/header logo (herringbone mark + text)
 *   variant="badge"   → full compact badge (footer, about, etc.)
 *
 * theme="light" → navy/blue text (for white/beige backgrounds)
 * theme="dark"  → white/blue text (for navy/dark backgrounds)
 */
export default function Logo({ variant = "inline", theme = "light", className = "" }) {
  if (variant === "badge") {
    return theme === "dark" ? (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="70" y="8" width="180" height="86" rx="8" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <g opacity="0.35" stroke="#4A90C4" strokeWidth="1.5" fill="none">
          <line x1="130" y1="16" x2="145" y2="30"/><line x1="145" y1="16" x2="130" y2="30"/>
          <line x1="150" y1="16" x2="165" y2="30"/><line x1="165" y1="16" x2="150" y2="30"/>
          <line x1="170" y1="16" x2="185" y2="30"/><line x1="185" y1="16" x2="170" y2="30"/>
        </g>
        <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#FFFFFF" letterSpacing="3">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#4A90C4" letterSpacing="6">FLOORING</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="6" fill="rgba(255,255,255,0.25)" letterSpacing="2">LICENSED &amp; INSURED &#8226; NJ</text>
      </svg>
    ) : (
      <svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="70" y="8" width="180" height="86" rx="8" fill="none" stroke="#1B3A5C" strokeWidth="1" opacity="0.2"/>
        <g opacity="0.5" stroke="#1B3A5C" strokeWidth="1.5" fill="none">
          <line x1="130" y1="16" x2="145" y2="30"/><line x1="145" y1="16" x2="130" y2="30"/>
          <line x1="150" y1="16" x2="165" y2="30"/><line x1="165" y1="16" x2="150" y2="30"/>
          <line x1="170" y1="16" x2="185" y2="30"/><line x1="185" y1="16" x2="170" y2="30"/>
        </g>
        <text x="160" y="56" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="20" fill="#1B3A5C" letterSpacing="3">UNITED</text>
        <text x="160" y="74" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="11" fill="#2A5F8F" letterSpacing="6">FLOORING</text>
        <text x="160" y="90" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="6" fill="#9CA3AF" letterSpacing="2">LICENSED &amp; INSURED &#8226; NJ</text>
      </svg>
    );
  }

  // Inline variant — herringbone mark + text, horizontal
  const navy = "#1B3A5C";
  const blue = "#2A5F8F";
  const white = "#FFFFFF";
  const blueLight = "#4A90C4";

  const titleColor = theme === "dark" ? white : navy;
  const subtitleColor = theme === "dark" ? blueLight : blue;
  const hbColor = theme === "dark" ? blueLight : navy;
  const hbOpacity = theme === "dark" ? "0.4" : "0.55";

  return (
    <svg viewBox="0 0 110 48" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Herringbone mark — centered above text */}
      <g opacity={hbOpacity} stroke={hbColor} strokeWidth="1.5" fill="none">
        <line x1="30" y1="2" x2="40" y2="13"/><line x1="40" y1="2" x2="30" y2="13"/>
        <line x1="43" y1="2" x2="53" y2="13"/><line x1="53" y1="2" x2="43" y2="13"/>
        <line x1="56" y1="2" x2="66" y2="13"/><line x1="66" y1="2" x2="56" y2="13"/>
        <line x1="69" y1="2" x2="79" y2="13"/><line x1="79" y1="2" x2="69" y2="13"/>
      </g>
      {/* Text */}
      <text x="55" y="30" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="14" fill={titleColor} letterSpacing="2">UNITED</text>
      <text x="55" y="43" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontWeight="400" fontSize="8.5" fill={subtitleColor} letterSpacing="4">FLOORING</text>
    </svg>
  );
}
