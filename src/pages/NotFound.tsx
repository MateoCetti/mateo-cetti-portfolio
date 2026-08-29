import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <Terminal className="mx-auto size-10 text-primary" />
        <h1 className="mt-6 font-mono text-6xl font-bold text-foreground">
          <span className="text-primary">$</span> 404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("notFound.title")}</p>
        <Button asChild className="mt-8">
          <a href={import.meta.env.BASE_URL}>{t("notFound.actions.backHome")}</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
