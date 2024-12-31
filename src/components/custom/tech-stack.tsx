import MiniTile from "./mini-tile";
import BlurFade from "../ui/blur-fade";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFlask, SiTypescript } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";

export default function TechStack() {
  return (
    <BlurFade delay={0.3} inView>
      <div id="tech-stack" className="flex flex-col items-center justify-center p-5 text-lg font-bold md:h-screen md:text-xl lg:text-2xl">
        <h1>Tech Stack</h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 p-2 my-3 select-none">
          <MiniTile title="React" Icon={FaReact} />
          <MiniTile title="Flutter" Icon={FaFlutter} />
          <MiniTile title="Python" Icon={FaPython} />
          <MiniTile title="JavaScript" Icon={IoLogoJavascript} />
          <MiniTile title="Node.js" Icon={FaNodeJs} />
          <MiniTile title="TypeScript" Icon={SiTypescript} />
          <MiniTile title="Tailwindcss" Icon={RiTailwindCssFill} />
          <MiniTile title="Express" Icon={SiExpress} />
          <MiniTile title="Flask" Icon={SiFlask} />
        </div>
      </div>
    </BlurFade>
  );
}
