import BlurFade from "../ui/blur-fade";
import Tile from "./tile";

export default function Education() {
  return (
    <BlurFade delay={0.3}  inView>
      <div id="education" className="flex flex-col items-center justify-center p-5 pt-0 md:h-screen">
        <h1 className="mb-3 text-lg font-bold md:text-xl lg:text-2xl">
          Education
        </h1>
        <Tile
          title="St.mary's Engineering College"
          sub_title="B.Tech CSE-AI&ML"
          date="2020 - 2024"
        />
        <Tile
          title="Sri Chaitanya Jr. College"
          sub_title="MPC Intermediate"
          date="2018 - 2019"
        />
        <Tile
          title="Nava Jyothi High School"
          sub_title="SSC"
          date="2016 - 2018"
        />
      </div>
    </BlurFade>
  );
}
