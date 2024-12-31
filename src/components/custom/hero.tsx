import BlurFade from "../ui/blur-fade";

export default function Hero() {
  return (
    <BlurFade delay={0.8} inView>
      <div
        id="hero"
        className="flex items-center justify-center backdrop-blur-sm md:h-screen ">
        <div
          id="name"
          className="text-[1.5em] md:text-[3em] lg:text[3em] whitespace-nowrap m-4 font-bold bg-transparent text-[rgb(82,122,104)]">
          Hi, I'm Charan 👋
          <div
            id="intro"
            className="text-xs font-sans text-slate-300 font-bold whitespace-normal md:text-lg max-w-[30em]">
            Full Stack Developer
          </div>
        </div>
        <img
          className="size-[7em] mx-5 rounded-[50%] opacity-100"
          src="/about/IMG_1614.png"
          alt="profile picture"
        />
      </div>
    </BlurFade>
  );
}
