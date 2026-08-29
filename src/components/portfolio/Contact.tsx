import { useTranslation } from "react-i18next";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact" eyebrow={t("contact.eyebrow")} title={t("contact.title")}>
      <Reveal delay={0.1}>
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-card/60 p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[480px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          <p className="relative mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("contact.subtitle")}
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="glow-primary gap-2">
              <a href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                {t("contact.emailCta")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github className="size-4" />
                {t("contact.githubCta")}
              </a>
            </Button>
          </div>
          <p className="relative mt-6 font-mono text-xs text-muted-foreground">
            $ echo {profile.email}
          </p>
        </div>
      </Reveal>
    </Section>
  );
};
