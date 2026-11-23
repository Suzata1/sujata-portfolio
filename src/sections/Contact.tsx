import { useReveal } from "../lib/useReveal";
import { Tape } from "../components/Tape";
import { Star } from "../components/Star";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const ribbonRef = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-20 sm:py-28">
      <Star top="10%" left="12%" size={26} rotate={-10} />
      <Star top="70%" left="88%" size={30} rotate={16} color="oklch(0.78 0.14 80)" />
      <Star top="80%" left="14%" size={20} rotate={8} />

      <div
        ref={ribbonRef}
        className="reveal ribbon mx-auto mb-14 flex h-20 w-52 items-center justify-center pb-3 sm:h-24 sm:w-64"
      >
        <span className="font-marker text-2xl text-canvas sm:text-3xl">the end</span>
      </div>
      <div
        ref={ref}
        className="reveal paper-note relative mx-auto max-w-xl rounded-sm p-8 text-center sm:p-12"
        style={{ "--reveal-rot": "-1.5deg", "--reveal-delay": "120ms" } as React.CSSProperties}
      >
        <Tape top="-14px" left="calc(50% - 45px)" rotate={-6} />
        <p className="font-marker text-2xl text-accent">say hello</p>
        <h2 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          LET'S MAKE SOMETHING
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink/80">
          Open to freelance and full-time design work. Based in Butwal, Rupandehi — send a note
          or call 9766272780.
        </p>
        <a
          href="mailto:pokhrelsujata188@gmail.com"
          className="mt-8 inline-block rounded-sm bg-accent px-8 py-4 font-display text-sm tracking-wide text-canvas transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
         pokhrelsujata188@gmail.com
        </a>
        <div className="mt-6 flex justify-center gap-6 font-body text-sm text-accent">
          <a className="underline" href="https://github.com/Suzata1" target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline" href="https://www.linkedin.com/in/sujata-pokhrel-3b2458285/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <footer className="mt-14 text-center font-body text-xs text-ink/60">
        © 2026 Sujata Pokhrel — Made with paper, tape and a little chaos.
      </footer>
    </section>
  );
}
