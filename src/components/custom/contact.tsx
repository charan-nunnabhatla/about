import BlurFade from "../ui/blur-fade";
import ContactTile from "./contact-tile";
import { BsCopy } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import MiniTile from "./mini-tile";
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <BlurFade delay={1}>
      <div className="h-auto p-5 ">
        {/* <h1 className="font-bold text-lg md:text-xl lg:text-2xl ">Contact</h1> */}
        <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-pink-300 to-blue-400 text-center text-5xl md:text-6xl lg:text-7xl font-bold mb-3 select-none  ">
          Get In Touch
        </h1>
        <div className="flex justify-center flex-col md:flex-row  items-center w-full shadow-md shadow-blue-300 h-fit rounded-xl ">
          <div className="flex justify-center flex-col  w-full h-fit m-3 p-2">
            <ContactTile
              title="Charan.reings125@gmail.com"
              Icons={[
                [IoMailOutline, "mail"],
                [BsCopy, "copy"],
              ]}
            />
            <ContactTile title="+91 7093062349" Icons={[[BsCopy, "copy"]]} />
            <div className="mx-auto mt-2">
              <MiniTile title="Hyderabad, TG, IN" Icon={CiLocationOn} />
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
