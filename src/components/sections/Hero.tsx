"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";

export default function Hero() {
  return (
    <section className="relative pt-32 section-spotlight-pink" id="top">
      <div className="absolute inset-0 subtle-noise" />
      <motion.div
        className="absolute -right-10 top-24 h-32 w-32 border border-white/30"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-6 top-64 h-20 w-20 rounded-full border border-[#00eaff]/40"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative">
        <div className="max-w-4xl space-y-8">
          <RevealText delay={0.2} className="text-sm uppercase tracking-[0.2em] text-[#9ca3af]">
            Full-Stack + AI
          </RevealText>

          <div className="space-y-2">
            <RevealText delay={0.4} className="text-5xl md:text-7xl font-black leading-[0.95] break-fix">
              Building
            </RevealText>
            <RevealText delay={0.6} className="text-5xl md:text-7xl font-black leading-[0.95] break-fix">
              systems that <motion.span initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, type: "spring", stiffness: 280, damping: 18 }} className="text-[#ff2d75]">scale</motion.span>
            </RevealText>
          </div>

          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg text-[#9ca3af] max-w-2xl break-fix"
          >
            I design production-ready products and research-driven AI systems with a focus on clarity,
            performance, and measurable outcomes.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 1.2 } } }}
            className="flex flex-wrap gap-4"
          >
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
              <MagneticButton href="/#projects" className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black shine-button">
                View Projects
              </MagneticButton>
            </motion.div>
            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
              <MagneticButton href="/#research" className="px-6 py-3 border border-[#ff2d75] text-[#ff2d75] hover:bg-[#ff2d75] hover:text-black shine-button">
                Research
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35 }}
            className="sticker"
          >
            available for work
          </motion.span>
        </div>
      </Container>
    </section>
  );
}
