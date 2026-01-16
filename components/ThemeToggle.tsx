"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Run once on mount to sync with actual DOM / system
  useEffect(() => {
    const html = document.documentElement;
    const isDark =
      html.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDark(isDark);
    setMounted(true);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark, mounted]);

  // Prevent incorrect first render
  if (!mounted) return null;

  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-sm transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
      title="Toggle theme"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}