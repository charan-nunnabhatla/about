import About from "./components/custom/about";
import Contact from "./components/custom/contact";
import Education from "./components/custom/education";
import Header from "./components/custom/header";
import Hero from "./components/custom/hero";
import Projects from "./components/custom/projects";
import TechStack from "./components/custom/tech-stack";
import AnimatedGridPattern from "./components/ui/animated-grid-pattern";

function App() {
  return (
    <>
      <Header />
      <div className=" h-auto snap-y snap-mandatory  w-full overflow-hidden md:w-[70%] lg:w-[40%] xl:w-[40%] mx-auto">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
        <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
        className={`
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-y-[-30%] h-[100%] w-[100%] skew-y-12 "
        `}
      />
        <div className="w-[90%] mx-auto border border-gray-500 "></div>
        <div className="p-3 text-xs text-center text-gray-500">
          Last Update: Dec 2024
        </div>
      </div>
    </>
  );
}

export default App;
