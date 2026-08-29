import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const termLines = [
  { cmd: "hero.termWhoami", out: "hero.termWhoamiOut" },
  { cmd: "hero.termPwd", out: "hero.termPwdOut" },
  { cmd: "hero.termStatus", out: "hero.termStatusOut" },
];

export const Hero = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 20 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-8">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[420px] rounded-full bg-[hsl(190_90%_55%)]/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="font-mono text-sm text-primary sm:text-base">
              {t("hero.eyebrow")}
            </p>

            <motion.h1
              {...fadeUp(0.15)}
              className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="text-foreground">Mateo</span>{" "}
              <span className="text-gradient">Cetti</span>
            </motion.h1>

            <motion.div
              {...fadeUp(0.25)}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5"
            >
              <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
              <span className="font-mono text-sm text-foreground">{t("hero.role")}</span>
            </motion.div>

            <motion.p
              {...fadeUp(0.35)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t("hero.intro")}
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="glow-primary gap-2">
                <a href="#projects">
                  {t("hero.ctaProjects")}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  {t("hero.ctaGithub")}
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Terminal card */}
          <motion.div
            {...fadeUp(0.4)}
            className="animate-float"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
                <span className="size-3 rounded-full bg-[hsl(0_72%_55%)]" />
                <span className="size-3 rounded-full bg-[hsl(45_90%_55%)]" />
                <span className="size-3 rounded-full bg-[hsl(160_84%_55%)]" />
                <span className="ml-3 truncate font-mono text-xs text-muted-foreground">
                  mateo@cetti: ~/portfolio
                </span>
              </div>
              <div className="space-y-4 p-5 font-mono text-sm sm:p-6">
                {termLines.map((line) => (
                  <div key={line.cmd}>
                    <p className="text-muted-foreground">
                      <span className="text-primary">➜</span> ~{" "}
                      <span className="text-foreground">{t(line.cmd)}</span>
                    </p>
                    <p className="mt-1.5 text-foreground">
                      {t(line.out)}
                      {line.cmd === "hero.termStatus" && (
                        <span className="ml-0.5 inline-block h-3.5 w-[7px] animate-blink bg-primary align-middle" />
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
