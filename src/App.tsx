import { useEffect } from "react";
import { initLenis } from "./lib/lenis";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { IntroStrip } from "./sections/IntroStrip";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Design } from "./sections/Design";
import { Contact } from "./sections/Contact";

export default function App() {
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative">
      <Nav />
      <Hero />
      <IntroStrip />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Design />
      <Contact />
    </main>
  );
}
