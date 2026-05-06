import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  amount?: number | "some" | "all";
};

export function Reveal({ children, className = "" }: Props) {
  return <div className={className}>{children}</div>;
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
};

export function StaggerGroup({ children, className = "" }: StaggerProps) {
  return <div className={className}>{children}</div>;
}

export const staggerItem = {};
