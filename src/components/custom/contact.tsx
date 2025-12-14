import BlurFade from "../ui/blur-fade";
import { Mail, Copy, Linkedin, FileText, MapPin, Check } from "lucide-react";
import { useState } from "react";
import { downloadResume } from "../../utils/downloadResume";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "charannunnabhatla@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <section id="contact" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-28">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Let's Talk
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-hover)] to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="text-lg text-[var(--text-secondary)] mb-4 max-w-2xl">
            Open to full-time roles in tech and AI.
          </p>
          <p className="text-[var(--text-muted)] mb-10">
            If you're building something that helps people, I'd love to hear about it.
          </p>
        </BlurFade>

        {/* Email Card */}
        <BlurFade delay={0.3}>
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 md:p-8 mb-6 card-hover">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] mb-1">Email</p>
                  <p className="text-lg font-medium text-[var(--text-primary)] font-mono">
                    {email}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Action Cards */}
        <BlurFade delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/charan-nunnabhatla/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">LinkedIn</p>
                <p className="text-xs text-[var(--text-muted)]">Connect</p>
              </div>
            </a>

            {/* CV */}
            <button
              onClick={downloadResume}
              className="group flex items-center gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all card-hover text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <FileText className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">CV</p>
                <p className="text-xs text-[var(--text-muted)]">Download PDF</p>
              </div>
            </button>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--text-primary)]">Hyderabad, IN</p>
                <p className="text-xs text-[var(--text-muted)]">On-site preferred</p>
              </div>
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
