"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", rightIcon, leftIcon, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2";

    const variants = {
      default: "border border-white text-white hover:bg-white hover:text-black",
      accent: "border border-[#ff2d75] text-[#ff2d75] hover:bg-[#ff2d75] hover:text-black",
      ghost: "border border-neutral-700 text-white hover:border-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
