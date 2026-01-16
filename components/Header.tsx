"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { useTranslations } from "next-intl";
import LocaleSwitch from "@/components/LocaleSwitch";
import { useEffect, useState } from "react";

export default function Header() {
  const t = useTranslations();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur transition-all duration-300
        ${
          scrolled
            ? "border-neutral-200 bg-white/85 shadow-sm dark:border-neutral-900 dark:bg-neutral-950/80"
            : "border-neutral-200/60 bg-white/60 dark:border-neutral-900/60 dark:bg-neutral-950/50"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.div className="group flex items-center gap-3" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
          <motion.div
            className="relative h-10 w-10 overflow-hidden rounded-full"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            whileHover={{ scale: 1.06 }}
          >
            <Image
              src="/ic_cat_coder.png"
              alt="T-Dev Studio logo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="leading-tight">
            <motion.div
              className="relative font-semibold tracking-tight"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
            >
             
              {/* Gradient flow text */}
              <motion.span
                className="relative z-10 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent"
                initial={{ letterSpacing: "0.06em" }}
                animate={{
                  letterSpacing: "0em",
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  letterSpacing: { duration: 0.6, ease: "easeOut" },
                  backgroundPosition: {
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }}
                whileHover={{ opacity: 0.95 }}
              >
                {t("hero.title")}
              </motion.span>
            </motion.div>
            <div className="text-xs text-neutral-600 transition-all duration-300 group-hover:translate-y-[1px] group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-300">
              {t("header.slogan")}
            </div>
          </div>
        </motion.div>

        <nav className="flex items-center gap-2 text-sm transition-opacity duration-300">
          <LocaleSwitch />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}