"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { projects, getFeaturedProjects } from "@/lib/data/projects";

const statusVariant = {
  production: "success" as const,
  active: "info" as const,
  research: "warning" as const,
};

const statusLabel = {
  production: "PRODUCTION",
  active: "ACTIVE",
  research: "RESEARCH",
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const rotations = [-1.5, 1.2, -0.8, 1.5, -1.2, 0.9];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.68, -0.55, 0.265, 1.55]
      }}
      viewport={{ once: true }}
      className={`relative group cursor-pointer transition-transform duration-100`}
      style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`
          relative p-8 bg-black
          border-4 border-white
          shadow-[4px_4px_0_#ff2d75,-4px_-4px_0_#00f0ff]
          transition-all duration-100
          ${isHovered ? "scale-105 rotate-[1deg]" : ""}
        `}
        style={{
          background: "linear-gradient(135deg, rgba(255, 45, 117, 0.2) 0%, rgba(106, 0, 255, 0.2) 100%)"
        }}
      >
        <div className="halftone absolute inset-0 opacity-30" />

        <div
          className={`
            absolute inset-0 pointer-events-none transition-opacity duration-100
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
          style={{
            background: "linear-gradient(135deg, rgba(255, 45, 117, 0.3) 0%, transparent 50%, rgba(0, 240, 255, 0.3) 100%)"
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <motion.div
              animate={isHovered ? { x: [0, -3, 3, 0] } : {}}
              transition={{ duration: 0.2, repeat: Infinity }}
            >
              <Badge variant={statusVariant[project.status]}>
                {statusLabel[project.status]}
              </Badge>
            </motion.div>

            <div className="flex gap-2">
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-white bg-black hover:bg-[#ff2d75] transition-colors duration-100"
                  whileHover={{ rotate: [-5, 5, 0] }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              {project.links.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-white bg-black hover:bg-[#00f0ff] transition-colors duration-100"
                  whileHover={{ rotate: [5, -5, 0] }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          <h3
            className={`
              text-2xl md:text-3xl font-black uppercase mb-3 transition-all duration-100
              ${isHovered ? "glitch rgb" : ""}
            `}
            data-text={project.title}
          >
            {project.title}
          </h3>

          <p className="text-sm uppercase tracking-wider text-white/60 mb-4">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="px-3 py-1 text-xs font-bold uppercase border border-white/30 bg-black/50"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 text-xs font-bold uppercase border border-[#ffd500] text-[#ffd500]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.longDescription}
          </p>

          <motion.a
            href={`/projects/${project.slug}`}
            className={`
              inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm
              transition-all duration-100
              ${isHovered ? "text-[#00f0ff] glitch" : "text-white"}
            `}
            whileHover={{ x: [0, 5, 0] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          >
            <span>VIEW DETAILS</span>
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div
          className={`
            absolute top-0 left-0 right-0 h-2 transition-all duration-100
            ${isHovered ? "w-full" : "w-0"}
          `}
          style={{ background: "linear-gradient(90deg, #ff2d75, #00f0ff, #ffd500)" }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = getFeaturedProjects();
  const displayProjects = showAll ? projects : featuredProjects;

  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
      style={{ transform: "skewY(-2deg)" }}
    >
      <div className="absolute inset-0 halftone noise" />

      <Container className="relative" style={{ transform: "skewY(2deg)" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mb-20 -translate-x-8"
        >
          <h2
            className="text-6xl md:text-8xl font-black uppercase rgb cmyk-shadow glitch"
            data-text="PROJECTS"
          >
            PROJECTS
          </h2>
          <p className="text-lg uppercase tracking-[0.3em] text-white/60 mt-4">
            Featured Work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="comic-button group"
            whileHover={{ scale: 1.05, rotate: [-2, 2, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">
              {showAll ? "SHOW LESS" : "VIEW ALL PROJECTS"}
            </span>
          </motion.button>
        </motion.div>
      </Container>

      <div
        className="absolute bottom-0 left-0 w-64 h-64 border-4 border-[#ff2d75] opacity-20"
        style={{ transform: "rotate(15deg) translate(-50px, 50px)" }}
      />
      <div
        className="absolute top-1/4 right-0 w-48 h-48 border-4 border-[#00f0ff] opacity-20"
        style={{ transform: "rotate(-20deg) translate(30px, -30px)" }}
      />
    </section>
  );
}