import BlurFade from "../ui/blur-fade";
import { cvData } from "../../data/cv";

const stats = cvData.stats;

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-28">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              About
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-hover)] to-transparent" />
          </div>
        </BlurFade>

        <div className="space-y-6 mb-12">
          <BlurFade delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-loose">
              I'm the engineer behind AI systems at{" "}
              <span className="text-[var(--text-primary)] font-medium">VectorSoft</span> that
              help clinicians spend less time on paperwork and more time with patients.
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-loose">
              My work spans conversational AI, workflow automation, and enterprise healthcare
              platforms—always with a focus on building things that actually{" "}
              <span className="text-[var(--text-primary)] font-medium">ship and scale</span>.
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-loose">
              From natural language patient intake to automated clinical transcription,
              I turn complex healthcare challenges into elegant, compliant solutions.
            </p>
          </BlurFade>
        </div>

        {/* Stats Grid */}
        <BlurFade delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 text-center card-hover"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-[var(--text-primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
