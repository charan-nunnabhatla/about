import BlurFade from "../ui/blur-fade";
import Tile from "./tile";

export default function Projects() {
  return (
    <BlurFade delay={1} >
      <div className="flex flex-col h-auto p-5 mx-auto">
        <h1 className="text-lg font-bold md:text-xl lg:text-2xl">
          My Projects
        </h1>
        <div className="flex flex-col items-center justify-center my-3">
          <Tile
            title="Dotted Life"
            sub_title="Calculates The Total Life Spend In Dots"
            date="Jan 2024"
            link="https://charan-nunnabhatla.github.io/dotted-life/"
          />
          <Tile
            title="Grocery Webapp"
            sub_title="The E-Commerce Web App"
            date="Mar 2024"
            link="https://charan-nunnabhatla.github.io/e-commerce/"
          />
        </div>
      </div>
    </BlurFade>
  );
}
