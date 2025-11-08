import MiniTile from "./mini-tile";
import { RiTailwindCssFill, RiRobot2Fill } from "react-icons/ri";
import { SiMongodb, SiNextdotjs, SiOllama } from "react-icons/si";
import { FaNodeJs, FaPython, FaAws, FaCog, FaDatabase } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

export default function TechStack() {
  return (
    <div id="tech-stack" className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--near-black)] tracking-tight whitespace-nowrap">
            Skills
          </h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-[var(--near-black)] via-[var(--near-black)]/50 to-transparent rounded-full"></div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* AWS */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--near-black)] mb-3 sm:mb-4">AWS Services</h3>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 select-none">
              <MiniTile title="AWS Bedrock" Icon={FaAws} />
              <MiniTile title="AWS EC2" Icon={FaAws} />
              <MiniTile title="AWS S3" Icon={FaAws} />
            </div>
          </div>

          {/* AI/LLM */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--near-black)] mb-3 sm:mb-4">AI & Automation</h3>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 select-none">
              <MiniTile title="Ollama" Icon={SiOllama} />
              <MiniTile title="Conversational AI" Icon={RiRobot2Fill} />
              <MiniTile title="Workflow Automation" Icon={FaCog} />
              <MiniTile title="Data Migration" Icon={FaDatabase} />
            </div>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--near-black)] mb-3 sm:mb-4">Development</h3>
            <div className="flex flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 select-none">
              <MiniTile title="Node.js" Icon={FaNodeJs} />
              <MiniTile title="Python" Icon={FaPython} />
              <MiniTile title="Next.js" Icon={SiNextdotjs} />
              <MiniTile title="Tailwind CSS" Icon={RiTailwindCssFill} />
              <MiniTile title="MongoDB" Icon={SiMongodb} />
              <MiniTile title="FHIR" Icon={HiDocumentText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
