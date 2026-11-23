const WORDS = ["Graphic Design", "UI/UX Design", "Flutter", "Branding", "Wireframing", "Prototyping", "Figma", "Posters"];

export function IntroStrip() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden bg-(--color-paper) py-4" aria-label="Disciplines">
      <div className="intro-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl tracking-tight text-(--color-accent) sm:text-3xl">
        {row.concat(row).map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
