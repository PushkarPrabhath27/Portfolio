"use client";

import { useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./Button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  if (typeof window !== "undefined" && !mounted) {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }

  const toggleTheme = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTheme(prev => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      
      if (newTheme === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      }
      
      setTimeout(() => setIsAnimating(false), 300);
      return newTheme;
    });
  }, [isAnimating]);

  if (!mounted) {
    return (
      <div className="w-10 h-10 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-[var(--background-tertiary)]" />
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 p-0 relative overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-4 h-4">
        {theme === "dark" ? (
          <Sun className="h-4 w-4 transition-all duration-300 hover:rotate-180" />
        ) : (
          <Moon className="h-4 w-4 transition-all duration-300 hover:rotate-12" />
        )}
      </div>
    </Button>
  );
}