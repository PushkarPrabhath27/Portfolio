"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, staggerItem } from "@/components/ui/StaggerGrid";
import { TiltCard } from "@/components/ui/TiltCard";
import { skillCategories } from "@/lib/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="relative section-spotlight-yellow pb-20">
      <Container>
        <SectionHeading title="Skills Arsenal" subtitle="Frontend, backend, AI/ML, infra and systems tooling used in production." sticker="skill ecosystem" />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={staggerItem}>
              <TiltCard className="panel-corners bg-[#111] border border-neutral-800 border-l-2 border-l-[#ffd500] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#ffd500] break-fix">{category.name}</h3>
                <ul className="mt-4 space-y-2 text-[#9ca3af]">
                  {category.skills.slice(0, 6).map((skill) => (
                    <li key={skill.name} className="text-sm break-fix">{skill.name}</li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerGrid>

        <div className="mt-10 overflow-hidden border border-white/10 rounded-full py-3 px-5">
          <motion.p animate={{ x: [0, -500] }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="whitespace-nowrap text-sm uppercase tracking-[0.22em] text-[#9ca3af]">
            React • Next.js • TypeScript • Python • PyTorch • Docker • PostgreSQL • Redis • Go • Node.js • React • Next.js • TypeScript
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
