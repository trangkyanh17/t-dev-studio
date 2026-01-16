"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-10"
    >
      {/* subtle background accent */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        className="relative grid gap-14 md:grid-cols-2"
      >
        {/* LEFT */}
        <motion.div variants={item}>
          <h2 className="text-3xl font-semibold tracking-tight leading-tight">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
            {t("description")}
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={container}
          className="space-y-8 text-sm text-neutral-600 dark:text-neutral-400"
        >
          <motion.div variants={item} className="flex gap-3 leading-relaxed hover:text-neutral-900 dark:hover:text-neutral-200">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/70 transition-opacity" />
            <p>{t("principles.quality")}</p>
          </motion.div>

          <motion.div variants={item} className="flex gap-3 leading-relaxed hover:text-neutral-900 dark:hover:text-neutral-200">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/70 transition-opacity" />
            <p>{t("principles.design")}</p>
          </motion.div>

          <motion.div variants={item} className="flex gap-3 leading-relaxed hover:text-neutral-900 dark:hover:text-neutral-200">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/70 transition-opacity" />
            <p>{t("principles.platform")}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
