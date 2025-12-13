import BlurFade from "../ui/blur-fade";
import { ExternalLink, ShoppingCart, Grid3X3, Stethoscope, Lock } from "lucide-react";

const projects = [
  {
    title: "CurerTech",
    description: "Clinic EMR platform with AI counseling, patient dosing, and integrated payments. Serving 500+ users across 15+ clinics.",
    icon: Stethoscope,
    date: "2025",
    link: null,
    tech: ["React", "Next.js", "AWS", "MongoDB", "AI"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    proprietary: true,
    company: "VectorSoft LLC",
  },
  {
    title: "Grocery Webapp",
    description: "Full-stack e-commerce with cart persistence, inventory sync, and checkout flows. My deep-dive into production patterns.",
    icon: ShoppingCart,
    date: "Mar 2024",
    link: "https://charan-nunnabhatla.github.io/e-commerce/",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Dotted Life",
    description: "What if you could see your entire life on one screen? Interactive visualization that turns your lifespan into dots.",
    icon: Grid3X3,
    date: "Jan 2024",
    link: "https://charan-nunnabhatla.github.io/dotted-life/",
    tech: ["React", "TypeScript", "Canvas API"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-28">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-hover)] to-transparent" />
          </div>
        </BlurFade>

        <div className="grid gap-4">
          {projects.map((project, index) => {
            const CardWrapper = project.link
              ? ({ children }: { children: React.ReactNode }) => (
                  <a
                    href={project.link!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="group block">{children}</div>
                );

            return (
              <BlurFade key={index} delay={0.2 + index * 0.1}>
                <CardWrapper>
                  <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 sm:p-6 md:p-8 card-hover overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-[var(--border)]`}>
                            <project.icon className="w-5 h-5 text-[var(--text-primary)]" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-xs text-[var(--text-muted)] font-mono">
                              {project.company ? `${project.company} · ` : ""}{project.date}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {project.link ? (
                            <span className="p-2 rounded-lg bg-[var(--surface-hover)] text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </span>
                          ) : (
                            <span className="px-3 py-1.5 rounded-lg bg-[var(--surface-hover)] text-[var(--text-muted)] text-xs flex items-center gap-1.5">
                              <Lock className="w-3 h-3" />
                              Proprietary
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-loose mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--text-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </BlurFade>
            );
          })}
        </div>

        {/* More projects hint */}
        <BlurFade delay={0.5}>
          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            More projects on{" "}
            <a
              href="https://github.com/charan-nunnabhatla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              GitHub
            </a>
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
