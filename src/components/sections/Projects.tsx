"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { getFeaturedProjects, projects } from "@/lib/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = getFeaturedProjects();
  const items = showAll ? projects : featured;

  return (
    <section id="projects" className="relative section-spotlight-pink pb-20">
      <Container>
        <SectionHeading title="Featured Projects" subtitle="Case-study style builds focused on production quality and measurable impact." sticker="selected projects" />

        <div className="space-y-8">
          {items.map((project, idx) => (
            <SpotlightCard key={project.slug} className="bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden">
              <div className={`grid md:grid-cols-2 ${idx % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="min-h-[240px] bg-[linear-gradient(130deg,rgba(255,45,117,0.18),rgba(0,234,255,0.06))]" />
                <div className="p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af] mb-2">Case Study</p>
                  <h3 className="text-3xl font-black break-fix">{project.title}</h3>
                  <p className="text-[#9ca3af] mt-3 break-fix">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 border border-neutral-700 text-[#9ca3af]">{tech}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-[#ff2d75] hover:text-white">
                    Open project <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <button onClick={() => setShowAll((prev) => !prev)} className="mt-10 px-6 py-3 border border-white text-white hover:bg-white hover:text-black shine-button">
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </Container>
    </section>
  );
}
