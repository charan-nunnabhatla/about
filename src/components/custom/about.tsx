import BlurFade from "../ui/blur-fade";

export default function About() {
  return (
    <BlurFade delay={1} >
      <div className="h-auto flex flex-col p-5 pt-0">
        <section>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl">About</h1>
          <p className="text-xs md:text-sm lg:text-lg text-slate-200">
            The Minimalistic Developer Completed B. Tech in Computer Science and Engineering. An independent and self
            motivated hardworking individual dedicated towards goals.
          </p>
        </section>
      </div>
    </BlurFade>
  );
}
