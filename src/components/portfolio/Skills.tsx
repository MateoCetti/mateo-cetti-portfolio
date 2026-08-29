import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skillGroups } from "@/data/portfolio";

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <Section id="skills" eyebrow={t("skills.eyebrow")} title={t("skills.title")}>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.key} delay={index * 0.08}>
            <div className="group h-full rounded-xl border border-border bg-card/60 p-6 transition-colors duration-300 hover:border-primary/40">
              <p className="font-mono text-sm text-primary">
                {group.key === "languages" ? "0x01" : group.key === "frameworks" ? "0x02" : "0x03"}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {t(group.titleKey)}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="border border-border/60 bg-background/50 font-mono text-xs font-normal text-muted-foreground transition-colors duration-200 group-hover:border-primary/30 group-hover:text-foreground"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
