"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "md", 
    rightIcon, 
    leftIcon, 
    isLoading,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      default: "bg-neon-pink text-bg-primary hover:bg-neon-cyan hover:text-bg-primary border-2 border-white active:scale-95",
      outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-bg-primary active:scale-95",
      ghost: "bg-transparent text-white hover:bg-white/10 active:scale-95",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {leftIcon && <span>{leftIcon}</span>}
        <span className="relative z-10">{children}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };