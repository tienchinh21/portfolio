"use client";

import { motion, useScroll, useSpring } from "motion/react";
import React from "react";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-primary via-[#8cc2ff] to-cyan-400 shadow-[0_0_12px_rgba(140,194,255,0.8)] pointer-events-none"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
