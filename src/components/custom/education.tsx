import BlurFade from "../ui/blur-fade";
import Tile from "./tile";

export default function Education() {
  return (
    <section>
      <BlurFade delay={1}>
        <div className="p-5 pt-0">
          <h1 className="mb-3 text-lg font-bold md:text-xl lg:text-2xl">
            Education
          </h1>
          <Tile
            title="B.Tech CSE-AI&ML"
            sub_title="St.Mary's Engineering College"
            date="2020 - 2024"
          />
         <Tile
          title="Intermediate - MPC"
          sub_title="Sri Chaitanya Jr. College"
          date="2018 - 2020"
        />
        {/* <Tile
          title="SSC"
          sub_title="Nava Jyothi High School"
          date="2018"
        />  */}
        </div>
      </BlurFade>
    </section>
  );
}
