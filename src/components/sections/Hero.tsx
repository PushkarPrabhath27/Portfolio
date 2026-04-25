"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";

const words = ["systems", "products", "intelligence", "research"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((prev) => (prev + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-40 pb-24 section-spotlight-pink" id="top">
      <div className="absolute inset-0 subtle-noise" />
      <FloatingShapes />

      <Container className="relative">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
          <div className="space-y-8">
            <RevealText delay={0.2} className="text-xs md:text-sm uppercase tracking-[0.26em] text-[#9ca3af]">
              Elite Engineer + AI Researcher
            </RevealText>

            <div className="space-y-1">
              <RevealText delay={0.4} className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] break-fix">
                BUILDING
              </RevealText>
              <RevealText delay={0.6} className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] break-fix">
                <motion.span key={words[wordIndex]} initial={{ y: 48, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="bg-gradient-to-r from-[#ff2d75] via-[#00eaff] to-[#8b5cf6] bg-clip-text text-transparent">
                  {words[wordIndex].toUpperCase()}
                </motion.span>{" "}
                THAT SCALE
              </RevealText>
            </div>

            <motion.p initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ delay: 1, duration: 0.8 }} className="text-lg text-[#9ca3af] max-w-2xl break-fix">
              Full-stack engineer building production software and AI systems with performance, clarity,
              and measurable outcomes.
            </motion.p>

            <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 1.2 } } }} className="flex flex-wrap gap-4">
              {[
                ["/#projects", "View Work", "border-white text-white hover:bg-white hover:text-black"],
                ["/#research", "Research", "border-[#ff2d75] text-[#ff2d75] hover:bg-[#ff2d75] hover:text-black"],
                ["/resume.pdf", "Resume", "border-[#00eaff] text-[#00eaff] hover:bg-[#00eaff] hover:text-black"],
              ].map(([href, label, extra]) => (
                <motion.div key={label} variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}>
                  <MagneticButton href={href} className={`px-6 py-3 border ${extra} shine-button`}>
                    {label}
                  </MagneticButton>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-3 gap-4 max-w-xl pt-6">
              {[
                ["13+", "Projects"],
                ["3", "Research Papers"],
                ["2027", "Graduation"],
              ].map(([value, label], idx) => (
                <motion.div key={label} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45 + idx * 0.08 }} className="panel-corners border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="hidden lg:block panel-corners border border-white/10 bg-[linear-gradient(180deg,rgba(255,45,117,0.08),rgba(0,234,255,0.03))] p-6">
            <div className="h-[420px] rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,45,117,0.18),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,234,255,0.14),transparent_55%)]" />
              <motion.div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 border border-white/30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
