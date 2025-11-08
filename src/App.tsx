import About from "./components/custom/about";
import Contact from "./components/custom/contact";
import CustomCursor from "./components/custom/custom-cursor";
import Education from "./components/custom/education";
import Experience from "./components/custom/experience";
import Header from "./components/custom/header";
import Hero from "./components/custom/hero";
import Projects from "./components/custom/projects";
import TechStack from "./components/custom/tech-stack";

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Contact />

        <footer className="border-t border-[var(--near-black)]/10 py-8 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center text-sm text-[var(--medium-text)]">
            © 2024 Charan Nunnabhatla
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
