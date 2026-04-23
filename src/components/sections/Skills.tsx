"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { skillCategories } from "@/lib/data/skills";

const cardRotations = [-3, 2, -1.5, 3, -2, 1.5];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden"
      style={{ transform: "skewY(2deg)" }}
    >
      <div className="absolute inset-0 halftone noise bg-black" />
      
      <Container className="relative" style={{ transform: "skewY(-2deg)" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="mb-20 translate-x-8"
        >
          <h2
            className="text-6xl md:text-8xl font-black uppercase rgb cmyk-shadow glitch"
            data-text="SKILLS"
          >
            SKILLS
          </h2>
          <p className="text-lg uppercase tracking-[0.3em] text-white/60 mt-4">
            Technical Arsenal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 100, rotate: cardRotations[index % cardRotations.length] }}
              whileInView={{ opacity: 1, y: 0, rotate: cardRotations[index % cardRotations.length] }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.68, -0.55, 0.265, 1.55]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="relative p-6 bg-black border-4 border-white transition-all duration-100"
                style={{
                  boxShadow: `4px 4px 0 ${index % 2 === 0 ? "#ff2d75" : "#00f0ff"}`,
                  background: "linear-gradient(135deg, rgba(255, 45, 117, 0.15) 0%, rgba(106, 0, 255, 0.15) 100%)"
                }}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              >
                <div className="halftone absolute inset-0 opacity-40" />

                <div className="relative z-10">
                  <div className="text-3xl font-black text-[#ff2d75] mb-4 glitch-text">
                    {`</>`}
                  </div>

                  <h3
                    className={`
                      text-xl font-black uppercase mb-6 transition-all duration-100
                      ${index % 3 === 0 ? "text-[#00f0ff]" : index % 3 === 1 ? "text-[#ff2d75]" : "text-[#ffd500]"}
                    `}
                  >
                    {category.name}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.slice(0, 5).map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="w-2 h-2 bg-white group-hover:bg-[#00f0ff] transition-colors duration-100"
                          style={{ transform: `rotate(${skillIndex * 45}deg)` }}
                        />
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-100">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-white/50"
                />
                <div
                  className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-white/50"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>

      <div
        className="absolute top-0 left-0 w-full h-32"
        style={{
          background: "linear-gradient(180deg, #000 0%, transparent 100%)"
        }}
      />
    </section>
  );
}