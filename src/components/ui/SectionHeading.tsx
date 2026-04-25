"use client";

import { motion } from "framer-motion";
import { RevealText } from "./RevealText";

export function SectionHeading({ title, subtitle, sticker }: { title: string; subtitle: string; sticker?: string }) {
  return (
    <div className="mb-14 space-y-4">
      {sticker ? <span className="sticker">{sticker}</span> : null}
      <motion.div initial={{ opacity: 0, x: -35, filter: "blur(8px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <RevealText className="text-4xl md:text-6xl font-black leading-[0.95] break-fix">{title}</RevealText>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }} className="text-[#9ca3af] max-w-2xl break-fix">
        {subtitle}
      </motion.p>
    </div>
  );
}
