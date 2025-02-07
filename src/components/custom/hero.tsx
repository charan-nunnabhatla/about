import Lottie from "react-lottie-player";
import BlurFade from "../ui/blur-fade";
import hiAnimation from "../../../src/assets/hi-animation.json";

export default function Hero() {
  return (
    <section>
      <BlurFade delay={0.8}>
        <div
          id="hero"
          className="grid grid-cols-[1fr,1fr] justify-center items-center w-full h-fit mx-3">
          <div className="flex flex-col items-center col-start-1 col-end-2 mx-1 w-fit h-fit ">
            <div
              id="name"
              aria-label="name charan"
              className="text-[clamp(2rem,10vw,3rem)] whitespace-nowrap font-bold text-white">
              Hi, I'm Charan
            </div>
            <div
              id="intro"
              aria-labelledby="intro"
              className=" text-xs font-sans text-zinc-500 font-bold whitespace-normal md:text-sm max-w-[30em]">
              Full Stack Developer | Flutter & React Specialist
            </div>
          </div>
          <Lottie
            animationData={hiAnimation}
            play
            loop
            className="col-start-2 col-end-3 md:size-[80%] size-full  self-center mx-auto "
          />
        </div>
      </BlurFade>
    </section>
  );
}
