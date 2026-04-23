import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { getProjectBySlug, projects } from "@/lib/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }
  
  return {
    title: `${project.title} | Pushkar Prabhath R`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      <Container className="py-12">
        <Link href="/#projects">
          <Button variant="ghost" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Projects
          </Button>
        </Link>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h1>
                <Badge variant={project.status === "production" ? "success" : project.status === "active" ? "info" : "warning"}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-xl text-[var(--text-secondary)]">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech} name={tech} />
              ))}
            </div>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Overview
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {project.longDescription}
              </p>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                The Problem
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {project.problem}
              </p>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Approach
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {project.approach}
              </p>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Key Technical Decisions
              </h2>
              <ul className="space-y-3">
                {project.keyDecisions.map((decision, idx) => (
                  <li key={idx} className="text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--accent-primary)] mt-1.5">•</span>
                    {decision}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Outcomes
              </h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--accent-success)] mt-1.5">•</span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            {project.metrics && project.metrics.length > 0 && (
              <Card>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Key Metrics
                </h3>
                <div className="space-y-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-3xl font-bold text-[var(--accent-success)]">
                        {metric.value}
                      </div>
                      <div className="text-sm text-[var(--text-tertiary)]">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            <Card>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Links
              </h3>
              <div className="space-y-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.links.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Research Paper
                  </a>
                )}
              </div>
            </Card>

            {otherProjects.length > 0 && (
              <Card>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Other Projects
                </h3>
                <div className="space-y-4">
                  {otherProjects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="block group"
                    >
                      <h4 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-sm text-[var(--text-tertiary)]">
                        {p.shortDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}