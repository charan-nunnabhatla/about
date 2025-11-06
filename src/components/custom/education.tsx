import Tile from "./tile";

export default function Education() {
  return (
    <div id="education" className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--near-black)] mb-8 md:mb-12 tracking-tight">
          Education
        </h2>
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <Tile
            title="St. Mary's Engineering College"
            sub_title="B.Tech Computer Science & Engineering - AI & ML"
            date="2020 - 2024"
          />
          <Tile
            title="Sri Chaitanya Jr. College"
            sub_title="Intermediate - MPC"
            date="2018 - 2020"
          />
          <Tile
            title="Nava Jyothi High School"
            sub_title="Secondary School Certificate"
            date="2016 - 2018"
          />
        </div>
      </div>
    </div>
  );
}
