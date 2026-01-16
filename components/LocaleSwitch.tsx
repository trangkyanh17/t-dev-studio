"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitch() {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const locale = useLocale();

  const [activeLocale, setActiveLocale] = useState<"vi" | "en">("vi");

  const cookieLocale = useMemo(() => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(/(?:^|; )locale=([^;]+)/);
    const value = match?.[1];
    return value === "en" || value === "vi" ? value : null;
  }, []);

  useEffect(() => {
    // Prefer cookie locale (your switcher sets it), fallback to next-intl locale
    const next = cookieLocale ?? (locale === "en" ? "en" : "vi");
    setActiveLocale(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  function switchLocale(locale: "vi" | "en") {
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;
    setActiveLocale(locale);
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      {(["vi", "en"] as const).map((lang) => {
        const active = activeLocale === lang;

        return (
          <button
            key={lang}
            onClick={() => switchLocale(lang)}
            className="relative rounded-full group"
          >
            {/* gradient glow */}
            <span
              className={`
                pointer-events-none absolute inset-0 rounded-full
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                transition-all duration-300
                ${active ? "opacity-70 blur-md" : "opacity-0 group-hover:opacity-50 blur-lg"}
              `}
            />

            {/* button core */}
            <span
              className={`
                relative z-10 block rounded-full border px-3 py-1 text-xs font-medium transition
                ${active
                  ? "border-transparent bg-neutral-900 text-white dark:bg-white dark:text-black"
                  : "border-neutral-300 bg-white/70 text-neutral-600 backdrop-blur hover:border-transparent dark:border-neutral-700 dark:bg-neutral-950/60 dark:text-neutral-400"}
              `}
            >
              {lang.toUpperCase()}
            </span>
          </button>
        );
      })}
    </div>
  );
}