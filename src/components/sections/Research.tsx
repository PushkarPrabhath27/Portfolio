"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { researchPapers } from "@/lib/data/research";

export default function Research() {
  return (
    <section
      id="research"
      className="relative section-spotlight-cyan subtle-noise py-24 overflow-hidden"
    >
      <Container>
        <SectionHeading
          title="Research Highlights"
          subtitle="Editorial snapshots of active and published work across AI systems and language research."
          sticker="research"
        />

        <div className="space-y-6">
          {researchPapers.map((paper, idx) => (
            <motion.article
              key={paper.slug}
              initial={{
                opacity: 0,
                x: idx % 2 ? 60 : -60,
                y: 24,
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
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="group panel-corners card-spotlight grid md:grid-cols-[1fr_auto] gap-6 bg-[#111111]/90 border border-neutral-800 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(0,0,0,0.45)]"
            >
              {/* Left Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-black break-fix leading-tight">
                  {paper.title}
                </h3>

                <div className="mt-4 h-px w-full bg-neutral-800" />

                <p className="text-[#9ca3af] mt-4 break-fix leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Right Meta */}
              <div className="flex md:flex-col items-start gap-3 md:min-w-[160px]">
                <motion.span
                  initial={{
                    scale: 0.85,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.2 + idx * 0.08,
                    duration: 0.35,
                  }}
                  viewport={{ once: true }}
                  className="text-xs px-3 py-1 border border-[#00eaff] text-[#00eaff] uppercase tracking-[0.18em] rounded-full"
                >
                  {paper.status.replace("-", " ")}
                </motion.span>

                <Link
                  href={`/research/${paper.slug}`}
                  className="inline-flex items-center gap-2 text-[#00eaff] hover:text-white transition-colors duration-300"
                >
                  Read paper

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}