import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects, profile } from "@/data/portfolio";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects" eyebrow={t("projects.eyebrow")} title={t("projects.title")}>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={(index % 2) * 0.08} className="h-full">
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex justify-center">
          <a
            href={profile.reposUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-foreground"
          >
            <Github className="size-4 text-primary" />
            {t("projects.viewAll")}
          </a>
        </div>
      </Reveal>
    </Section>
  );
};
