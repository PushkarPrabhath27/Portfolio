"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { researchPapers } from "@/lib/data/research";

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="research"
      className="py-32 relative overflow-hidden"
      style={{ transform: "skewY(-3deg)" }}
    >
      <div className="absolute inset-0 halftone noise" />
      
      <Container className="relative" style={{ transform: "skewY(3deg)" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="mb-20 -translate-x-12"
        >
          <h2
            className="text-6xl md:text-8xl font-black uppercase rgb cmyk-shadow glitch"
            data-text="RESEARCH"
          >
            RESEARCH
          </h2>
          <p className="text-lg uppercase tracking-[0.3em] text-white/60 mt-4">
            Academic Publications
          </p>
        </motion.div>

        <div className="space-y-12">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.slug}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.68, -0.55, 0.265, 1.55]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="relative p-8 bg-black border-4 border-white transition-all duration-100"
                style={{
                  boxShadow: `6px 6px 0 ${index === 0 ? "#ff2d75" : index === 1 ? "#00f0ff" : "#ffd500"}`,
                  transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                  background: "linear-gradient(135deg, rgba(255, 45, 117, 0.1) 0%, rgba(106, 0, 255, 0.1) 100%)"
                }}
                whileHover={{ scale: 1.02, rotate: 0 }}
              >
                <div className="halftone absolute inset-0 opacity-20" />

                <div
                  className={`
                    absolute top-0 left-0 w-3 h-full
                    ${index === 0 ? "bg-[#ff2d75]" : index === 1 ? "bg-[#00f0ff]" : "bg-[#ffd500]"}
                  `}
                />

                <div className="pl-8 relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span
                        className={`
                          text-xs font-black uppercase tracking-[0.3em] mb-2 block
                          ${index === 0 ? "text-[#ff2d75]" : index === 1 ? "text-[#00f0ff]" : "text-[#ffd500]"}
                        `}
                      >
                        {paper.status.toUpperCase().replace("-", " ")}
                      </span>
                      <h3
                        className={`
                          text-2xl md:text-3xl font-black uppercase group-hover:text-[#00f0ff] transition-all duration-100
                          ${index % 2 === 0 ? "rgb" : ""}
                        `}
                        data-text={paper.title}
                      >
                        {paper.title}
                      </h3>
                    </div>
                    <motion.div
                      className="comic-button whitespace-nowrap"
                      whileHover={{ rotate: [-3, 3, 0], scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={`/research/${paper.slug}`}>
                        <span className="relative z-10">READ MORE</span>
                      </Link>
                    </motion.div>
                  </div>

                  <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                    {paper.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-bold uppercase border border-[#ff2d75] text-[#ff2d75]">
                      {paper.date}
                    </span>
                    {paper.coauthors.length > 0 && (
                      <span className="px-3 py-1 text-xs font-bold uppercase border border-white/30 text-white/50">
                        {paper.coauthors.length} CO-AUTHORS
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>

      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 border-4 border-[#ff2d75] opacity-10 rotate-45"
      />
      <div
        className="absolute -top-20 -right-20 w-48 h-48 border-4 border-[#00f0ff] opacity-10 -rotate-12"
      />
    </section>
  );
}
