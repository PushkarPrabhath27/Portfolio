"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export function ParallaxLayer({ children, speed = 0.15, className = "" }: { children: ReactNode; speed?: number; className?: string }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1400], [0, -1400 * speed]);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
