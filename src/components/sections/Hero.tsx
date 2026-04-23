"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isVisible, setIsVisible] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative halftone noise bg-black overflow-hidden min-h-screen flex items-center justify-center"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -50, rotate: -5 }}
          animate={isVisible ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
          className="mb-8 -translate-x-4"
        >
          <span
            className="inline-block px-6 py-3 border-4 border-white font-black uppercase tracking-[0.2em] text-sm"
            style={{ transform: "rotate(-2deg)" }}
          >
            FULL-STACK ENGINEER & AI RESEARCHER
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`
            text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-8
            ${glitchActive ? "glitch rgb" : ""}
          `}
          data-text="PUSHKAR PRABHATH R"
        >
          <span className="block cmyk-shadow">
            PUSHKAR
          </span>
          <span
            className="block gradient-text"
          >
            PRABHATH R
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-xl md:text-2xl uppercase tracking-[0.15em] text-white/70 mb-12"
        >
          <span className="text-[#ff2d75] font-black">BUILDING</span>{" "}
          <span className="text-white">SYSTEMS THAT</span>{" "}
          <span className="text-[#00f0ff] font-black">SCALE</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#projects"
            className="comic-button group"
            whileHover={{ scale: 1.05, rotate: [-3, 3, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">SEE THE WORK</span>
          </motion.a>
          
          <motion.a
            href="#research"
            className="comic-button group"
            whileHover={{ scale: 1.05, rotate: [3, -3, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">VIEW RESEARCH</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "13+", label: "PROJECTS", color: "#ff2d75" },
            { value: "3", label: "RESEARCH", color: "#00f0ff" },
            { value: "2027", label: "GRADUATION", color: "#ffd500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.15 }}
              className="text-center"
            >
              <div
                className="text-3xl md:text-5xl font-black cmyk-shadow"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">SCROLL</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="w-6 h-10 border-4 border-white/30 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#ff2d75] mt-1"
            />
          </motion.div>
        </div>
      </motion.div>

      <div
        className="floating-square w-32 h-32 border-[#ff2d75] rotate-12 top-20 left-10"
        style={{ animation: "float 6s ease-in-out infinite" }}
      />
      <div
        className="floating-square w-24 h-24 border-[#00f0ff] -rotate-8 bottom-40 right-20"
        style={{ animation: "float 5s ease-in-out infinite 1s" }}
      />
      <div
        className="floating-square w-16 h-16 border-[#ffd500] rotate-[30deg] top-1/3 right-1/4"
        style={{ animation: "float 7s ease-in-out infinite 2s" }}
      />
      <div
        className="floating-square w-20 h-20 border-[#ff2d75] -rotate-12 bottom-1/3 left-20"
        style={{ animation: "float 5.5s ease-in-out infinite 0.5s" }}
      />

      <div className="absolute top-0 left-0 w-32 h-32 border-l-8 border-t-8 border-[#ff2d75] opacity-50" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-8 border-t-8 border-[#00f0ff] opacity-50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-8 border-b-8 border-[#ffd500] opacity-50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-8 border-b-8 border-[#6a00ff] opacity-50" />
    </section>
  );
}