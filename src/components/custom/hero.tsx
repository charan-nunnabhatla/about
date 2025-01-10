import BlurFade from "../ui/blur-fade";

export default function Hero() {
  return (
    <BlurFade delay={0.8}>
      <div
        id="hero"
        className="flex items-center justify-center my-5 overflow-hidden">
        <div
          id="name"
          className="text-[1.5em] md:text-[3em] lg:text[3em] whitespace-nowrap m-4 font-bold bg-transparent text-slate-400">
          Hi, I'm Charan 👋
          <div
            id="intro"
            className="text-xs font-sans text-slate-300 font-bold whitespace-normal md:text-lg max-w-[30em]">
              Full Stack Developer | Flutter & React Specialist 
          </div>
        </div>
        <img
          className="size-[7em] mx-5 rounded-[50%]"
          src="/about/IMG_1614.png"
          alt="profile picture"
        />
      </div>
    </BlurFade>
  );
}
