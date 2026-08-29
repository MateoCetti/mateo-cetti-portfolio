export const profile = {
  name: "Mateo Cetti",
  handle: "MateoCetti",
  roleKey: "hero.role",
  githubUrl: "https://github.com/MateoCetti",
  reposUrl: "https://github.com/MateoCetti?tab=repositories",
  email: "mateocetti2000@gmail.com",
  location: "Córdoba, Argentina",
  contributions: "1,318",
  publicRepos: 15,
  followers: 21,
};

export const skillGroups: { key: "languages" | "frameworks" | "tools"; titleKey: string; items: string[] }[] = [
  {
    key: "languages",
    titleKey: "skills.languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "Dart", "HTML & CSS", "LaTeX"],
  },
  {
    key: "frameworks",
    titleKey: "skills.frameworks",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express",
      "Socket.IO",
      "Tailwind CSS",
      "Flutter",
      "Spring Boot",
      "MongoDB",
      "Jest",
    ],
  },
  {
    key: "tools",
    titleKey: "skills.tools",
    items: ["Git & GitHub", "Supabase", "GitHub Actions", "Vercel", "npm / pnpm", "Google Maps API"],
  },
];

export type Project = {
  name: string;
  descKey: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  stars?: number;
  forks?: number;
  language?: string;
};

export const projects: Project[] = [
  {
    name: "Vargas",
    descKey: "projects.vargas.desc",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/MateoCetti/vargas",
    demoUrl: "https://vargas-nu.vercel.app",
    language: "TypeScript",
  },
  {
    name: "ws-chat",
    descKey: "projects.wsChat.desc",
    tech: ["Next.js", "TypeScript", "Socket.IO"],
    repoUrl: "https://github.com/MateoCetti/ws-chat",
    language: "TypeScript",
  },
  {
    name: "Bugster Challenge",
    descKey: "projects.bugster.desc",
    tech: ["Next.js", "TypeScript", "Supabase"],
    repoUrl: "https://github.com/MateoCetti/bugster-challenge",
    demoUrl: "https://bugster-challenge.vercel.app",
    language: "TypeScript",
  },
  {
    name: "Xionico",
    descKey: "projects.xionico.desc",
    tech: ["Angular", "TypeScript", "Python", "Google Maps"],
    repoUrl: "https://github.com/MateoCetti/xionico-front",
    language: "TypeScript",
  },
  {
    name: "Ing. Software III — TIF",
    descKey: "projects.tif.desc",
    tech: ["React", "Express", "MongoDB", "Jest", "GitHub Actions"],
    repoUrl: "https://github.com/MateoCetti/ing-soft-3-tif-front",
    language: "JavaScript",
  },
  {
    name: "ucc_notas",
    descKey: "projects.uccNotas.desc",
    tech: ["LaTeX", "Markdown"],
    repoUrl: "https://github.com/MateoCetti/ucc_notas",
    stars: 8,
    forks: 1,
    language: "TeX",
  },
];

export const achievements = [
  { label: "Pull Shark", count: "×3" },
  { label: "Pair Extraordinaire", count: "×2" },
  { label: "Arctic Code Vault Contributor", count: "" },
];

export const navLinks = [
  { id: "about", labelKey: "nav.about" },
  { id: "skills", labelKey: "nav.skills" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "github", labelKey: "nav.github" },
  { id: "contact", labelKey: "nav.contact" },
];
