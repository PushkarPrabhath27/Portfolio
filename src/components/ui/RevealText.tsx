"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function RevealText({ children, className, delay = 0, once = true }: RevealTextProps) {
  return (
    <span className={className}>
      <span className="block overflow-hidden">
        <motion.span
          className="block"
          initial={{ y: "120%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
          viewport={{ once }}
        >
          {children}
        </motion.span>
      </span>
    </span>
  );
}
