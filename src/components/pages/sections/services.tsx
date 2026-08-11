"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Server, Cpu, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Layout,
    title: "Front-End Development",
    description:
      "Xây dựng giao diện web mượt mà, phản hồi nhanh (Responsive), tối ưu SEO và trải nghiệm người dùng với Next.js 15, React 19 và Tailwind CSS v4.",
    highlights: ["Next.js App Router", "Framer Motion Animations", "Responsive & Accessibility"],
    badge: "Primary Focus",
  },
  {
    icon: Server,
    title: "Backend & Database",
    description:
      "Thiết kế RESTful APIs sạch, tích hợp cơ sở dữ liệu (PostgreSQL / MySQL) thông qua Prisma ORM và quản lý phiên đăng nhập bảo mật.",
    highlights: ["Prisma ORM & SQL", "Better Auth & Session", "Serverless API Routes"],
    badge: "Core Service",
  },
  {
    icon: Cpu,
    title: "Automation & Telegram Bots",
    description:
      "Phát triển các hệ thống tự động hóa công việc, bot quản lý nhóm Telegram và hệ thống gửi thông báo thời gian thực.",
    highlights: ["Telegram Bot API", "Node.js & TypeScript", "Real-time Workflows"],
    badge: "Specialized",
  },
  {
    icon: Code2,
    title: "Clean Code & Performance",
    description:
      "Viết mã nguồn chuẩn TypeScript type-safe, cấu trúc dự án rõ ràng, tối ưu hóa tốc độ tải trang và chỉ số Core Web Vitals.",
    highlights: ["TypeScript 5 Strict", "State Management (Zustand)", "Performance Optimization"],
    badge: "Quality First",
  },
];

const Services: React.FC = () => {
  return (
    <SectionHeading text="Services & Capabilities" id="services">
      <div className="pt-14 p-6 md:pt-16 md:p-12 lg:p-16">
        <div className="mb-10 max-w-2xl">
          <span className="text-primary font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
            <Sparkles className="size-3.5" /> What I Bring To The Table
          </span>
          <h3 className="font-incognito text-2xl font-bold md:text-4xl">
            Thế mạnh & Dịch vụ phát triển
          </h3>
          <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
            Tôi tập trung vào việc biến các ý tưởng phức tạp thành ứng dụng web hoàn chỉnh, có hiệu năng cao và giao diện đẹp mắt.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-muted/20 hover:bg-muted/40 rounded-xl border-2 border-dashed p-6 transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="bg-background border-2 border-foreground/10 rounded-lg p-3 group-hover:border-primary/50 group-hover:scale-105 transition-all">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="font-mono text-[10px] bg-background/80">
                    {service.badge}
                  </Badge>
                </div>

                <h4 className="font-incognito text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 border-t pt-4">
                  {service.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                      <CheckCircle2 className="size-3.5 text-green-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionHeading>
  );
};

export default Services;
