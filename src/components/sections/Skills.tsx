"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerGrid,
  staggerItem,
} from "@/components/ui/StaggerGrid";
import { TiltCard } from "@/components/ui/TiltCard";
import { skillCategories } from "@/lib/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative section-spotlight-yellow subtle-noise py-24 overflow-hidden"
    >
      <Container>
        <SectionHeading
          title="Skills Arsenal"
          subtitle="Frontend, backend, AI/ML, infra and systems tooling used in production."
          sticker="skill ecosystem"
        />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(
            (category, idx) => (
              <motion.div
                key={category.name}
                variants={
                  staggerItem
                }
              >
                <TiltCard className="group panel-corners card-spotlight bg-[#111111]/90 border border-neutral-800 border-l-2 border-l-[#ffd500] rounded-xl p-7 hover:shadow-[0_22px_45px_rgba(0,0,0,0.45)]">
                  {/* Heading */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#ffd500] break-fix leading-tight">
                    {category.name}
                  </h3>

                  {/* Divider */}
                  <div className="mt-4 h-px w-full bg-neutral-800" />

                  {/* Skills */}
                  <ul className="mt-5 space-y-3 text-[#9ca3af]">
                    {category.skills
                      .slice(0, 6)
                      .map(
                        (
                          skill,
                          skillIndex
                        ) => (
                          <motion.li
                            key={
                              skill.name
                            }
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              delay:
                                idx *
                                  0.05 +
                                skillIndex *
                                  0.04,
                            }}
                            viewport={{
                              once: true,
                            }}
                            className="text-sm break-fix flex items-center gap-2"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#ffd500] shrink-0" />
                            {
                              skill.name
                            }
                          </motion.li>
                        )
                      )}
                  </ul>

                  {/* Sticker */}
                  <span
                    className="sticker mt-6 inline-block"
                    style={{
                      transform: `rotate(${
                        idx % 2 ===
                        0
                          ? -2
                          : 2
                      }deg)`,
                    }}
                  >
                    panel {idx + 1}
                  </span>

                  {/* Accent line */}
                  <div className="mt-5 h-px w-0 bg-[#ffd500] transition-all duration-500 group-hover:w-full" />
                </TiltCard>
              </motion.div>
            )
          )}
        </StaggerGrid>

        {/* Tech Marquee */}
        <div className="mt-12 overflow-hidden border border-white/10 rounded-full py-3 px-5 bg-white/[0.02]">
          <motion.p
            animate={{
              x: [
                0,
                -600,
              ],
            }}
            transition={{
              duration: 18,
              repeat:
                Infinity,
              ease: "linear",
            }}
            className="whitespace-nowrap text-sm uppercase tracking-[0.22em] text-[#9ca3af]"
          >
            React • Next.js •
            TypeScript • Python •
            PyTorch • Docker •
            PostgreSQL • Redis •
            Go • Node.js • React •
            Next.js • TypeScript •
            Python • PyTorch
          </motion.p>
        </div>
      </Container>
    </section>
  );
}