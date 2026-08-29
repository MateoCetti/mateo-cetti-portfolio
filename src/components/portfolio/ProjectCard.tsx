import { useTranslation } from "react-i18next";
import { ArrowUpRight, ExternalLink, Github, GitFork, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio";
import { profile } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.35)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[hsl(0_72%_55%)]" />
        <span className="size-2.5 rounded-full bg-[hsl(45_90%_55%)]" />
        <span className="size-2.5 rounded-full bg-[hsl(160_84%_55%)]" />
        <span className="ml-2 truncate font-mono text-xs text-muted-foreground">
          {profile.handle}/{project.name}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-foreground">{project.name}</h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">
            {"0" + (index + 1)}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {t(project.descKey)}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border border-border/60 bg-background/50 font-mono text-[11px] font-normal text-muted-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
          <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
            {project.stars !== undefined && (
              <span className="inline-flex items-center gap-1">
                <Star className="size-3.5 text-primary" />
                {project.stars}
              </span>
            )}
            {project.forks !== undefined && (
              <span className="inline-flex items-center gap-1">
                <GitFork className="size-3.5 text-primary" />
                {project.forks}
              </span>
            )}
            {project.language && (
              <span className="hidden items-center gap-1.5 sm:inline-flex">
                <span className="size-2 rounded-full bg-primary" />
                {project.language}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5",
                  "font-mono text-xs text-primary transition-colors hover:bg-primary/10"
                )}
              >
                <ExternalLink className="size-3.5" />
                {t("projects.liveDemo")}
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Github className="size-3.5" />
              {t("projects.viewCode")}
              <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
