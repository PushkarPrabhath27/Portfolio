"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { getFeaturedProjects, projects } from "@/lib/data/projects";

export default function Projects() {
  const [showAll, setShowAll] =
    useState(false);

  const featured =
    getFeaturedProjects();

  const items = showAll
    ? projects
    : featured;

  return (
    <section
      id="projects"
      className="relative section-spotlight-pink subtle-noise py-24 overflow-hidden"
    >
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Case-study style builds focused on production quality and measurable impact."
          sticker="selected projects"
        />

        <div className="space-y-8">
          {items.map(
            (project, idx) => (
              <SpotlightCard
                key={project.slug}
                delay={idx * 0.08}
                className="group bg-[#111111]/90 border border-neutral-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
              >
                <div
                  className={`grid md:grid-cols-2 ${
                    idx % 2
                      ? "md:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  {/* Visual Side */}
                  <div className="relative min-h-[260px] overflow-hidden bg-[linear-gradient(130deg,rgba(255,45,117,0.18),rgba(0,234,255,0.06))]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_35%)]" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(0,234,255,0.12),transparent_35%)]" />

                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                  </div>

                  {/* Content Side */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#9ca3af] mb-3">
                      Case Study
                    </p>

                    <h3 className="text-3xl md:text-4xl font-black break-fix leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-[#9ca3af] mt-4 break-fix leading-relaxed">
                      {
                        project.shortDescription
                      }
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.technologies
                        .slice(0, 5)
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
                      className="mt-7 inline-flex items-center gap-2 text-[#ff2d75] hover:text-white transition-colors duration-300"
                    >
                      Open project

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            )
          )}
        </div>

        {/* Toggle Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() =>
              setShowAll(
                (prev) => !prev
              )
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