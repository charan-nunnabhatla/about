import MiniTile from "./mini-tile";
import BlurFade from "../ui/blur-fade";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiFlask, SiTypescript } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";

export default function TechStack() {
  return (
    <BlurFade delay={1}>
      <div className="flex flex-col text-lg p-5 font-bold md:text-xl lg:text-2xl">
        <h1>Tech Stack</h1>
        <div className="flex flex-wrap justify-center flex-row gap-2 select-none p-2 items-center my-3">
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
