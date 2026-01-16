"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "@/public/lottie/hero.json";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden">
      {/* GLOBAL SOFT BACKDROP – nối liền header & content */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
      </div>

      {/* FLOATING COLOR BLOBS */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-64 -left-64 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-fuchsia-500/30 via-sky-500/20 to-transparent blur-2xl"
          animate={{ opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-72 -right-72 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-emerald-500/25 via-indigo-500/20 to-transparent blur-2xl"
          animate={{ opacity: [0.22, 0.5, 0.22] }}
          transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-20 md:grid-cols-2 md:items-center">
          {/* TEXT */}
          <div>
            <motion.h1
              className="text-5xl font-semibold tracking-tight md:text-6xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradient_8s_linear_infinite]">
                {t("hero.title")}
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-300"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Link
                href="#products"
                className="group relative overflow-hidden rounded-2xl px-6 py-3 text-sm font-medium text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 transition-transform duration-300 group-hover:scale-[1.08]" />
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.cta")}
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>

              <Link
                href="https://github.com"
                className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
              >
                GitHub
              </Link>
            </motion.div>
          </div>

          {/* LOTTIE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-3xl border border-neutral-200 bg-white/60 p-3 backdrop-blur dark:border-neutral-900 dark:bg-neutral-950/60"
          >
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10"
              animate={{ opacity: [0.25, 0.55, 0.25] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            />
            <Lottie
              animationData={heroAnimation}
              loop
              className="relative h-[360px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
