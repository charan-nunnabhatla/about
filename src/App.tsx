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
      <main className="w-full relative z-10">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
