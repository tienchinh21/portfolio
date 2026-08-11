"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-12 rounded-full bg-background/80 backdrop-blur-md border border-foreground/10 shadow-2xl text-foreground group transition-shadow hover:shadow-[0_0_20px_rgba(140,194,255,0.4)]"
          aria-label="Back to top"
        >
          {/* Circular SVG Progress Ring */}
          <svg className="absolute size-full -rotate-90 p-0.5" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r={radius}
              className="text-foreground/10 stroke-current"
              strokeWidth="2.5"
              fill="transparent"
            />
            <motion.circle
              cx="22"
              cy="22"
              r={radius}
              className="text-primary stroke-current"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          <ArrowUp className="size-4 text-foreground/80 group-hover:text-primary group-hover:-translate-y-0.5 transition-all" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
