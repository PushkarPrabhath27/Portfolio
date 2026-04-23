"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { researchPapers } from "@/lib/data/research";

export default function Research() {
  return (
    <section id="research" className="relative section-spotlight-cyan">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold break-fix leading-tight">Research</h2>
          <p className="text-[#9ca3af] mt-3">Publications and ongoing research efforts.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {researchPapers.map((paper, idx) => (
            <motion.div
              key={paper.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-neutral-800 border-l-2 border-l-[#00f0ff] rounded-xl p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-bold break-fix">{paper.title}</h3>
                <span className="text-xs px-2 py-1 border border-[#00f0ff] text-[#00f0ff] uppercase">
                  {paper.status.replace("-", " ")}
                </span>
              </div>

              <p className="text-[#9ca3af] mt-3 break-fix">{paper.abstract}</p>

              <Link href={`/research/${paper.slug}`} className="text-[#00f0ff] mt-4 inline-block">
                Read paper →
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
