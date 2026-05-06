import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  glow?: string;
};

export function BentoCard({ className = "", children }: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl glass p-7 transition-colors hover:bg-foreground/[0.06] ${className}`}
    >
      <div className="relative h-full">{children}</div>
    </div>
  );
}
