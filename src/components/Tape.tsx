export function Tape({ top, left, rotate = 0 }: { top: string; left: string; rotate?: number }) {
  return <span className="tape" aria-hidden="true" style={{ top, left, transform: `rotate(${rotate}deg)` }} />;
}
