import { cn } from "@/lib/utils";

interface TagProps {
  name: string;
  className?: string;
}

export function Tag({ name, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-white/30 bg-black/50 text-white/80 hover:border-[#ff2d75] hover:text-[#ff2d75] transition-all duration-100",
        className
      )}
    >
      {name}
    </span>
  );
}