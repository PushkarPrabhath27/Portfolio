"use client";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Container({ children, className, style }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[75rem] px-6 md:px-12",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}