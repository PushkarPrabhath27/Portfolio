"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 60, rotate: 1.5 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};
