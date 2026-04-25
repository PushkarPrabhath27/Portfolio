"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { researchPapers } from "@/lib/data/research";

export default function Research() {
  return (
    <section
      id="research"
      className="relative section-spotlight-cyan subtle-noise py-24 overflow-hidden"
    >
      <Container>
        <SectionIntro
          title="Research"
          subtitle="Publications and ongoing research efforts."
          sticker="built with intent"
        />

        <div className="grid grid-cols-1 gap-8">
          {researchPapers.map((paper, idx) => (
            <motion.div
              key={paper.slug}
              initial={{
                opacity: 0,
                x: idx % 2 === 0 ? -50 : 50,
                y: 30,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.75,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group panel-corners card-spotlight bg-[#111111]/90 border border-neutral-800 border-l-2 border-l-[#00eaff] rounded-xl p-7 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(0,0,0,0.45)]"
            >
              {/* Top Row */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-bold break-fix leading-tight max-w-3xl">
                  {paper.title}
                </h3>

                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.18 + idx * 0.08,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="shrink-0 text-xs px-3 py-1 border border-[#00eaff] text-[#00eaff] uppercase tracking-wider rounded-full"
                >
                  {paper.status.replace("-", " ")}
                </motion.span>
              </div>

              {/* Divider */}
              <div className="mt-4 h-px w-full bg-neutral-800" />

              {/* Abstract */}
              <p className="text-[#9ca3af] mt-5 break-fix leading-relaxed">
                {paper.abstract}
              </p>

              {/* CTA */}
              <Link
                href={`/research/${paper.slug}`}
                className="inline-flex items-center gap-2 mt-6 text-[#00eaff] hover:text-white transition-colors duration-300"
              >
                Read paper
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}