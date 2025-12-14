// Single source of truth for CV/Resume data
// Changes here reflect in both website and PDF

export const cvData = {
  personal: {
    fullName: "Nunnabhatla Kali Charan",
    displayName: "Charan Nunnabhatla",
    title: "Full-Stack Developer & AI Engineer",
    email: "charannunnabhatla@gmail.com",
    location: "Hyderabad, India",
    linkedin: "linkedin.com/in/charan-nunnabhatla",
    linkedinUrl: "https://www.linkedin.com/in/charan-nunnabhatla/",
    github: "github.com/charan-nunnabhatla",
    githubUrl: "https://github.com/charan-nunnabhatla",
    website: "charan-nunnabhatla.github.io/about",
    websiteUrl: "https://charan-nunnabhatla.github.io/about",
    status: "Open to opportunities",
    currentCompany: "VectorSoft",
  },

  profile: `Software Developer who ships. Built systems serving 500+ healthcare users, automated 50,000+ patient record migrations, and cut API overhead by 60%. I turn complex requirements into production code that scales—from conversational AI to HIPAA-compliant platforms.`,

  experience: [
    {
      company: "VectorSoft",
      role: "Software Developer",
      startDate: "Feb 2025",
      endDate: "Present",
      highlights: [
        {
          text: "Cut clinic onboarding time by 90% through automated migration of 50,000+ patient records from legacy EHR systems",
          metrics: ["90%", "50,000+"],
        },
        {
          text: "Built authentication system handling 500+ concurrent healthcare users with zero security incidents across multi-tenant platform",
          metrics: ["500+", "zero security incidents"],
        },
        {
          text: "Reduced API overhead by 60% via intelligent caching architecture, improving response times for daily clinical workflows",
          metrics: ["60%"],
        },
        {
          text: "Integrated custom CMS for CurerTech app enabling non-technical staff to manage content without developer intervention",
          metrics: [],
        },
        {
          text: "Implemented robust error tracking using rrweb for session replay, enabling rapid bug diagnosis and reducing debugging time",
          metrics: [],
        },
        {
          text: "Shipped 5+ production applications (web, mobile, desktop) including telehealth and e-prescribing integrations",
          metrics: ["5+"],
        },
        {
          text: "Designed 17-module API architecture achieving HIPAA compliance across 15+ partner clinics",
          metrics: ["17-module", "15+"],
        },
      ],
    },
  ],

  skills: {
    frontend: {
      label: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Tauri"],
      color: "primary" as const,
    },
    backend: {
      label: "Backend",
      items: ["Node.js", "Python", "MongoDB", "PostgreSQL", "REST APIs", "WebSockets"],
      color: "green" as const,
    },
    aiCloud: {
      label: "AI & Cloud",
      items: ["AWS Bedrock", "Ollama", "LangChain", "EC2", "S3", "Cognito", "DynamoDB"],
      color: "purple" as const,
    },
    tools: {
      label: "Tools",
      items: ["Git", "Docker", "Claude Code", "Cursor", "rrweb", "FHIR", "HIPAA", "OAuth 2.0"],
      color: "default" as const,
    },
  },

  projects: [
    {
      name: "CurerTech",
      company: "VectorSoft LLC",
      description:
        "Clinic EMR platform with AI counseling, patient dosing, and integrated payments. Serving 500+ users across 15+ clinics with HIPAA-compliant infrastructure.",
      tech: ["React", "Next.js", "AWS", "MongoDB", "Conversational AI"],
      liveUrl: null,
    },
    {
      name: "PrimeCart",
      company: null,
      description:
        "Full-stack inventory management system with role-based access, real-time stock tracking, multi-currency support, and audit logging.",
      tech: ["Next.js", "TypeScript", "MongoDB", "NextAuth"],
      liveUrl: "https://primecarts.vercel.app/",
    },
    {
      name: "Dotted Life",
      company: null,
      description:
        "Interactive visualization that transforms your entire lifespan into an intuitive dot-based display. See your life on one screen.",
      tech: ["React", "TypeScript", "Canvas API"],
      liveUrl: "https://charan-nunnabhatla.github.io/dotted-life/",
    },
  ],

  education: [
    {
      institution: "St. Mary's Engineering College",
      degree: "B.Tech Computer Science & Engineering",
      specialization: "AI & ML",
      startYear: "2020",
      endYear: "2024",
    },
    {
      institution: "Sri Chaitanya Jr. College",
      degree: "Intermediate",
      specialization: "MPC",
      startYear: "2018",
      endYear: "2020",
    },
    {
      institution: "Nava Jyothi High School",
      degree: "SSC",
      specialization: "",
      startYear: "",
      endYear: "2018",
    },
  ],

  // Stats for the About section
  stats: [
    { value: "500+", label: "Concurrent Users" },
    { value: "50,000+", label: "Patient Records" },
    { value: "90%", label: "Automation Achieved" },
    { value: "60%", label: "API Call Reduction" },
  ],
};

export type CVData = typeof cvData;
