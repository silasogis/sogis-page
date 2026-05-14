"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onLanguageChange(newLocale: "pt" | "en") {
    router.replace(
      // @ts-expect-error -- pathname might be a string but router.replace expects it in a specific format in some versions
      { pathname, params },
      { locale: newLocale }
    );
  }

  return (
    <div className="flex items-center gap-1 bg-bg-alt p-1 rounded-full border border-border">
      <button
        onClick={() => onLanguageChange("pt")}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
          locale === "pt"
            ? "bg-white text-navy shadow-sm"
            : "text-text-muted hover:text-navy"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => onLanguageChange("en")}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
          locale === "en"
            ? "bg-white text-navy shadow-sm"
            : "text-text-muted hover:text-navy"
        }`}
      >
        EN
      </button>
    </div>
  );
}
