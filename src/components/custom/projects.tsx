import Tile from "./tile";

export default function Projects() {
  return (
    <div id="projects" className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--near-black)] tracking-tight whitespace-nowrap">
            Projects
          </h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-[var(--near-black)] via-[var(--near-black)]/50 to-transparent rounded-full"></div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <Tile
            title="Grocery Webapp"
            sub_title="Full-stack e-commerce platform with React frontend, Node.js/Express backend, and MongoDB. Features product browsing, cart management, and secure checkout."
            date="Mar 2024"
            link="https://charan-nunnabhatla.github.io/e-commerce/"
          />
          <Tile
            title="Dotted Life"
            sub_title="Interactive life visualization tool built with React and TypeScript. Represents time as dots, helping users visualize their life journey."
            date="Jan 2024"
            link="https://charan-nunnabhatla.github.io/dotted-life/"
          />
          <Tile
            title="Portfolio Website"
            sub_title="Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Features responsive design and smooth navigation."
            date="2024"
            link="https://charan-nunnabhatla.github.io/about/"
          />
        </div>
      </div>
    </div>
  );
}
