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
    <section id="projects" className="relative section-spotlight-pink">
      <Container>
        <SectionIntro title="Projects" subtitle="Selected production and research projects." sticker="selected projects" />

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((project) => (
            <SpotlightCard
              key={project.slug}
              className="bg-[#111] border border-neutral-800 border-l-2 border-l-[#ff2d75] rounded-xl p-6 hover:shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
            >
              <h3 className="text-2xl font-bold break-fix group">
                {project.title}
                <span className="block h-px w-0 bg-[#ff2d75] group-hover:w-full" />
              </h3>
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
                className="inline-flex items-center gap-2 mt-6 text-sm text-[#ff2d75] hover:text-white break-fix"
              >
                View details <span aria-hidden>→</span>
              </Link>
            </SpotlightCard>
          ))}
        </StaggerGrid>

        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-10 px-6 py-3 border border-white text-white hover:bg-white hover:text-black shine-button"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </Container>
    </section>
  );
}
