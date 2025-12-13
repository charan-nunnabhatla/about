import BlurFade from "../ui/blur-fade";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiAmazonwebservices,
} from "react-icons/si";
import { Brain, Workflow, Database, Cloud } from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    description: "Building responsive, performant interfaces",
    icon: SiReact,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500/50 to-cyan-500/50",
    tech: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    description: "Scalable APIs and server architecture",
    icon: SiNodedotjs,
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-500/50 to-emerald-500/50",
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: Database },
    ],
  },
  {
    title: "AI & LLM",
    description: "Intelligent automation and NLP",
    icon: Brain,
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500/50 to-pink-500/50",
    tech: [
      { name: "AWS Bedrock" },
      { name: "Ollama" },
      { name: "LangChain" },
      { name: "NLP" },
    ],
  },
  {
    title: "Cloud",
    description: "AWS infrastructure at scale",
    icon: Cloud,
    gradient: "from-orange-500/20 to-amber-500/20",
    borderGradient: "from-orange-500/50 to-amber-500/50",
    tech: [
      { name: "EC2", icon: SiAmazonwebservices },
      { name: "S3" },
      { name: "Cognito" },
      { name: "DynamoDB" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="px-4 sm:px-6 md:px-12 lg:px-24 py-16 md:py-28">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              Tech Stack
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-hover)] to-transparent" />
          </div>
        </BlurFade>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techCategories.map((category, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1}>
              <div className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 h-full card-hover overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center border border-[var(--border)]`}>
                      <category.icon className="w-5 h-5 text-[var(--text-primary)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech items */}
                  <div className="flex flex-wrap gap-2">
                    {category.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
                      >
                        {tech.icon && <tech.icon className="w-3.5 h-3.5" />}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Additional skills row */}
        <BlurFade delay={0.6}>
          <div className="mt-6 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Workflow className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-sm font-medium text-[var(--text-primary)]">Also experienced with</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React Native", "Tauri", "FHIR", "HIPAA", "OAuth 2.0", "WebSockets", "Docker", "Git"].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-[var(--surface-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
