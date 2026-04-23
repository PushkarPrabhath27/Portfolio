"use client";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Container({ children, className, style }: ContainerProps) {
  return (
    <div className={cn("max-w-6xl mx-auto px-6 py-24", className)} style={style}>
      {children}
    </div>
  );
}
