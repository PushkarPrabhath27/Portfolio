"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const pull = (event: React.MouseEvent<HTMLAnchorElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
  event.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
};

const reset = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.currentTarget.style.transform = "translate(0, 0)";
};

export default function Hero() {
  return (
    <section className="relative pt-32 section-spotlight-pink" id="top">
      <div className="absolute inset-0 subtle-noise" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl space-y-8"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#9ca3af]">
            Full-Stack Engineer & AI Researcher
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight break-fix">
            Building{" "}
            <span className="bg-gradient-to-r from-[#ff2d75] to-[#00f0ff] bg-clip-text text-transparent">
              systems
            </span>{" "}
            that scale
          </h1>

          <p className="text-lg text-[#9ca3af] max-w-2xl break-fix">
            I design production-ready products and research-driven AI systems with a focus on clarity,
            performance, and measurable outcomes.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#projects"
              onMouseMove={pull}
              onMouseLeave={reset}
              className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black"
            >
              View Projects
            </Link>
            <Link
              href="/#research"
              onMouseMove={pull}
              onMouseLeave={reset}
              className="px-6 py-3 border border-[#ff2d75] text-[#ff2d75] hover:bg-[#ff2d75] hover:text-black"
            >
              Research
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
