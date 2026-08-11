"use client";

import React, { Suspense, useEffect } from "react";
import { BackgroundNoise } from "../shared/backgrounds";
import { IntroSplash } from "../shared/intro-splash";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import About from "./sections/about";
import Footer from "./sections/footer";
import Services from "./sections/services";
import TimelineSection from "./sections/timeline";
import TerminalSection from "./sections/terminal";
import { Guestbook } from "../feature/guestbook";

const PortfolioPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <div className="no-scrollbar portfolio-container relative size-full min-h-screen">
        <BackgroundNoise className="z-50" />

        <div className="h-screen">
          <IntroSplash />
        </div>

        <main className="before:border-border after:border-border relative z-10 min-h-screen before:absolute before:top-0 before:left-0 before:h-full before:w-12 before:border-r before:bg-[linear-gradient(-135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] before:bg-[length:5px_5px] after:absolute after:top-0 after:right-0 after:h-full after:w-12 after:border-l after:bg-[linear-gradient(135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] after:bg-[length:5px_5px] max-md:before:hidden max-md:after:hidden md:px-12">
          <Navbar />
          <Suspense fallback={null}>
            <Guestbook />
          </Suspense>

          <div className="min-h-[calc(100vh-4rem)] md:px-8">
            <div className="min-h-[calc(100vh-4rem)] md:border-r md:border-l">
              <Hero />
              <Projects />
              <About />
              <Services />
              <TimelineSection />
              <TerminalSection />
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PortfolioPage;
