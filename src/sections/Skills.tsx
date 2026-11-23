import { useReveal } from "../lib/useReveal";
import { Star } from "../components/Star";

const GROUPS = [
  { title: "Design tools", icon: "✎", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva"] },
  { title: "Development", icon: "</>", items: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "Flutter (Dart)"] },
  { title: "UI/UX", icon: "◧", items: ["Wireframing", "Prototyping", "User research", "Usability testing"] },
  { title: "Soft skills", icon: "♥", items: ["Leadership", "Communication", "Time management", "Team collaboration"] },
];

const TOOLS = [
  ["Fg", "Figma", "#a259ff"],
  ["Ps", "Photoshop", "#31a8ff"],
  ["Ai", "Illustrator", "#ff9a00"],
  ["Cv", "Canva", "#00c4cc"],
  ["H5", "HTML", "#e34f26"],
  ["C3", "CSS", "#1572b6"],
  ["JS", "JavaScript", "#f7df1e"],
  ["Nx", "Next.js", "#111111"],
  ["Tw", "Tailwind", "#06b6d4"],
  ["Fl", "Flutter", "#02569b"],
  ["Dt", "Dart", "#0175c2"],
  ["Gh", "GitHub", "#24292f"],
];

function ToolRow({ reverse = false }: { reverse?: boolean }) {
  const list = [...TOOLS, ...TOOLS];
  const items = reverse ? [...list].reverse() : list;
  return (
    <div className="tool-mask overflow-hidden py-3">
      <div className={`tool-track flex w-max gap-5 ${reverse ? "tool-reverse" : ""}`}>
        {items.map(([k, name, c], i) => (
          <div
            key={i}
            className="flex w-28 shrink-0 flex-col items-center gap-2 rounded-2xl bg-(--color-paper) px-3 py-4 shadow-lg transition-transform hover:-translate-y-1 hover:scale-105"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-xl font-display text-xl shadow-inner"
              style={{ background: c, color: k === "JS" ? "#111" : "#fff" }}
            >
              {k}
            </span>
            <span className="font-body text-xs font-medium text-(--color-ink)">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Group({ g, i }: { g: (typeof GROUPS)[number]; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal rounded-2xl bg-(--color-paper) p-7 shadow-xl transition-transform hover:-translate-y-1"
      style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-accent) font-display text-sm text-(--color-canvas)">
          {g.icon}
        </span>
        <h3 className="font-display text-xl tracking-tight text-(--color-ink)">{g.title}</h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {g.items.map((s) => (
          <li
            key={s}
            className="rounded-full border border-(--color-accent)/30 bg-(--color-accent)/5 px-4 py-1.5 font-body text-sm text-(--color-ink) transition-colors hover:bg-(--color-accent) hover:text-(--color-canvas)"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const headingRef = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="corkboard grain relative overflow-hidden px-6 py-20 sm:py-28">
      <Star top="8%" left="6%" size={34} rotate={-12} />
      <Star top="85%" left="92%" size={40} rotate={18} color="oklch(0.78 0.14 80)" />
      <div ref={headingRef} className="reveal relative mb-14 text-center">
        <p className="font-marker text-2xl text-(--color-canvas) sm:text-3xl">what I bring</p>
        <h2 className="mt-2 font-display text-5xl tracking-tight text-(--color-paper) sm:text-7xl">SKILLS</h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-(--color-canvas)/80">
          A blend of visual design, front-end development and people skills.
        </p>
      </div>
      <div className="relative mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
        {GROUPS.map((g, i) => (
          <Group key={g.title} g={g} i={i} />
        ))}
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl">
        <p className="mb-4 text-center font-marker text-2xl text-(--color-canvas)">tools I work with</p>
        <ToolRow />
        <ToolRow reverse />
      </div>
    </section>
  );
}