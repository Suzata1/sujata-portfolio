// import { useReveal } from "../lib/useReveal";
// import { Star } from "../components/Star";

// const ROLES = [
//   {
//     role: "Frontend/UI Developer",
//     org: "KRI Tech Global Innovative Solution Pvt. Ltd.",
//     time: "Apr 2026 — Sept 2026",
//     points: [
//       "Designed intuitive mobile and web interfaces in Figma, focusing on usability and aesthetics.",
//       "Collaborated with developers to turn designs into responsive front-end code.",
//     ],
//   },
//   {
//     role: "Freelance Graphics & UI/UX Designer",
//     org: "Freelance",
//     time: "2023 — Present",
//     points: [
//       "Created brand identities, posters and social media graphics for clients.",
//       "Designed mobile and web interfaces with a focus on usability.",
//     ],
//   },
//   {
//     role: "Secretary",
//     org: "CSITAN Rupandehi",
//     time: "2022 — 2024",
//     points: [
//       "Coordinated events including Web Essentials 2.0 and Internal Member Training on Designing.",
//       "Designed digital banners, promotional materials and event visuals; supported social media branding.",
//     ],
//   },
// ];

// function Item({ r, i }: { r: (typeof ROLES)[number]; i: number }) {
//   const ref = useReveal<HTMLDivElement>();
//   return (
//     <div ref={ref} className="reveal relative pl-10 sm:pl-14" style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}>
//       <span className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-(--color-paper) font-display text-xs text-(--color-accent) shadow-lg sm:h-10 sm:w-10">
//         {String(i + 1).padStart(2, "0")}
//       </span>
//       <div className="rounded-2xl bg-(--color-paper) p-6 shadow-xl sm:p-8">
//         <span className="inline-block rounded-full bg-(--color-accent) px-3 py-1 font-body text-xs font-medium text-(--color-canvas)">
//           {r.time}
//         </span>
//         <h3 className="mt-3 font-display text-xl tracking-tight text-(--color-ink) sm:text-2xl">{r.role}</h3>
//         <p className="font-body text-sm font-medium text-(--color-accent)">{r.org}</p>
//         <ul className="mt-4 space-y-2 font-body text-sm leading-relaxed text-(--color-ink)/80">
//           {r.points.map((p) => (
//             <li key={p} className="flex gap-2">
//               <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-(--color-accent)" />
//               {p}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export function Experience() {
//   const headingRef = useReveal<HTMLDivElement>();
//   return (
//     <section id="experience" className="corkboard grain relative overflow-hidden px-6 py-20 sm:py-28">
//       <Star top="8%" left="90%" size={30} rotate={-10} />
//       <Star top="88%" left="6%" size={38} rotate={14} />
//       <div ref={headingRef} className="reveal relative mb-14 text-center">
//         <p className="font-marker text-2xl text-(--color-canvas) sm:text-3xl">my journey</p>
//         <h2 className="mt-2 font-display text-5xl tracking-tight text-(--color-paper) sm:text-7xl">EXPERIENCE</h2>
//       </div>
//       <div className="relative mx-auto flex max-w-3xl flex-col gap-8 before:absolute before:bottom-6 before:left-4 before:top-6 before:border-l-2 before:border-dashed before:border-(--color-paper)/50 sm:before:left-5">
//         {ROLES.map((r, i) => (
//           <Item key={r.role} r={r} i={i} />
//         ))}
//       </div>
//     </section>
//   );
// }
import { useReveal } from "../lib/useReveal";
import { Tape } from "../components/Tape";
import { Star } from "../components/Star";

