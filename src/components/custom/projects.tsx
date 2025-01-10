import BlurFade from "../ui/blur-fade";
import Tile from "./tile";

export default function Projects() {
  return (
    <BlurFade delay={1}>
      <div className="flex flex-col h-auto p-5 mx-auto">
        <h1 className="text-lg font-bold md:text-xl lg:text-2xl">
          My Projects
        </h1>
        <div className="flex flex-col items-center justify-center my-3">
          <Tile
            title="Dotted Life"
            sub_title="Calculates The Total Life Spend In Dots"
            date="June 2024"
            link="https://charan-nunnabhatla.github.io/dotted-life/"
          />
          <Tile
            title="Grocery"
            sub_title="The E-Commerce Website"
            date="Aug 2024"
            link="https://charan-nunnabhatla.github.io/e-commerce/"
          />
          <Tile
            title="Portfolio"
            sub_title="Personal About Page (this page)"
            date="Jan 2025"
            link="https://charan-nunnabhatla.github.io/about/"
          />
          <Tile
            title="SMEC Student Services (Major Project)"
            sub_title="Digitalizing The College Works"
            date="2024"
            link="https://github.com/charan-nunnabhatla/SMEC-Student-Services"
          />
        </div>
      </div>
    </BlurFade>
  );
}
