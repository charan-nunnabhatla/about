import BlurFade from "../ui/blur-fade";
import { Briefcase } from "lucide-react";
import { cvData } from "../../data/cv";

// Transform CV data to component format
const experiences = cvData.experience.map((exp) => ({
  title: exp.role,
  company: exp.company,
  date: `${exp.startDate} - ${exp.endDate}`,
  current: exp.endDate === "Present",
  bullets: exp.highlights.map((h) => h.text),
  tech: Object.values(cvData.skills)
    .flatMap((s) => s.items)
    .slice(0, 7), // Show first 7 skills as tech
}));

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-28">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Experience
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-hover)] to-transparent" />
          </div>
        </BlurFade>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1}>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 sm:p-6 md:p-8 card-hover">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                        {exp.title}
                      </h3>
                      <p className="text-[var(--text-secondary)]">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.current && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Current
                      </span>
                    )}
                    <span className="text-sm text-[var(--text-muted)] font-mono">
                      {exp.date}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-4 mb-6">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                      <span className="leading-loose">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--surface-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
