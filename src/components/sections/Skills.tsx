"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { skillCategories } from "@/lib/data/skills";
import { StaggerGrid, staggerItem } from "@/components/ui/StaggerGrid";

export default function Skills() {
  return (
    <section id="skills" className="relative section-spotlight-yellow">
      <Container>
        <SectionIntro title="Skills" subtitle="Core tools and technologies I use in production." sticker="full stack + ai" />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              variants={staggerItem}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
                const y = ((event.clientY - rect.top) / rect.height - 0.5) * 4;
                event.currentTarget.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
              }}
              className="panel-corners bg-[#111] border border-neutral-800 border-l-2 border-l-[#ffd500] rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-[#ffd500] break-fix">{category.name}</h3>
              <ul className="mt-4 space-y-2 text-[#9ca3af]">
                {category.skills.slice(0, 6).map((skill) => (
                  <li key={skill.name} className="text-sm break-fix">
                    {skill.name}
                  </li>
                ))}
              </ul>
              <span className="sticker mt-4 inline-block" style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}>
                panel {idx + 1}
              </span>
            </motion.div>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}
