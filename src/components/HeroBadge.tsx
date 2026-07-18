export default function HeroBadge({ size = 128 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 160 160"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
      className="text-burgundy"
    >
      <path
        id="hero-badge-arc"
        d="M 24,84 A 56,56 0 0 1 136,84"
        fill="none"
      />
      <text fontSize="9.5" letterSpacing="2.5" fill="currentColor">
        <textPath href="#hero-badge-arc" startOffset="50%" textAnchor="middle">
          PSICOLOGIA &amp; BEM-ESTAR
        </textPath>
      </text>

      <circle cx="80" cy="98" r="46" stroke="currentColor" strokeWidth="1" opacity="0.7" />

      <text
        x="66"
        y="120"
        textAnchor="middle"
        fontFamily="var(--font-playfair), serif"
        fontSize="52"
        fill="currentColor"
      >
        A
      </text>
      <text
        x="98"
        y="128"
        textAnchor="middle"
        fontFamily="var(--font-playfair), serif"
        fontSize="34"
        fill="currentColor"
      >
        P
      </text>
      <circle cx="83" cy="103" r="2.5" fill="var(--color-tan)" />
    </svg>
  );
}
