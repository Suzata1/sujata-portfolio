const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#design", label: "Design" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-4 sm:px-10">
      <a
        href="#top"
        className="font-display text-xl tracking-tight text-(--color-canvas) mix-blend-difference"
      >
        SUJATA POKHREL
      </a>
      <nav className="hidden gap-7 sm:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-body text-sm font-medium text-(--color-canvas) mix-blend-difference transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-(--color-canvas) focus-visible:outline-none"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
