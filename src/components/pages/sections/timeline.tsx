"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, ChevronDown, Rocket, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/use-translation";

interface Milestone {
  id: string;
  year: string;
  role: string;
  company: string;
  type: "work" | "education" | "achievement";
  summary: string;
  details: string[];
  tech: string[];
}

const TimelineSection: React.FC = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>("m1");

  const milestones: Milestone[] = (t.journey.milestones || []) as Milestone[];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderCard = (item: Milestone) => {
    const isExpanded = expandedId === item.id;
    return (
      <div className="bg-muted/20 border-2 border-dashed rounded-xl p-5 md:p-6 transition-all hover:border-primary/40 shadow-sm">
        <div
          onClick={() => toggleExpand(item.id)}
          className="flex items-start justify-between gap-2 cursor-pointer select-none"
        >
          <div>
            <span className="text-xs font-mono font-bold text-primary inline-flex items-center gap-1 mb-1">
              <Calendar className="size-3" /> {item.year}
            </span>
            <h4 className="font-incognito text-lg md:text-xl font-bold">{item.role}</h4>
            <p className="text-muted-foreground text-xs md:text-sm font-medium">
              {item.company}
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 pt-1">
            <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
              {isExpanded ? t.journey.collapse : t.journey.details}
            </span>
            <ChevronDown
              className={cn("size-4 transition-transform duration-300 text-muted-foreground", {
                "rotate-180 text-primary": isExpanded,
              })}
            />
          </div>
        </div>

        <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{item.summary}</p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="overflow-hidden border-t border-dashed mt-4 pt-4 space-y-3 transform-gpu"
            >
              <div className="space-y-1.5">
                {item.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="text-xs md:text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-muted-foreground/70 block mb-1.5 uppercase tracking-wider">
                  Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((tItem) => (
                    <Badge
                      key={tItem}
                      variant="outline"
                      className="text-[10px] font-mono border bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      {tItem}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <SectionHeading text={t.journey.sectionTitle} id="journey">
      <div className="pt-14 p-6 md:pt-16 md:p-12 lg:p-16">
        <div className="mb-10 max-w-2xl">
          <span className="text-primary font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
            <Rocket className="size-3.5" /> {t.journey.tagline}
          </span>
          <h3 className="font-incognito text-2xl font-bold md:text-4xl">
            {t.journey.title}
          </h3>
          <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Mobile View: Vertical list */}
        <div className="md:hidden space-y-4">
          {milestones.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {renderCard(item)}
            </motion.div>
          ))}
        </div>

        {/* Desktop View: Centered Timeline with Left & Right Cards */}
        <div className="hidden md:block relative max-w-5xl mx-auto py-8">
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border border-dashed border-l-2" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={cn("relative flex items-center justify-between gap-8", {
                    "flex-row-reverse": isEven,
                  })}
                >
                  {/* Timeline Node in Center */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center size-10 rounded-full border-2 bg-background shadow-md border-primary/40">
                    {item.type === "work" ? (
                      <Briefcase className="size-4 text-primary" />
                    ) : (
                      <GraduationCap className="size-4 text-primary" />
                    )}
                  </div>

                  {/* Content Card Side (Takes up half width) */}
                  <div className="w-[calc(50%-2rem)]">
                    {renderCard(item)}
                  </div>

                  {/* Empty Spacer Side */}
                  <div className="w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionHeading>
  );
};

export default TimelineSection;
