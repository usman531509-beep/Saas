"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#home", id: "home", label: "Home" },
  { href: "#features", id: "features", label: "Features" },
  { href: "#workflow", id: "workflow", label: "Workflow" },
  { href: "#pricing", id: "pricing", label: "Pricing" },
  { href: "#docs", id: "docs", label: "Docs" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  // Scroll-driven shrink
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: pick whichever section is crossing the middle of the viewport
  useEffect(() => {
    const observed = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (observed.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Effective root = a horizontal line at 40% viewport height.
      // The section currently crossing that line is "active".
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    observed.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-out ${
        scrolled ? "px-3 pt-2 sm:px-5 sm:pt-2" : "px-3 pt-3 sm:px-5 sm:pt-4"
      }`}
    >
      <div
        className={`mx-auto flex items-stretch gap-2 transition-[max-width,gap] duration-500 ease-out sm:gap-3 ${
          scrolled ? "max-w-3xl" : "max-w-7xl"
        }`}
      >
        {/* Main pill */}
        <nav className="flex flex-1 items-center rounded-full bg-foreground px-3 py-2 text-background shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
          <a href="#home" className="flex items-center gap-2.5 px-2">
            <LogoMark size={40} />
            <div
              className={`flex flex-col leading-none transition-[max-width,opacity] duration-300 ease-out ${
                scrolled
                  ? "max-w-0 overflow-hidden opacity-0"
                  : "max-w-[200px] opacity-100"
              }`}
            >
              <span className="whitespace-nowrap text-[15px] font-extrabold tracking-[0.16em]">
                NEBULA
              </span>
              <span className="mt-1 whitespace-nowrap text-[9px] font-semibold tracking-[0.28em] text-violet-500">
                AGENT PLATFORM
              </span>
            </div>
          </a>

          <ul
            className={`hidden flex-1 items-center justify-center transition-[gap] duration-500 ease-out md:flex ${
              scrolled ? "gap-4" : "gap-7 lg:gap-9"
            }`}
          >
            {links.map((l) => {
              const isActive = activeId === l.id;
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative whitespace-nowrap text-[14px] font-semibold transition-colors ${
                      isActive
                        ? "text-violet-500"
                        : "hover:opacity-60"
                    }`}
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -bottom-1.5 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-violet-500 transition-[width,opacity] duration-300 ease-out ${
                        isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto pr-1">
            <ThemeToggle />
          </div>
        </nav>

        {/* Accent CTA pill */}
        <a
          href="#cta"
          className={`inline-flex items-center gap-2 rounded-full bg-violet-600 text-[14px] font-bold text-white shadow-[0_10px_30px_rgba(124,58,237,0.4)] transition-[padding,background-color] duration-500 ease-out hover:bg-violet-500 ${
            scrolled ? "px-4" : "px-5 sm:px-7"
          }`}
        >
          <span className="hidden sm:inline">Start free</span>
          <span className="sm:hidden">Start</span>
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
        </a>
      </div>
    </header>
  );
}
