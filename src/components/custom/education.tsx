import BlurFade from "../ui/blur-fade";
import { GraduationCap } from "lucide-react";
import { cvData } from "../../data/cv";

const education = cvData.education.map((edu) => ({
  school: edu.institution,
  degree: edu.degree,
  focus: edu.specialization,
  date: edu.startYear ? `${edu.startYear} - ${edu.endYear}` : edu.endYear,
}));

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              Education
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-hover)] to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--surface-hover)] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-[var(--text-muted)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-medium text-[var(--text-primary)]">
                      {edu.school}
                    </h3>
                    <span className="text-sm text-[var(--text-muted)] font-mono">
                      {edu.date}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {edu.degree}
                    {edu.focus && (
                      <span className="text-[var(--accent)]"> · {edu.focus}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
