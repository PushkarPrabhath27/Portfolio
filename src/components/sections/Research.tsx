"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { researchPapers } from "@/lib/data/research";

export default function Research() {
  return (
    <section id="research" className="relative section-spotlight-cyan pb-20">
      <Container>
        <SectionHeading title="Research Highlights" subtitle="Editorial snapshots of active and published work across AI systems and language research." sticker="research" />

        <div className="space-y-6">
          {researchPapers.map((paper, idx) => (
            <motion.article key={paper.slug} initial={{ opacity: 0, x: idx % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: idx * 0.08 }} viewport={{ once: true }} className="panel-corners grid md:grid-cols-[1fr_auto] gap-6 bg-[#111] border border-neutral-800 rounded-2xl p-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-black break-fix">{paper.title}</h3>
                <p className="text-[#9ca3af] mt-3 break-fix">{paper.abstract}</p>
              </div>
              <div className="flex md:flex-col items-start gap-3">
                <motion.span initial={{ scale: 0.85, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 + idx * 0.08 }} viewport={{ once: true }} className="text-xs px-2 py-1 border border-[#00eaff] text-[#00eaff] uppercase">
                  {paper.status.replace("-", " ")}
                </motion.span>
                <Link href={`/research/${paper.slug}`} className="inline-flex items-center gap-2 text-[#00eaff] hover:text-white">
                  Read paper <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
