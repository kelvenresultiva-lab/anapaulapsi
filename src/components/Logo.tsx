export default function Logo({
  size = 40,
  light = false,
}: {
  size?: number;
  light?: boolean;
}) {
  const stroke = light ? "#f6efe4" : "#3a1c22";
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" stroke={stroke} strokeWidth="1.5" />
      <circle cx="24" cy="24" r="17" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="var(--font-playfair), serif"
        fontSize="17"
        fill={stroke}
      >
        AP
      </text>
    </svg>
  );
}
