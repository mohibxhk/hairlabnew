interface EmblemProps {
  className?: string;
}

/** Hair Lab Co. circular emblem — HL monogram, scissors, razor, "EST 1979". */
export function Emblem({ className }: EmblemProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none">
      <defs>
        <path id="arcTop" d="M42,100 A58,58 0 0,1 158,100" />
        <path id="arcBot" d="M46,100 A54,54 0 0,0 154,100" />
      </defs>
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="89" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="83" stroke="currentColor" strokeWidth="0.7" />
      <text fontFamily="Cormorant Garamond, serif" fontWeight="700" fontSize="16" letterSpacing="2.5" fill="currentColor" textAnchor="middle">
        <textPath href="#arcTop" startOffset="50%">HAIR LAB CO.</textPath>
      </text>
      <text fontFamily="Cormorant Garamond, serif" fontWeight="700" fontSize="13" letterSpacing="4" fill="currentColor" textAnchor="middle">
        <textPath href="#arcBot" startOffset="50%">EST 1979</textPath>
      </text>
      <path d="M100 40 l1.3 2.7 3 .4 -2.2 2.1 .5 3 -2.6-1.4 -2.6 1.4 .5-3 -2.2-2.1 3-.4z" fill="currentColor" />
      <path d="M100 154 l1.3 2.7 3 .4 -2.2 2.1 .5 3 -2.6-1.4 -2.6 1.4 .5-3 -2.2-2.1 3-.4z" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <g transform="translate(52,100)">
          <circle cx="-4.5" cy="7.5" r="3" /><circle cx="4.5" cy="7.5" r="3" />
          <path d="M-2.4 5.6 L4 -8" /><path d="M2.4 5.6 L-4 -8" />
        </g>
        <g transform="translate(148,100)">
          <circle cx="-4.5" cy="7.5" r="3" /><circle cx="4.5" cy="7.5" r="3" />
          <path d="M-2.4 5.6 L4 -8" /><path d="M2.4 5.6 L-4 -8" />
        </g>
      </g>
      <text x="100" y="120" fontFamily="Cormorant Garamond, serif" fontWeight="700" fontSize="66" letterSpacing="-3" fill="currentColor" textAnchor="middle">HL</text>
      <path d="M104 78 L118 128" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
