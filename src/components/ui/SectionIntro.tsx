"use client";

import { motion } from "framer-motion";
import { RevealText } from "./RevealText";

interface SectionIntroProps {
  title: string;
  subtitle: string;
  sticker?: string;
}

export function SectionIntro({ title, subtitle, sticker }: SectionIntroProps) {
  return (
    <div className="mb-12 space-y-4">
      {sticker && <span className="sticker">{sticker}</span>}
      <motion.div initial={{ opacity: 0, x: -30, filter: "blur(8px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <RevealText className="text-4xl md:text-5xl font-bold break-fix leading-tight">{title}</RevealText>
      </motion.div>
      <motion.p
        className="text-[#9ca3af]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
