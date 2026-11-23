import Lenis from "lenis";

export function initLenis() {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  let id = 0;
  const raf = (t: number) => {
    lenis.raf(t);
    id = requestAnimationFrame(raf);
  };
  id = requestAnimationFrame(raf);
  const destroy = lenis.destroy.bind(lenis);
  lenis.destroy = () => {
    cancelAnimationFrame(id);
    destroy();
  };
  return lenis;
}
