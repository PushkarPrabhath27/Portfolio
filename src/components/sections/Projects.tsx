"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { getFeaturedProjects, projects } from "@/lib/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = getFeaturedProjects();
  const items = showAll ? projects : featured;

  return (
    <section id="projects" className="relative section-spotlight-pink">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold break-fix leading-tight">Projects</h2>
          <p className="text-[#9ca3af] mt-3">Selected production and research projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.06 }}
              viewport={{ once: true }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
              }}
              className="card-spotlight bg-[#111] border border-neutral-800 border-l-2 border-l-[#ff2d75] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <h3 className="text-2xl font-bold break-fix">{project.title}</h3>
              <p className="text-[#9ca3af] mt-3 break-fix">{project.shortDescription}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 border border-neutral-700 text-[#9ca3af]">
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-block mt-6 text-sm text-[#ff2d75] hover:text-white break-fix"
              >
                View details →
              </Link>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-10 px-6 py-3 border border-white text-white hover:bg-white hover:text-black"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </Container>
    </section>
  );
}
