import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "success" | "info" | "warning" | "default";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  const variants = {
    success: "border-[#00ff88] text-[#00ff88]",
    info: "border-[#00f0ff] text-[#00f0ff]",
    warning: "border-[#ffd500] text-[#ffd500]",
    default: "border-white text-white",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] border-2 bg-black",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}