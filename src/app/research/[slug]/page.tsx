import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { getResearchBySlug, researchPapers } from "@/lib/data/research";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return researchPapers.map((paper) => ({
    slug: paper.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const paper = getResearchBySlug(slug);
  
  if (!paper) {
    return { title: "Research Not Found" };
  }
  
  return {
    title: `${paper.title} | Pushkar Prabhath R`,
    description: paper.abstract.slice(0, 160),
  };
}

const statusConfig = {
  "in-progress": { variant: "warning" as const, label: "In Progress" },
  "under-review": { variant: "info" as const, label: "Under Review" },
  "published": { variant: "success" as const, label: "Published" },
};

export default async function ResearchPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = getResearchBySlug(slug);
  
  if (!paper) {
    notFound();
  }

  const status = statusConfig[paper.status];

  return (
    <div className="min-h-screen pt-20">
      <Container className="py-12">
        <Link href="/#research">
          <Button variant="ghost" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            Back to Research
          </Button>
        </Link>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  {paper.title}
                </h1>
                <Badge variant={status.variant}>
                  {status.label}
                </Badge>
              </div>
              
              {paper.coauthors.length > 0 && (
                <p className="text-sm text-[var(--text-tertiary)] mb-4">
                  Co-authors: {paper.coauthors.join(", ")}
                </p>
              )}
              
              <p className="text-sm text-[var(--text-tertiary)]">
                Published: {new Date(paper.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Abstract
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {paper.abstract}
              </p>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Methodology
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {paper.methodology}
              </p>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Key Contributions
              </h2>
              <ul className="space-y-3">
                {paper.keyContributions.map((contribution, idx) => (
                  <li key={idx} className="text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-[var(--accent-primary)] mt-1.5">•</span>
                    {contribution}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Citation
              </h2>
              <p className="text-sm text-[var(--text-secondary)] font-mono bg-[var(--background-secondary)] p-4 rounded-lg">
                Pushkar Prabhath R{paper.coauthors.length > 0 && `, ${paper.coauthors.join(", ")}`}. 
                ({new Date(paper.date).getFullYear()}). {paper.title}. 
                {status.label === "Published" ? " Published." : status.label === "Under Review" ? " Under review." : " In progress."}
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Results
              </h3>
              <div className="space-y-6">
                {paper.results.map((result, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-bold text-[var(--accent-success)]">
                      {result.value}
                    </div>
                    <div className="text-sm text-[var(--text-primary)] font-medium">
                      {result.metric}
                    </div>
                    {result.comparison && (
                      <div className="text-xs text-[var(--text-tertiary)]">
                        {result.comparison}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Resources
              </h3>
              <div className="space-y-3">
                {paper.links.paper && (
                  <a
                    href={paper.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    Research Paper
                  </a>
                )}
                {paper.links.github && (
                  <a
                    href={paper.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Implementation
                  </a>
                )}
                {paper.links.huggingface && (
                  <a
                    href={paper.links.huggingface}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Models on HuggingFace
                  </a>
                )}
                {paper.links.demo && (
                  <a
                    href={paper.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}