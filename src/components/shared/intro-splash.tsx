"use client";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { Typewriter } from "../ui/typewriter";
import { ArrowDown, Code } from "lucide-react";

export const IntroSplash = () => {
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      className="bg-background relative top-0 z-20 size-full snap-start overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-foreground/5 absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Moving lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="via-foreground/10 absolute h-px bg-gradient-to-r from-transparent to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${80 + Math.random() * 150}px`,
            }}
            animate={{
              x: [0, 80, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Main content - Split layout */}
        <div className="flex h-full items-center justify-between px-8 md:px-20">
          {/* Left side - Welcome message */}
          <motion.div
            className="max-w-md flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-foreground/60 mb-2 font-mono text-sm">
                Welcome to my digital space
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-[#8cc2ff] to-transparent" />
            </motion.div>

            <motion.h1
              className="font-incognito mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-foreground mb-2">I'm</div>
              <div className="text-[#8cc2ff]">
                <Typewriter
                  text={["Nguyễn Tiến Chính", "a Developer", "a Creator"]}
                  speed={100}
                  waitTime={2500}
                  deleteSpeed={50}
                  cursorChar="|"
                />
              </div>
            </motion.h1>

            <motion.p
              className="text-foreground/70 text-lg leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting digital experiences through code, design, and innovation.
              Let's build something amazing together.
            </motion.p>

            {/* Tech stack indicators */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {["React", "Next.js", "TypeScript", "Node.js"].map((tech, i) => (
                <motion.span
                  key={tech}
                  className="bg-foreground/10 border-foreground/20 text-foreground/70 rounded-full border px-3 py-1 font-mono text-xs"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Interactive visual */}
          <motion.div
            className="flex flex-1 items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main interactive circle */}
              <motion.div
                className="relative"
                initial={{ scale: 0.5, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
              >
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#8cc2ff]/30"
                  style={{ width: "300px", height: "300px" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Middle ring */}
                <motion.div
                  className="border-foreground/20 absolute inset-0 rounded-full border"
                  style={{ width: "250px", height: "250px", margin: "25px" }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner content area */}
                <div className="from-foreground/5 to-foreground/10 border-foreground/20 flex h-200 w-200 items-center justify-center rounded-full border bg-gradient-to-br backdrop-blur-sm">
                  <motion.div
                    className="text-center"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Code className="mx-auto mb-4 h-16 w-16 text-[#8cc2ff]" />
                    <div className="text-foreground/60 font-mono text-sm">
                      Click to explore
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements around the circle */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-3 w-3 rounded-full bg-[#8cc2ff]/40"
                    style={{
                      top: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                      left: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="text-foreground/40 absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="font-mono text-xs">KÉO XUỐNG</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
