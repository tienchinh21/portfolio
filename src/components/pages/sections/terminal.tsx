"use client";

import React, { useState, useRef, useEffect } from "react";
import SectionHeading from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import confetti from "canvas-confetti";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "@/i18n/use-translation";

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

const COMMAND_SUGGESTIONS = [
  "help",
  "whoami",
  "skills",
  "projects",
  "contact",
  "sudo hire",
  "clear",
];

const TerminalSection: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: "welcome",
      output: (
        <div className="text-emerald-400 space-y-1">
          <p className="font-bold">🚀 Welcome to Aress Interactive CLI [Version 2.5.0]</p>
          <p className="text-xs text-muted-foreground">
            Type <span className="text-yellow-400 font-bold">&apos;help&apos;</span> to list available commands or click the command chips below.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    const terminalBody = terminalBodyRef.current;
    if (!terminalBody) return;

    terminalBody.scrollTo({
      top: terminalBody.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-xs md:text-sm">
            <p className="text-yellow-400 font-bold mb-1">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono">
              <div><span className="text-cyan-400 font-bold">whoami</span> - Thông tin cá nhân & Vai trò</div>
              <div><span className="text-cyan-400 font-bold">skills</span> - Danh sách kỹ năng lập trình</div>
              <div><span className="text-cyan-400 font-bold">projects</span> - Danh sách các dự án nổi bật</div>
              <div><span className="text-cyan-400 font-bold">contact</span> - Thông tin liên hệ trực tiếp</div>
              <div><span className="text-emerald-400 font-bold">sudo hire</span> - 🚀 Lời mời hợp tác (Khuyến nghị!)</div>
              <div><span className="text-red-400 font-bold">clear</span> - Xóa màn hình terminal</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-xs md:text-sm text-foreground/90">
            <p><strong>Name:</strong> Nguyễn Tiến Chính</p>
            <p><strong>Role:</strong> Fullstack Developer</p>
            <p><strong>Bio:</strong> Xây dựng ứng dụng web hiện đại và hệ thống Admin CMS với React, Next.js, Node.js, NestJS, PostgreSQL và TypeScript. Chú trọng kiến trúc sạch, an toàn và tối ưu trải nghiệm người dùng.</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-xs md:text-sm">
            <p className="text-purple-400 font-bold">Tech Stack &amp; Mastery:</p>
            <p>• <strong>Frontend:</strong> React 19, Next.js 15, TypeScript, Ant Design, Tailwind CSS v4, Zustand, React Query</p>
            <p>• <strong>Backend &amp; DB:</strong> Node.js, NestJS, RESTful APIs, PostgreSQL, MySQL, TypeORM, Prisma ORM</p>
            <p>• <strong>DevOps &amp; AI:</strong> Git &amp; GitHub, CI/CD (GitHub Actions), Docker, Docker Compose, AI Coding Agents</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2 text-xs md:text-sm">
            <p className="text-cyan-400 font-bold">Featured Projects:</p>
            <div>
              <p className="font-bold text-foreground">1. AI Commerce Marketplace Platform [In Progress]</p>
              <p className="text-muted-foreground text-xs">Enterprise AI marketplace with Semantic Search (pgvector), Review Intelligence &amp; Text-to-SQL.</p>
            </div>
            <div>
              <p className="font-bold text-foreground">2. Mini Banking Ledger &amp; Payment Gateway [In Progress]</p>
              <p className="text-muted-foreground text-xs">Fintech banking wallet, double-entry ledger journal, HMAC merchant signing &amp; Admin CMS.</p>
            </div>
            <div>
              <p className="font-bold text-foreground">3. Interactive Developer Portfolio [Live]</p>
              <p className="text-muted-foreground text-xs">Cyberpunk portfolio with Next.js 15, React 19, Tailwind CSS v4, Prisma ORM, WebGL &amp; custom CLI.</p>
            </div>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs md:text-sm">
            <p className="text-green-400 font-bold">Direct Contact Channels:</p>
            <p>• Telegram: <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{siteConfig.telegram}</a></p>
            <p>• Email: <a href={`mailto:${siteConfig.email}`} className="text-cyan-400 underline">{siteConfig.email}</a></p>
            <p>• GitHub: <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{siteConfig.github}</a></p>
          </div>
        );
        break;

      case "sudo hire":
        // Trigger Confetti!
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });

        output = (
          <div className="p-3 bg-emerald-500/10 border-2 border-emerald-500/40 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <Sparkles className="size-5 animate-spin" />
              <span>ACCESS GRANTED! PERMISSION ACCEPTED 🎉</span>
            </div>
            <p className="text-xs md:text-sm text-foreground/90">
              Cảm ơn bạn đã quan tâm! Tôi rất sẵn lòng thảo luận về công việc & cơ hội hợp tác mới.
            </p>
            <div className="pt-1">
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold text-xs transition-colors"
              >
                Chat ngay qua Telegram 🚀
              </a>
            </div>
          </div>
        );
        break;

      default:
        output = (
          <div className="text-red-400 text-xs flex items-center gap-1.5">
            <ShieldAlert className="size-4 shrink-0" />
            <span>Command not recognized: &apos;{trimmed}&apos;. Type &apos;help&apos; for available commands.</span>
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <SectionHeading text={t.terminal.sectionTitle} id="terminal">
      <div className="pt-14 p-4 md:pt-16 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl overflow-hidden rounded-xl border-2 border-foreground/20 bg-[#0c0c0e] shadow-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-foreground/10 bg-[#16161a] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-foreground/60">
              <TerminalIcon className="size-3.5" />
              <span>aress@portfolio:~ (zsh)</span>
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            data-lenis-prevent
            onClick={() => inputRef.current?.focus()}
            className="h-[380px] overflow-y-auto p-4 md:p-6 font-mono text-sm text-foreground/90 leading-relaxed cursor-text"
          >
            {history.map((item, idx) => (
              <div key={idx} className="mb-3 space-y-1">
                {item.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-foreground/70 text-xs">
                    <span className="text-emerald-400 font-bold">aress@portfolio:~$</span>
                    <span className="text-foreground font-semibold">{item.command}</span>
                  </div>
                )}
                <div className="pl-0">{item.output}</div>
              </div>
            ))}

            {/* Prompt input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold text-xs shrink-0 md:inline hidden">aress@portfolio:~$</span>
              <span className="text-emerald-400 font-bold text-xs shrink-0 md:hidden">aress:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'help' or 'sudo hire'..."
                className="flex-1 bg-transparent font-mono text-sm md:text-base text-foreground outline-none border-none focus:ring-0 p-0"
              />
              <button type="submit" aria-label="Run command" className="text-foreground/40 hover:text-foreground">
                <CornerDownLeft className="size-3.5" />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Chips Footer */}
          <div className="border-t border-foreground/10 bg-[#121215] px-4 py-3">
            <span className="text-[11px] font-mono text-muted-foreground mr-2 block sm:inline mb-1 sm:mb-0">
              Quick Commands:
            </span>
            <div className="inline-flex flex-wrap gap-1.5">
              {COMMAND_SUGGESTIONS.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className={`px-2.5 py-1 text-xs font-mono rounded border transition-all ${
                    cmd === "sudo hire"
                      ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 font-bold"
                      : "border-foreground/15 bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground"
                  }`}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionHeading>
  );
};

export default TerminalSection;
