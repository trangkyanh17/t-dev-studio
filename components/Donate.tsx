"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Donate() {
  const t = useTranslations("donate");

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.015 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 120 }}
        className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-white/70 p-10 backdrop-blur-xl dark:border-neutral-800/60 dark:bg-neutral-950/60 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20"
      >
        {/* Gradient field background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-90"
          style={{
            backgroundImage: `
              radial-gradient(120% 90% at 0% 0%, rgba(99,102,241,0.35), transparent 60%),
              radial-gradient(100% 80% at 100% 100%, rgba(168,85,247,0.35), transparent 65%)
            `
          }}
        />

        <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              {t("title")}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={t("links.coffee")}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.05]"
              >
                ☕ {t("cta.coffee")}
              </a>

              <a
                href={t("links.paypal")}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                ❤️ {t("cta.paypal")}
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs rounded-2xl border border-neutral-200 bg-white/80 p-4 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/donate/qr-pay.png"
                  alt="Donate QR"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              <div className="mt-4 space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
                <p>{t("bank.name")}</p>
                <p>{t("bank.account")}</p>
                <p>{t("bank.note")}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}