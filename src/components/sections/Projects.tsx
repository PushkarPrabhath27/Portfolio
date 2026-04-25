"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { getFeaturedProjects, projects } from "@/lib/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured = getFeaturedProjects();
  const items = showAll ? projects : featured;

  return (
    <section
      id="projects"
      className="relative section-spotlight-pink subtle-noise py-24 overflow-hidden"
    >
      <Container>
        <SectionIntro
          title="Projects"
          subtitle="Selected production and research projects."
          sticker="selected projects"
        />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((project, index) => (
            <SpotlightCard
              key={project.slug}
              delay={index * 0.08}
              className="group bg-[#111111]/90 border border-neutral-800 border-l-2 border-l-[#ff2d75] rounded-xl p-7 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
            >
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold break-fix leading-tight">
                {project.title}

                <span className="mt-2 block h-px w-0 bg-[#ff2d75] transition-all duration-500 group-hover:w-full" />
              </h3>

              {/* Description */}
              <p className="text-[#9ca3af] mt-4 break-fix leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies
                  .slice(0, 4)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-neutral-700 text-[#9ca3af] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              {/* CTA */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 mt-7 text-sm text-[#ff2d75] hover:text-white break-fix transition-colors duration-300"
              >
                View details
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </SpotlightCard>
          ))}
        </StaggerGrid>

        {/* Toggle Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() =>
              setShowAll((prev) => !prev)
            }
            className="px-7 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 shine-button"
          >
            {showAll
              ? "Show Less"
              : "View All Projects"}
          </button>
        </div>
      </Container>
    </section>
  );
}