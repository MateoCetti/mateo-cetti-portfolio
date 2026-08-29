import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, Terminal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { navLinks, profile } from "@/data/portfolio";

export const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-border/60 bg-background/85 backdrop-blur-md"
          : "border-border/40 bg-background/70 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          onClick={close}
          className="group flex items-center gap-2 font-mono text-sm text-foreground"
        >
          <Terminal className="size-4 text-primary transition-transform group-hover:scale-110" />
          <span>
            {profile.name.toLowerCase().replace(" ", "@")}
            <span className="text-muted-foreground">:~$</span>
            <span className="ml-0.5 inline-block h-4 w-[7px] animate-blink bg-primary align-middle" />
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <span className="mr-1 text-primary">./</span>
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-5 pb-5 pt-2 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={close}
                className="rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <span className="mr-1 text-primary">./</span>
                {t(link.labelKey)}
              </a>
            ))}
          </nav>
          <div className="mt-3 px-3">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};
