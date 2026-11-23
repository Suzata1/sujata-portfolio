// import { useReveal } from "../lib/useReveal";

// const PROJECTS = [
//   {
//     n: "01",
//     title: "Cafe App",
//     type: "Mobile Application",
//     img: "/img/project-1.png",
//     desc: "A responsive café mobile app designed in Figma, covering browsing, ordering and a clean, friendly visual style.",
//     tags: ["Figma", "UI Design", "Mobile"],
//     href: "https://www.figma.com/design/d23nSCB1xNmxlvPGiVUlp4/Cafe-application?node-id=1-3",
//   },
//   {
//     n: "02",
//     title: "CafeHub",
//     type: "E-commerce Website",
//     img: "/img/project-2.png",
//     desc: "A responsive e-commerce website for a café, designed in Figma with product browsing and a smooth shopping flow.",
//     tags: ["Figma", "E-commerce", "Responsive"],
//     href: "https://www.figma.com/design/tFiK8HIVO3urJOElg3Jer9/cafe-sample-design?node-id=40-8",
//   },
//   {
//     n: "03",
//     title: "Trash Detection App",
//     type: "App Design",
//     img: "/img/project-3.png",
//     desc: "A responsive trash detection application designed in Figma, focused on clear, simple interactions for everyday users.",
//     tags: ["Figma", "UX", "Mobile"],
//     href: "https://www.figma.com/design/cH3EEbCyfTIELw4IsUx46T/College?node-id=0-1",
//   },
// ];

// function Card({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
//   const ref = useReveal<HTMLElement>();
//   const flip = i % 2 === 1;
//   return (
//     <article
//       ref={ref}
//       className="reveal group grid overflow-hidden rounded-3xl bg-(--color-paper) shadow-xl ring-1 ring-(--color-accent)/10 md:grid-cols-2"
//     >
//       <div className={`relative aspect-[4/3] overflow-hidden bg-(--color-accent)/10 md:aspect-auto ${flip ? "md:order-2" : ""}`}>
//         <img
//           src={p.img}
//           alt={`${p.title} preview`}
//           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//         />
//         <span className="absolute left-5 top-5 rounded-full bg-(--color-accent) px-4 py-1.5 font-display text-xs tracking-widest text-(--color-canvas)">
//           {p.n}
//         </span>
//       </div>
//       <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
//         <p className="font-marker text-xl text-(--color-accent)">{p.type}</p>
//         <h3 className="font-display text-3xl tracking-tight text-(--color-ink) sm:text-4xl">{p.title}</h3>
//         <p className="font-body text-sm leading-relaxed text-(--color-ink)/75 sm:text-base">{p.desc}</p>
//         <ul className="flex flex-wrap gap-2">
//           {p.tags.map((t) => (
//             <li key={t} className="rounded-full border border-(--color-accent)/30 px-3 py-1 font-body text-xs text-(--color-accent)">
//               {t}
//             </li>
//           ))}
//         </ul>
//         <a
//           href={p.href}
//           target="_blank"
//           rel="noreferrer"
//           className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-(--color-accent) px-7 py-3 font-display text-xs tracking-widest text-(--color-canvas) transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2"
//         >
//           VIEW CASE ON FIGMA <span aria-hidden="true">↗</span>
//         </a>
//       </div>
//     </article>
//   );
// }

// export function Projects() {
//   const headingRef = useReveal<HTMLDivElement>();
//   return (
//     <section id="projects" className="relative px-6 py-20 sm:py-28">
//       <div ref={headingRef} className="reveal mb-14 text-center">
//         <p className="font-marker text-2xl text-(--color-accent) sm:text-3xl">selected work</p>
//         <h2 className="mt-2 font-display text-5xl tracking-tight text-(--color-ink) sm:text-7xl">PROJECTS</h2>
//         <p className="mx-auto mt-4 max-w-xl font-body text-(--color-ink)/70">
//           A few interface designs I've created in Figma — click through to explore each one.
//         </p>
//       </div>
//       <div className="mx-auto flex max-w-5xl flex-col gap-10">
//         {PROJECTS.map((p, i) => (
//           <Card key={p.title} p={p} i={i} />
//         ))}
//       </div>
//     </section>
//   );
// }
import { useReveal } from "../lib/useReveal";
import { Tape } from "../components/Tape";

