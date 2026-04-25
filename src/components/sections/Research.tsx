"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { researchPapers } from "@/lib/data/research";

export default function Research() {
  return (
    <section id="research" className="relative section-spotlight-cyan">
      <Container>
        <SectionIntro title="Research" subtitle="Publications and ongoing research efforts." sticker="built with intent" />

        <div className="grid grid-cols-1 gap-8">
          {researchPapers.map((paper, idx) => (
            <motion.div
              key={paper.slug}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="panel-corners bg-[#111] border border-neutral-800 border-l-2 border-l-[#00eaff] rounded-xl p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-bold break-fix">{paper.title}</h3>
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                  viewport={{ once: true }}
                  className="text-xs px-2 py-1 border border-[#00eaff] text-[#00eaff] uppercase"
                >
                  {paper.status.replace("-", " ")}
                </motion.span>
              </div>

              <p className="text-[#9ca3af] mt-3 break-fix">{paper.abstract}</p>

              <Link href={`/research/${paper.slug}`} className="text-[#00eaff] mt-4 inline-flex items-center gap-2 hover:text-white">
                Read paper <span aria-hidden>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
