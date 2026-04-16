"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { ArrowDown } from "lucide-react";

export const IntroSplash = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      className="bg-background relative top-0 z-20 size-full snap-start overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
            isDark ? "bg-[#8cc2ff]/12" : "bg-[#8cc2ff]/18",
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,194,255,0.12),transparent_52%)]" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="rounded-full border border-[#8cc2ff]/20 bg-[#8cc2ff]/8 px-4 py-2 font-mono text-[11px] tracking-[0.32em] text-[#8cc2ff] uppercase backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          portfolio
        </motion.div>

        <div className="relative mt-8">
          <motion.h1
            className="font-incognito text-foreground relative text-[clamp(5rem,16vw,11rem)] leading-none font-semibold tracking-[-0.06em] italic"
            initial={{ opacity: 0, y: 24, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Aress
          </motion.h1>

          <motion.div
            className="absolute inset-0 translate-x-2 translate-y-2 text-[clamp(5rem,16vw,11rem)] leading-none font-semibold tracking-[-0.06em] text-[#8cc2ff]/10 italic blur-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            aria-hidden
          >
            Aress
          </motion.div>

          <motion.svg
            viewBox="0 0 520 120"
            className="pointer-events-none absolute -bottom-7 left-1/2 w-[88%] -translate-x-1/2 overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            aria-hidden
          >
            <motion.path
              d="M14 67C78 108 183 102 256 78C322 57 381 35 506 58"
              fill="none"
              stroke="rgba(140,194,255,0.9)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.85, ease: "easeOut" }}
            />
            <motion.path
              d="M358 72C386 84 414 96 438 104"
              fill="none"
              stroke="rgba(140,194,255,0.45)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
            />
          </motion.svg>
        </div>

        <motion.p
          className="text-foreground/45 mt-10 font-mono text-xs tracking-[0.42em] uppercase sm:text-sm"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          Nguyễn Tiến Chính
        </motion.p>
      </div>

      <motion.div
        className="text-foreground/35 absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="font-mono text-[11px] tracking-[0.28em] uppercase">
          Kéo xuống
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
