import BlurFade from "../ui/blur-fade";
import Tile from "./tile";

export default function Education() {
  return (
    <BlurFade delay={1} >
      <div className="p-5 pt-0">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-3">
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
