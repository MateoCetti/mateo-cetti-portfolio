import { useTranslation } from "react-i18next";
import { MapPin, GraduationCap, Activity } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";

const facts = [
  { icon: MapPin, titleKey: "about.factLocationTitle", valueKey: "about.factLocationValue" },
  { icon: GraduationCap, titleKey: "about.factEducationTitle", valueKey: "about.factEducationValue" },
  { icon: Activity, titleKey: "about.factActivityTitle", valueKey: "about.factActivityValue" },
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" eyebrow={t("about.eyebrow")} title={t("about.title")}>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
        <Reveal delay={0.05} className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            <span className="font-mono text-sm text-primary">{"{"}</span> {t("about.p1")}{" "}
            <span className="font-mono text-sm text-primary">{"}"}</span>
          </p>
          <p>{t("about.p2")}</p>
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span> whoami --passionate --curious
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-3 rounded-xl border border-border bg-card/60 p-5">
            {facts.map((fact) => (
              <div
                key={fact.titleKey}
                className="flex items-center gap-4 rounded-lg border border-border/70 bg-background/50 px-4 py-3.5"
              >
                <fact.icon className="size-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t(fact.titleKey)}
                  </p>
                  <p className="truncate font-medium text-foreground">{t(fact.valueKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
