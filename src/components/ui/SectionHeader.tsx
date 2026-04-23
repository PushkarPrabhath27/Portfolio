"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
          {title}
        </h2>
        {badge && (
          <span className="px-3 py-1 text-xs font-medium bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 rounded-full">
            {badge}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}