"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      onMouseMove={(event) => {
        const node = event.currentTarget;
        const rect = node.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rx = (0.5 - py) * 6;
        const ry = (px - 0.5) * 6;
        node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
