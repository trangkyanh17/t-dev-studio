"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Coffee } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingDock() {
  const router = useRouter();
  const [offset, setOffset] = useState(24);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOffset(footer.offsetHeight + 24);
        } else {
          setOffset(24);
        }
      },
      { root: null, threshold: 0 }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, bottom: 24 }}
      animate={{ opacity: 1, y: 0, bottom: offset }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
      className="
        fixed left-1/2 -translate-x-1/2
        z-[9999]
        h-14 px-4 gap-3
        rounded-full
        backdrop-blur-xl
        bg-neutral-900/80
        border border-white/10
        shadow-[0_12px_40px_rgba(0,0,0,0.55)]
        flex items-center
        pointer-events-auto
      "
      aria-label="Floating navigation dock"
    >
      <DockButton
        onClick={() => router.back()}
        label="Back"
      >
        <ArrowLeft size={18} />
      </DockButton>

      <DockButton
        onClick={() => router.forward()}
        label="Forward"
      >
        <ArrowRight size={18} />
      </DockButton>

      <DockButton
        onClick={() =>
          window.open("https://buymeacoffee.com/tdevstudio", "_blank")
        }
        label="Donate"
      >
        <Coffee size={18} />
      </DockButton>
    </motion.div>
  );
}

function DockButton({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        aria-label={label}
        type="button"
        className="
          group
          h-10 w-10 rounded-full
          flex items-center justify-center
          text-white/80
          hover:text-white
          hover:bg-gradient-to-br
          hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500
          active:scale-95
          transition-all duration-200
        "
      >
        <motion.span
          whileHover={{ rotate: label === "Donate" ? 8 : 0, y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          {children}
        </motion.span>
      </button>
      <span className="
        pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
        rounded-md bg-black/80 px-2 py-1 text-[10px] text-white
        opacity-0 translate-y-1
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200
        backdrop-blur
        border border-white/10
      ">
        {label}
      </span>
    </div>
  );
}