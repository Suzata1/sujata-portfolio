import { useReveal } from "../lib/useReveal";
import { Star } from "../components/Star";

export function Design() {
  const ref = useReveal<HTMLDivElement>();
  const imgRef = useReveal<HTMLDivElement>();
  return (
    <section id="design" className="corkboard grain relative overflow-hidden px-6 py-20 sm:py-28">
      <Star top="10%" left="8%" size={30} rotate={-10} />
      <Star top="12%" left="90%" size={26} rotate={12} color="oklch(0.78 0.14 80)" />
      <Star top="88%" left="6%" size={24} rotate={8} />

      <div ref={ref} className="reveal relative mx-auto max-w-3xl text-center">
        <h2 className="font-marker text-6xl text-canvas sm:text-7xl">design</h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-canvas/85 sm:text-lg">
          Interfaces, one screen at a time. I design mobile and web products in Figma —
          wireframes, prototypes and usability-tested flows with clear hierarchy and a human touch.
        </p>
        <a
          href="#projects"
          aria-label="See the work in motion"
          className="group mx-auto mt-9 flex h-24 w-24 items-center justify-center rounded-full bg-paper/90 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 sm:h-28 sm:w-28"
        >
          <svg viewBox="0 0 24 24" className="h-9 w-9 fill-accent sm:h-10 sm:w-10">
            <path d="M8 5v14l11-7z" />
          </svg>
        </a>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {[
          ["01", "Wireframing", "Structure and flow before pixels."],
          ["02", "Prototyping", "Clickable Figma prototypes to test ideas fast."],
          ["03", "Usability testing", "Real feedback shaping every iteration."],
        ].map(([n, t, d]) => (
          <div key={n} className="paper-note rounded-sm p-5 text-left transition-transform hover:-translate-y-1">
            <span className="font-marker text-2xl text-accent">{n}</span>
            <h3 className="font-display text-lg text-ink">{t}</h3>
            <p className="mt-1 text-sm text-ink/75">{d}</p>
          </div>
        ))}
      </div>

      <div
        ref={imgRef}
        className="reveal relative mx-auto mt-14 max-w-4xl"
        style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
      >
        <img
          src="/img/phone-mockups.png"
          alt="Four mobile app UI design mockups"
          className="w-full rounded-sm"
        />
      </div>
    </section>
  );
}
