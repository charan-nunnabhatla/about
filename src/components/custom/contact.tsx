import ContactTile from "./contact-tile";
import { BsCopy } from "react-icons/bs";
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
    <div id="contact" className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--near-black)] tracking-tight whitespace-nowrap">
            Get In Touch
          </h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-[var(--near-black)] via-[var(--near-black)]/50 to-transparent rounded-full"></div>
        </div>
        <p className="text-base sm:text-lg text-[var(--medium-text)] mb-8 md:mb-12">
          Let's connect and explore how we can work together on innovative projects.
        </p>

        <div className="space-y-6 sm:space-y-8">
          <div className="group bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-blue)]/5 rounded-2xl p-6 sm:p-8 border border-[var(--accent-blue)]/20 hover:border-[var(--accent-blue)]/40 transition-all duration-300 shadow-lg shadow-[var(--accent-blue)]/10 hover:shadow-xl hover:shadow-[var(--accent-blue)]/20">
            <ContactTile
              title="charannunnabhatla@gmail.com"
              Icons={[
                [SiGmail, "mail"],
                [BsCopy, "copy"],
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <a
              className="block bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-xl p-4 sm:p-5 border border-blue-200/40 hover:border-blue-400/60 hover:shadow-md hover:shadow-blue-200/30 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/charan-nunnabhatla/">
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-2xl text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" />
                <span className="text-sm sm:text-base font-medium text-[var(--near-black)]">LinkedIn</span>
              </div>
            </a>

            <div
              className="block bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 rounded-xl p-4 sm:p-5 border border-emerald-200/40 hover:border-emerald-400/60 hover:shadow-md hover:shadow-emerald-200/30 transition-all duration-300 group cursor-pointer"
              title="Download resume"
              onClick={() => downloadResume()}>
              <div className="flex items-center gap-3">
                <MdSimCardDownload className="text-2xl text-emerald-600 group-hover:text-emerald-700 group-hover:scale-110 transition-all duration-300" />
                <span className="text-sm sm:text-base font-medium text-[var(--near-black)]">Resume</span>
              </div>
            </div>

            <div className="block bg-gradient-to-br from-amber-50/50 to-amber-100/30 rounded-xl p-4 sm:p-5 border border-amber-200/40">
              <div className="flex items-center gap-3">
                <CiLocationOn className="text-2xl text-amber-600" />
                <span className="text-sm sm:text-base font-medium text-[var(--near-black)]">Hyderabad, IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
