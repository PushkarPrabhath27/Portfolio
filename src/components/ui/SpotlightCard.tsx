"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerItem } from "./StaggerGrid";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
      className={`card-spotlight panel-corners ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
