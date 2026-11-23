export function ContactSheet() {
  const cells = [0, 1, 2, 3];
  return (
    <div className="film-strip relative flex flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-center sm:gap-4">
      <div className="flex gap-2">
        {cells.map((i) => (
          <div key={i} className="aspect-2/3 w-14 overflow-hidden rounded-sm border-2 border-canvas/40 sm:w-16">
            <img
              src="/img/cartoon.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain bg-accent/20"
              style={{ transform: `scale(${1 + i * 0.4})`, transformOrigin: "50% 15%" }}
            />
          </div>
        ))}
      </div>
      <a
        href="#projects"
        className="rounded-full bg-canvas px-7 py-3 font-display text-xs tracking-widest text-accent transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas focus-visible:ring-offset-2"
      >
        VIEW THE WORK →
      </a>
    </div>
  );
}
