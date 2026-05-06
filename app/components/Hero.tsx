"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const ROTATING_WORDS = [
  "AI-native teams",
  "fast-moving builders",
  "production agents",
  "ambitious founders",
  "shipping engineers",
];

export function Hero() {
  const titles = useMemo(() => ROTATING_WORDS, []);
  const [titleNumber, setTitleNumber] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 2200);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  return (
    <section id="home" className="relative pt-20">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center px-4 text-center">
            <a
              href="#"
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Nebula 2.0 agents now ship to production
              <ChevronIcon />
            </a>

            <h1 className="text-balance text-[40px] font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              <span className="text-gradient">The operating system for</span>
              <span className="relative mt-2 flex h-[1.15em] w-full justify-center overflow-hidden text-center md:mt-3">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-foreground"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50, damping: 12 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground/60 sm:text-lg">
              Build, deploy, and observe production-grade agent workflows in
              min without the glue code. One workspace for prompts,
              evaluations, and live traffic.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#cta"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Start building free
                <ArrowIcon />
              </a>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full glass px-7 text-sm font-medium text-foreground/90 transition-colors hover:bg-foreground/[0.08]"
              >
                <PlayIcon />
                Watch the 90s tour
              </a>
            </div>

            <p className="mt-10 text-xs uppercase tracking-[0.18em] text-foreground/40">
              Trusted by builders at
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-9 gap-y-3 opacity-70">
              {["Linear", "Notion", "Vercel", "Stripe", "Ramp", "Cursor"].map(
                (b) => (
                  <span
                    key={b}
                    className="text-sm font-semibold tracking-tight text-foreground/60"
                  >
                    {b}
                  </span>
                ),
              )}
            </div>
          </div>
        }
      >
        <DashboardMock />
      </ContainerScroll>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="dark-island flex h-full w-full flex-col bg-zinc-950">
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
        </div>
        <div className="ml-4 flex h-7 flex-1 items-center rounded-md bg-white/5 px-3 text-[11px] text-white/40">
          nebula.ai/workspace/agents
        </div>
      </div>
      <div className="grid flex-1 grid-cols-12 gap-px bg-white/5">
        {/* Sidebar */}
        <div className="col-span-3 hidden bg-black/40 p-4 md:block">
          <div className="mb-4 text-[10px] uppercase tracking-widest text-white/40">
            Workspace
          </div>
          <div className="space-y-1.5">
            {["Agents", "Evaluations", "Datasets", "Traces", "Settings"].map(
              (s, i) => (
                <div
                  key={s}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] ${
                    i === 0 ? "bg-white/10 text-white" : "text-white/55"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                  {s}
                </div>
              ),
            )}
          </div>
        </div>
        {/* Main canvas */}
        <div className="col-span-12 flex flex-col gap-3 bg-black/30 p-5 md:col-span-9">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Customer Triage Agent</div>
              <div className="text-[11px] text-white/40">
                v3.2 · 12,408 runs today · p95 1.4s
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-medium text-emerald-300">
                Live
              </span>
              <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium text-white/70">
                Auto-deploy
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { l: "Success rate", v: "98.7%", d: "+0.4%" },
              { l: "Avg latency", v: "842ms", d: "-12%" },
              { l: "Cost / run", v: "$0.0021", d: "-31%" },
            ].map((m) => (
              <div
                key={m.l}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <div className="text-[10px] uppercase tracking-wider text-white/40">
                  {m.l}
                </div>
                <div className="mt-1 text-lg font-semibold tracking-tight">
                  {m.v}
                </div>
                <div className="text-[10px] text-emerald-300">{m.d}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between text-[11px] text-white/40">
              <span>Live traces — last 60s</span>
              <span>1,204 events</span>
            </div>
            <div className="flex h-full max-h-40 items-end gap-1">
              {Array.from({ length: 48 }).map((_, i) => {
                const raw =
                  18 + Math.abs(Math.sin(i * 0.6)) * 70 + (i % 7) * 4;
                const h = Math.round(Math.min(100, raw) * 10) / 10;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-violet-500/40 via-fuchsia-400/60 to-cyan-300/80"
                    style={{ height: `${h}%` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
