const FACTS = [
  ["3+", "Years designing"],
  ["3", "Figma projects"],
  ["1", "ICT award"],
];

export function Hero() {
  return (
    <section id="top" className="corkboard grain relative overflow-hidden px-6 pb-16 pt-28 sm:pt-32 lg:pb-24">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-(--color-canvas)/30 px-4 py-1.5 font-body text-xs tracking-widest text-(--color-canvas)/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> OPEN FOR WORK · BUTWAL, NEPAL
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-tight text-(--color-canvas) sm:text-8xl">
            Sujata
            <br />
            Pokhrel
          </h1>
          <p className="font-marker mt-4 text-2xl text-(--color-paper) sm:text-3xl">
            Graphic Designer · UI/UX Designer · Flutter Developer
          </p>
          <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-(--color-canvas)/85 lg:mx-0 sm:text-lg">
            I turn ideas into clear, beautiful and user-friendly digital experiences — from brand
            visuals to responsive web and mobile interfaces.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-(--color-paper) px-8 py-3.5 font-display text-xs tracking-widest text-(--color-accent) shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-paper) focus-visible:ring-offset-2"
            >
              VIEW MY WORK →
            </a>
            <a
              href="#contact"
              className="rounded-full border border-(--color-paper)/70 px-8 py-3.5 font-display text-xs tracking-widest text-(--color-paper) transition-colors hover:bg-(--color-paper) hover:text-(--color-accent)"
            >
              CONTACT ME
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-(--color-canvas)/25 pt-6 text-center lg:text-left">
            {FACTS.map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl text-(--color-paper) sm:text-4xl">{n}</dt>
                <dd className="font-body text-xs text-(--color-canvas)/75">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 relative mx-auto w-full max-w-sm lg:order-2 lg:max-w-md">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border-2 border-dashed border-(--color-paper)/40" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] bg-(--color-paper) pt-6 shadow-2xl">
            <img
              src="/img/cartoon.png"
              alt="Cartoon portrait of Sujata Pokhrel"
              className="mx-auto h-[420px] w-auto object-contain sm:h-[520px]"
            />
            <div className="bg-(--color-accent) px-5 py-3 text-center font-marker text-lg text-(--color-paper)">
              hello, I'm Sujata ✦
            </div>
          </div>
          <span className="font-display absolute -right-2 top-10 rotate-6 rounded-md bg-(--color-paper) px-3 py-2 text-xs text-(--color-accent) shadow-lg sm:-right-8">
            UI / UX
          </span>
          <span className="font-display absolute -left-2 top-1/2 -rotate-6 rounded-md bg-(--color-paper) px-3 py-2 text-xs text-(--color-accent) shadow-lg sm:-left-8">
            Flutter
          </span>
        </div>
      </div>
    </section>
  );
}
