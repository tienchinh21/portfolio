"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, ChevronDown, Rocket, GraduationCap, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

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

const milestones: Milestone[] = [
  {
    id: "m1",
    year: "2025 - Hiện tại",
    role: "Front-End & Fullstack Developer",
    company: "Freelance & Open Source Projects",
    type: "work",
    summary: "Xây dựng các ứng dụng web hiện đại với Next.js 15, React 19, TypeScript và tự động hóa hệ thống.",
    details: [
      "Phát triển trang Portfolio cá nhân tích hợp WebGL, Interactive Terminal CLI và Prisma ORM.",
      "Tối ưu chỉ số Core Web Vitals và trải nghiệm người dùng với Tailwind CSS v4 & Framer Motion.",
      "Xây dựng bot tự động hóa quản lý nhóm Telegram và gửi thông báo real-time.",
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma ORM", "Better Auth"],
  },
  {
    id: "m2",
    year: "10/2025 - 01/2026",
    role: "Front-End Developer",
    company: "CimoSchool App Project",
    type: "work",
    summary: "Xây dựng hệ thống học trực tuyến dành cho trường học với hàng trăm người dùng tương tác.",
    details: [
      "Thiết kế giao diện người dùng mượt mà cho các tính năng quản lý khóa học, bài giảng và lớp học.",
      "Tích hợp RESTful APIs và quản lý state tập trung đảm bảo dữ liệu luôn đồng bộ.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API", "Zustand"],
  },
  {
    id: "m3",
    year: "2024 - 2025",
    role: "Fullstack Exploration & Tech Mastery",
    company: "Self-Driven Learning & Projects",
    type: "education",
    summary: "Nghiên cứu chuyên sâu về các công nghệ Web hiện đại, Clean Architecture & UI/UX.",
    details: [
      "Rèn luyện kỹ năng lập trình Clean Code, cấu trúc dự án chuẩn và làm việc với Git.",
      "Thực hiện nhiều dự án cá nhân thực tế từ Landing Pages, Web Apps tới Telegram Automation.",
    ],
    tech: ["JavaScript (ES6+)", "TypeScript", "Node.js", "MySQL / PostgreSQL", "Git"],
  },
];

const TimelineSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("m1");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <SectionHeading text="Career Journey" id="journey">
      <div className="p-6 md:p-12 lg:p-16 max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="text-primary font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
            <Rocket className="size-3.5" /> Milestones & Growth
          </span>
          <h3 className="font-incognito text-2xl font-bold md:text-4xl">
            Hành trình phát triển & Kinh nghiệm
          </h3>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Quá trình học hỏi, rèn luyện và các cột mốc thực hiện dự án thực tế.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-dashed border-foreground/20 ml-3 md:ml-6 space-y-8 pl-6 md:pl-10">
          {milestones.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div
                  className={cn(
                    "absolute -left-[31px] md:-left-[47px] top-1.5 size-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-background",
                    isExpanded
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_12px_rgba(59,130,246,0.6)] scale-125"
                      : "border-foreground/30 group-hover:border-primary"
                  )}
                >
                  {item.type === "work" ? (
                    <Briefcase className="size-2.5" />
                  ) : (
                    <GraduationCap className="size-2.5" />
                  )}
                </div>

                {/* Card Container */}
                <div className="bg-muted/20 border-2 border-dashed rounded-xl p-5 md:p-6 transition-all hover:border-primary/40">
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-primary flex items-center gap-1">
                          <Calendar className="size-3" /> {item.year}
                        </span>
                      </div>
                      <h4 className="font-incognito text-lg md:text-xl font-bold">{item.role}</h4>
                      <p className="text-muted-foreground text-xs md:text-sm font-medium">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <span className="text-xs font-mono text-muted-foreground">
                        {isExpanded ? "Collapse" : "Details"}
                      </span>
                      <ChevronDown
                        className={cn("size-4 transition-transform duration-300 text-muted-foreground", {
                          "rotate-180 text-primary": isExpanded,
                        })}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-foreground/80 mt-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-dashed mt-4 pt-4 space-y-3"
                      >
                        <div className="space-y-1.5">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="text-xs md:text-sm text-foreground/80 flex items-start gap-2">
                              <span className="text-primary font-bold mt-0.5">•</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.tech.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="font-mono text-[10px] bg-background/80"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionHeading>
  );
};

export default TimelineSection;
