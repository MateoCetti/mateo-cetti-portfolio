import { useTranslation } from "react-i18next";
import { Download, Github } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          {t("footer.rights", { year })}
        </p>
        <div className="flex items-center gap-5">
          <p className="hidden font-mono text-xs text-muted-foreground sm:block">
            {t("footer.built")}
          </p>
          <a
            href={`${import.meta.env.BASE_URL}mateo-cetti-portfolio.zip`}
            download
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <Download className="size-4" />
            {t("footer.downloadSource")}
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
