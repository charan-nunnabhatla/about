import BlurFade from "../ui/blur-fade";

export default function About() {
  return (
    <BlurFade delay={0.3} inView>
      <div id="about" className="flex flex-col p-5 pt-0 md:items-center md:justify-center md:h-screen">
          <h1 className="p-3 text-lg font-bold md:text-xl lg:text-2xl">About</h1>
          <p className="text-xs md:text-sm lg:text-lg text-[--text-color]">
            The Minimalistic Developer Completed B. Tech in Computer Science and Engineering. An independent and self
            motivated hardworking individual dedicated towards goals.
          </p>
      </div>
    </BlurFade>
  );
}
