import { useTranslation } from "react-i18next";
import { Github, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { achievements, profile } from "@/data/portfolio";

export const GithubStats = () => {
  const { t } = useTranslation();

  const stats = [
    { value: profile.contributions, labelKey: "github.contributions" },
    { value: String(profile.publicRepos), labelKey: "github.repos" },
    { value: String(profile.followers), labelKey: "github.followers" },
  ];

  return (
    <Section id="github" eyebrow={t("github.eyebrow")} title={t("github.title")}>
      <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="grid h-full gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.labelKey}
                className="flex flex-col items-center justify-center gap-1 rounded-xl border border-border bg-card/60 p-6 text-center transition-colors duration-300 hover:border-primary/40"
              >
                <span className="font-display text-4xl font-bold text-gradient">{stat.value}</span>
                <span className="font-mono text-xs text-muted-foreground">{t(stat.labelKey)}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-between gap-5 rounded-xl border border-border bg-card/60 p-6">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-sm text-primary">
                <Trophy className="size-4" />
                achievements
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {achievements.map((a) => (
                  <span
                    key={a.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {a.label}
                    {a.count && <span className="text-primary">{a.count}</span>}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("github.intro")}</p>
            <Button asChild variant="outline" className="w-full gap-2">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github className="size-4" />
                {t("github.cta")}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
