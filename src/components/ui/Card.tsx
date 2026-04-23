"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  className,
  children,
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingSizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-[var(--background-tertiary)] rounded-xl border border-[var(--border)] transition-all duration-200",
        hover && "hover:border-[var(--accent-primary)]/30",
        paddingSizes[padding],
        className
      )}
    >
      {children}
    </div>
  );
}