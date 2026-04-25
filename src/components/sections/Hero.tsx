"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden section-spotlight-pink"
    >
      {/* Background Noise */}
      <div className="absolute inset-0 subtle-noise pointer-events-none" />

      {/* Floating Shapes */}
      <motion.div
        className="absolute -right-10 top-24 h-32 w-32 border border-white/20 rotate-12"
        animate={{ y: [0, -18, 0], rotate: [12, 18, 12] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-6 top-72 h-20 w-20 rounded-full border border-[#00eaff]/30"
        animate={{ y: [0, 14, 0], x: [0, 8, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-1/4 bottom-20 h-16 w-16 border border-[#ff2d75]/30"
        animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <RevealText
            delay={0.15}
            className="text-sm uppercase tracking-[0.28em] text-[#9ca3af]"
          >
            Full-Stack + AI
          </RevealText>

          {/* Main Heading */}
          <div className="mt-6 space-y-2">
            <RevealText
              delay={0.35}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] break-fix"
            >
              Building
            </RevealText>

            <RevealText
              delay={0.55}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] break-fix"
            >
              systems that{" "}
              <motion.span
                initial={{ opacity: 0, y: 40, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                }}
                className="inline-block text-[#ff2d75]"
              >
                scale
              </motion.span>
            </RevealText>
          </div>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 24,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 text-lg md:text-xl text-[#9ca3af] max-w-2xl leading-relaxed break-fix"
          >
            I design production-ready products and research-driven AI systems
            with a focus on clarity, performance, and measurable outcomes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 1.2,
                },
              },
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <MagneticButton
                href="/#projects"
                className="px-7 py-3 border border-white text-white hover:bg-white hover:text-black rounded-lg shine-button"
              >
                View Projects
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <MagneticButton
                href="/#research"
                className="px-7 py-3 border border-[#ff2d75] text-[#ff2d75] hover:bg-[#ff2d75] hover:text-black rounded-lg shine-button"
              >
                Research
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Sticker */}
          <motion.div
            initial={{ opacity: 0, y: 12, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{
              delay: 1.45,
              duration: 0.6,
            }}
            className="mt-10"
          >
            <span className="sticker">
              available for work
            </span>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.55,
              duration: 0.7,
            }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm"
          >
            {[
              ["10+", "Projects"],
              ["AI", "Focused"],
              ["Full Stack", "Builder"],
              ["2027", "Grad Year"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="panel-corners bg-[#111111]/70 border border-neutral-800 rounded-xl px-4 py-4"
              >
                <p className="text-white font-bold text-lg">
                  {value}
                </p>
                <p className="text-[#9ca3af] mt-1">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}