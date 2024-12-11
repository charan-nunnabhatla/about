import BlurFade from "../ui/blur-fade";
import Tile from "./tile";

export default function Projects() {
  return (
    <BlurFade delay={1} >
      <div className="h-auto flex flex-col mx-auto  p-5">
        <h1 className=" font-bold text-lg md:text-xl lg:text-2xl">
          My Projects
        </h1>
        <div className="flex flex-col justify-center items-center my-3">
          <Tile
            title="Dotted"
            sub_title="Calculates The Total Life Spend In Dots"
            date="Jan 2024"
            link="https://charan-nunnabhatla.github.io/dotted-life/"
          />
          <Tile
            title="Grocery"
            sub_title="The E-Commerce Web App"
            date="Mar 2024"
            link="https://charan-nunnabhatla.github.io/e-commerce/"
          />
        </div>
      </div>
    </BlurFade>
  );
}
