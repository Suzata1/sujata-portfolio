import { useReveal } from "../lib/useReveal";
import { Tape } from "../components/Tape";
import { Star } from "../components/Star";

export function About() {
  const photoRef = useReveal<HTMLDivElement>();
  const textRef = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="corkboard grain relative overflow-hidden px-6 py-20 sm:py-28">
      <Star top="10%" left="8%" size={28} rotate={-8} />
      <Star top="82%" left="90%" size={34} rotate={16} color="oklch(0.78 0.14 80)" />
      <Star top="14%" left="92%" size={22} rotate={10} />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-12 sm:flex-row sm:items-center sm:gap-16">
        <div
          ref={photoRef}
          className="reveal relative shrink-0"
          style={{ "--reveal-rot": "0deg" } as React.CSSProperties}
        >
          <div
            className="absolute -right-8 -top-8 hidden h-28 w-24 rotate-10 items-center justify-center border-2 border-dashed border-paper/50 bg-accent p-2 sm:flex"
            aria-hidden="true"
          >
            <span className="font-marker rotate-10 text-[11px] leading-tight text-paper/80">
              handmade · handmade · handmade
            </span>
          </div>
          <div className="paper-note relative w-64 -rotate-3 rounded-sm p-3 sm:w-72">
            <Tape top="-14px" left="calc(50% - 45px)" rotate={-6} />
            <img
              src="/img/cartoon.png"
              alt="Cartoon portrait of Sujata Pokhrel"
              className="aspect-4/5 w-full rounded-sm bg-accent/10 object-contain"
            />
            <p className="font-marker mt-2 text-center text-lg text-ink">sujata pokhrel</p>
          </div>
        </div>

        <div
          ref={textRef}
          className="reveal text-center sm:text-left"
          style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
        >
          <h2 className="font-marker text-5xl text-canvas sm:text-7xl">about me</h2>
          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-canvas/85 sm:text-lg">
            I'm a creative, detail-oriented graphic designer, UI/UX designer and Flutter
            developer based in Butwal, Rupandehi. I turn ideas into impactful designs and
            functional, user-friendly interfaces. I love collaborating with teams, organizing
            events and leading design-focused initiatives with CSITAN Rupandehi. Off the
            screen, you'll find me watching anime or travelling.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
            {["UI/UX design", "Graphic design", "Flutter development", "Event leadership"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-canvas/30 px-3 py-1 font-body text-xs text-canvas/85"
                >
                  {t}
                </span>
              )
            )}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-dashed border-canvas/30 pt-6">
            {[["3", "Figma projects"], ["3", "roles held"], ["1", "ICT award"]].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-paper sm:text-4xl">{n}</p>
                <p className="font-body text-xs text-canvas/75">{l}</p>
              </div>
            ))}
          </div>
          <a
            href="#projects"
            className="mt-7 inline-block rounded-full bg-paper px-7 py-3 font-display text-xs tracking-widest text-accent transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2"
          >
            VIEW WORK →
          </a>
        </div>
      </div>
    </section>
  );
}