const PROJECTS = [
  {
    n: "01",
    title: "Cafe App",
    tag: "Mobile app",
    img: "/img/project-1.png",
    desc: "A responsive café mobile application designed in Figma — menu browsing, ordering flow and a warm, easy-to-scan interface.",
    tools: ["Figma", "UI design", "Prototyping"],
    href: "https://www.figma.com/design/d23nSCB1xNmxlvPGiVUlp4/Cafe-application?node-id=1-3&t=WFc9UgdX6Xw304ZA-1",
  },
  {
    n: "02",
    title: "CafeHub",
    tag: "E-commerce website",
    img: "/img/project-2.png",
    desc: "A responsive e-commerce website for a café brand, with a clear product layout and a smooth path from browsing to checkout.",
    tools: ["Figma", "Web design", "Responsive"],
    href: "https://www.figma.com/design/tFiK8HIVO3urJOElg3Jer9/cafe-sample-design?node-id=40-8&t=HqHJt6atuDpYwxyF-1",
  },
  {
    n: "03",
    title: "Trash Detection App",
    tag: "Mobile app",
    img: "/img/project-3.png",
    desc: "A responsive app concept that helps users identify and report waste, designed around simple, focused screens.",
    tools: ["Figma & Flutter", "UX flow", "Mobile"],
    href: "https://www.figma.com/design/cH3EEbCyfTIELw4IsUx46T/College?node-id=0-1&t=RCEqgt4P8KN6F0Fl-1",
  },

{
n: "04",
title: "College App",
tag: "Mobile app",
img: "/img/project-4.png",
desc: "A responsive mobile app concept for college students, designed to streamline campus navigation and event management.",
tools: ["Flutter", "Realtime app", "Mobile"],
href: "https://www.figma.com/design/college-app?node-id=0-1&t=example-1",
},
];


const ACHIEVEMENTS = [
  { k: "Winner", v: "Girls in ICT Nepal Coding Workshop" },
  { k: "Volunteer", v: "CSITAN Rupandehi" },
  { k: "Volunteer", v: "BMCIT Club" },
  { k: "Volunteer", v: "WordCamp Nepal 2026" },
];

function Card({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className="reveal paper-note group relative flex flex-col rounded-sm p-4 pb-6"
      style={{ "--reveal-rot": `${i === 1 ? 1 : -1}deg`, "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
    >
      <Tape top="-14px" left="calc(50% - 45px)" rotate={i % 2 ? 6 : -6} />
      <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-accent">
        <img
          src={p.img}
          alt={`${p.title} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-paper px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-widest text-accent">
          {p.tag}
        </span>
      </div>
      <div className="mt-5 flex items-baseline gap-3 px-1">
        <span className="font-marker text-2xl text-accent">{p.n}</span>
        <h3 className="font-display text-2xl leading-tight tracking-tight text-ink">{p.title}</h3>
      </div>
      <p className="mt-3 px-1 font-body text-sm leading-relaxed text-ink/75">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2 px-1">
        {p.tools.map((t) => (
          <span key={t} className="rounded-full border border-accent/30 px-3 py-1 font-body text-xs text-accent">
            {t}
          </span>
        ))}
      </div>
      <a
        href={p.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 mx-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-xs tracking-widest text-canvas transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        VIEW IN FIGMA ↗
      </a>
    </article>
  );
}

export function Projects() {
  const headingRef = useReveal<HTMLDivElement>();
  const awardsRef = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative px-6 py-20 sm:py-28">
      <div ref={headingRef} className="reveal mb-14 text-center">
        <p className="font-marker text-2xl text-accent sm:text-3xl">selected work</p>
        <h2 className="mt-1 font-display text-5xl tracking-tight text-ink sm:text-7xl">PROJECTS</h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-ink/70 sm:text-base">
          Three design projects, from research and wireframes to polished, responsive Figma prototypes.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
        {PROJECTS.map((p, i) => (
          <Card key={p.title} p={p} i={i} />
        ))}
      </div>

      <div ref={awardsRef} className="reveal mx-auto mt-20 max-w-5xl">
        <p className="mb-5 text-center font-marker text-3xl text-accent">achievements & volunteering</p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.v} className="rounded-sm border border-accent/25 bg-paper px-4 py-5 text-center shadow-sm">
              <p className="font-display text-xl text-accent">{a.k}</p>
              <p className="mt-1 font-body text-xs leading-snug text-ink/75 sm:text-sm">{a.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
