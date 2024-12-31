import BlurFade from "../ui/blur-fade";
import ContactTile from "./contact-tile";
import { BsCopy } from "react-icons/bs";
import MiniTile from "./mini-tile";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { MdSimCardDownload } from "react-icons/md";

export default function Contact() {
  const downloadResume = () => {
    const filePath = "/about/resume.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "Charan_Nunnabhatla_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BlurFade delay={0.3} inView>
      <div id="contact" className="flex flex-col items-center justify-center p-5 md:h-screen ">
        {/* <h1 className="text-lg font-bold md:text-xl lg:text-2xl ">Contact</h1> */}
        <h1 className="mb-3 text-5xl font-bold text-center text-transparent select-none bg-clip-text bg-gradient-to-tr from-pink-300 to-blue-400 md:text-6xl lg:text-7xl ">
          Get In Touch
        </h1>
        <div className="flex justify-center flex-col max-w-[95%] md:max-w-[90%] lg:max-w-[80%] mx-auto md:flex-row items-center w-full shadow-md shadow-blue-300 h-fit rounded-xl ">
          <div className="flex flex-col justify-center w-full p-2 m-3 h-fit">
            <ContactTile
              title="Charan.reings125@gmail.com"
              Icons={[
                [SiGmail, "mail"],
                [BsCopy, "copy"],
              ]}
            />
            <ContactTile title="+91 7093062349" Icons={[[BsCopy, "copy"]]} />
            <div className="flex gap-4 mx-auto mt-2 font-bold">
              <MiniTile title="Hyderabad, TG, IN" Icon={CiLocationOn} />
              <a
                target="_black"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/charan-nunnabhatla/">
                <MiniTile title="LinkedIn" Icon={FaLinkedin} />
              </a>
              <div
                className="hover:cursor-pointer"
                title="Download resume"
                onClick={() => downloadResume()}>
                <MiniTile title="Resume" Icon={MdSimCardDownload} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
}
