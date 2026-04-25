"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface MagneticButtonProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={(event) => {
        const node = event.currentTarget as HTMLDivElement;
        const rect = node.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
        node.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={(event) => {
        const node = event.currentTarget as HTMLDivElement;
        node.style.transform = "translate(0px, 0px)";
      }}
      className="inline-block"
    >
      <Link {...props} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
