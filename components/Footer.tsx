"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200/60 dark:border-neutral-900/60">
      {/* subtle gradient field */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5 dark:from-indigo-400/10 dark:via-purple-400/10 dark:to-cyan-400/10" />

      <div className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* BRAND */}
          <div>
            <div className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              T-Dev Studio
            </div>
            <div className="mt-2 max-w-sm text-xs text-neutral-600 dark:text-neutral-400">
              {t("header.slogan")}
            </div>
          </div>

          {/* WORK & COLLAB */}
          <div className="flex flex-col items-start gap-3 md:items-center">
            <div className="relative">
              <div className="relative z-10 text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Work & Collaboration
              </div>
              <div className="absolute -inset-x-6 -inset-y-3 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-xl" />
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-600 dark:text-neutral-400">
              {/* Email */}
              <a
                href="mailto:tungninh88@gmail.com"
                className="group relative inline-flex items-center gap-2 transition hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span>Email</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>

              <span className="opacity-30">•</span>

              {/* Telegram */}
              <a
                href="https://t.me/haquangtung"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 transition hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22l-4-9-9-4z" />
                </svg>
                <span>Telegram</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>

              <span className="opacity-30">•</span>

              {/* GitHub */}
              <a
                href="https://github.com/cudin-etn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 transition hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.6 2.8 2.3.2-.7.4-1.2.8-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17.9 6 19 6.3 19 6.3c.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.6 11.6 0 0023.5 12C23.5 5.7 18.3.5 12 .5z"/>
                </svg>
                <span>GitHub</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          </div>

          {/* META */}
          <div className="flex flex-col gap-3 text-xs md:items-end">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-500 dark:text-neutral-400">
              <a
                href="/privacy"
                className="relative text-xs transition hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                {t("footer.privacy")}
              </a>
              <span className="opacity-40">•</span>
              <a
                href="/terms"
                className="relative text-xs transition hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                {t("footer.terms")}
              </a>
            </div>

            <a
              href={t("donate.links.coffee")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-medium text-neutral-700 transition-colors dark:text-neutral-300"
            >
              <span className="relative">
                {t("footer.support")}
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <span className="opacity-70 transition group-hover:opacity-100">☕</span>
            </a>

            <div className="text-neutral-500 dark:text-neutral-500">
              {t("footer.copyright", { year })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
