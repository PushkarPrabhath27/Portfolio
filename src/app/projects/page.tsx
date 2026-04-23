import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data/projects";

const statusVariant = {
  production: "success" as const,
  active: "info" as const,
  research: "warning" as const,
};

const statusLabel = {
  production: "Production",
  active: "Active",
  research: "Research",
};

export const metadata = {
  title: "Projects | Pushkar Prabhath R",
  description: "A collection of projects showcasing full-stack development, AI research, and scalable system design.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <Container className="py-12">
        <SectionHeader
          title="All Projects"
          subtitle="Complete collection of projects spanning production systems and research"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className="h-full group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant={statusVariant[project.status]}>
                    {statusLabel[project.status]}
                  </Badge>
                </div>

                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Tag key={tech} name={tech} />
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                  {project.links.github && (
                    <span className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
                      <Github className="h-3 w-3" />
                      Code
                    </span>
                  )}
                  {project.links.live && (
                    <span className="flex items-center gap-1 text-xs text-[var(--text-tertiary)]">
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </span>
                  )}
                  {project.featured && (
                    <span className="ml-auto text-xs px-2 py-0.5 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] rounded-full">
                      Featured
                    </span>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}