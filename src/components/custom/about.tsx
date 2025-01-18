import BlurFade from "../ui/blur-fade";

export default function About() {
  return (
    <BlurFade delay={1} >
      <div className="flex flex-col h-auto p-5 pt-0">
        <section>
          <h1 className="text-lg font-bold md:text-xl lg:text-2xl">About</h1>
          <p className="p-3 text-sm md:text-xl lg:text-lg text-slate-200">
            The Minimalistic Developer Completed B. Tech in Computer Science and Engineering. An independent and self
            motivated hardworking individual dedicated towards goals.
          </p>
        </section>
      </div>
    </BlurFade>
  );
}
