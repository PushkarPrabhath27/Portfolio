"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { skillCategories } from "@/lib/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative section-spotlight-yellow">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold break-fix">Skills</h2>
          <p className="text-[#9ca3af] mt-3">Core tools and technologies I use in production.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-neutral-800 border-l-2 border-l-[#ffd500] rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-[#ffd500] break-fix">{category.name}</h3>
              <ul className="mt-4 space-y-2 text-[#9ca3af]">
                {category.skills.slice(0, 6).map((skill) => (
                  <li key={skill.name} className="text-sm break-fix">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
