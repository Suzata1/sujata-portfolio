export function Star({
  top,
  left,
  size = 28,
  rotate = 0,
  color = "oklch(0.96 0.015 75)",
}: {
  top: string;
  left: string;
  size?: number;
  rotate?: number;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="star-sticker pointer-events-none absolute"
      style={{ top, left, width: size, height: size, transform: `rotate(${rotate}deg)`, fill: color }}
    >
      <path d="M12 1l2.9 7.3L22 9.3l-5.6 4.8L18 22l-6-4-6 4 1.6-7.9L2 9.3l7.1-1z" />
    </svg>
  );
}