const ROLES = [
  {
    role: "Frontend / UI Developer",
    org: "KRI Tech Global Innovative Solution Pvt. Ltd.",
    time: "Apr 2026 — Sept 2026",
    badge: "Current",
    points: [
      "Design intuitive mobile and web interfaces in Figma, focused on usability and aesthetics.",
      "Collaborate with developers to turn designs into responsive front-end code.",
      "Create brand identities, posters and social media graphics.",
    ],
    tags: ["Figma", "Responsive UI", "Front-end"],
  },
  {
    role: "Freelance Graphics & UI/UX Designer",
    org: "Self-employed",
    time: "2023 — Present",
    badge: "Ongoing",
    points: [
      "Created brand identities, posters and social media graphics for clients.",
      "Designed mobile and web interfaces with a focus on usability and aesthetics.",
      "Worked with developers to hand off designs as responsive front-end code.",
    ],
    tags: ["Branding", "UI/UX", "Social graphics"],
  },
  {
    role: "Secretary",
    org: "CSITAN Rupandehi",
    time: "2022 — 2024",
    badge: "",
    points: [
      "Managed tech and design events including Web Essentials 2.0 and an internal design training.",
      "Designed digital banners, promotional materials and event visuals.",
      "Supported social media branding and outreach design strategy.",
    ],
    tags: ["Leadership", "Event management", "Design"],
  },
];

const STATS = [
  { n: "3+", l: "Years designing" },
  { n: "3", l: "Roles held" },
  { n: "3", l: "Projects shipped" },
  { n: "1st", l: "Girls in ICT coding workshop" },
];

function Item({ r, i }: { r: (typeof ROLES)[number]; i: number }) {
  const ref = useReveal<HTMLDivElement>();
  const left = i % 2 === 0;
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-14">
      <span
        className="absolute top-8 left-2.75 z-10 h-5 w-5 rounded-full border-4 border-paper bg-accent shadow md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />
      <div
        ref={ref}
        className={`reveal paper-note relative ml-12 rounded-sm p-6 sm:p-8 md:ml-0 ${left ? "md:col-start-1" : "md:col-start-2"}`}
        style={{ "--reveal-rot": `${left ? -1 : 1}deg`, "--reveal-delay": "80ms" } as React.CSSProperties}
      >
        <Tape top="-14px" left="24px" rotate={left ? -6 : 6} />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-marker text-2xl text-accent">{r.time}</span>
          {r.badge && (
            <span className="rounded-full bg-accent px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-widest text-canvas">
              {r.badge}
            </span>
          )}
        </div>
        <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
          {r.role}
        </h3>
        <p className="mt-1 font-body text-sm font-semibold text-accent">{r.org}</p>
        <ul className="mt-4 space-y-2">
          {r.points.map((p) => (
            <li key={p} className="flex gap-2.5 font-body text-sm leading-relaxed text-ink/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {r.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-accent/30 px-3 py-1 font-body text-xs text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  const headingRef = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="corkboard grain relative overflow-hidden px-6 py-20 sm:py-28">
      <Star top="8%" left="90%" size={30} rotate={-10} />
      <Star top="92%" left="6%" size={38} rotate={14} />
      <Star top="45%" left="96%" size={24} rotate={-6} color="oklch(0.78 0.14 80)" />

      <div ref={headingRef} className="reveal relative mb-12 text-center">
        <p className="font-marker text-2xl text-canvas sm:text-3xl">where I've worked</p>
        <h2 className="mt-1 font-display text-5xl tracking-tight text-paper sm:text-7xl">EXPERIENCE</h2>
      </div>

      <dl className="relative mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.l} className="rounded-sm border border-canvas/25 bg-canvas/5 px-4 py-5 text-center">
            <dt className="font-display text-4xl text-paper">{s.n}</dt>
            <dd className="mt-1 font-body text-xs uppercase tracking-wider text-canvas/75">{s.l}</dd>
          </div>
        ))}
      </dl>

      <div className="relative mx-auto max-w-5xl">
        <div
          className="absolute top-2 bottom-2 left-5 w-0.5 border-l-2 border-dashed border-canvas/40 md:left-1/2 md:-translate-x-px"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-14">
          {ROLES.map((r, i) => (
            <Item key={r.role} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
