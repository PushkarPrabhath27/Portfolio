import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { researchPapers } from "@/lib/data/research";

const statusConfig = {
  "in-progress": { variant: "warning" as const, label: "In Progress" },
  "under-review": { variant: "info" as const, label: "Under Review" },
  "published": { variant: "success" as const, label: "Published" },
};

export const metadata = {
  title: "Research | Pushkar Prabhath R",
  description: "Research contributions in AI, compiler optimization, and speech processing.",
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-20">
      <Container className="py-12">
        <SectionHeader
          title="Research & Publications"
          subtitle="Academic contributions and ongoing research projects"
        />

        <div className="space-y-6">
          {researchPapers.map((paper) => {
            const status = statusConfig[paper.status];
            return (
              <Link key={paper.slug} href={`/research/${paper.slug}`}>
                <Card className="group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors pr-4">
                      {paper.title}
                    </h3>
                    <Badge variant={status.variant}>
                      {status.label}
                    </Badge>
                  </div>

                  <p className="text-[var(--text-secondary)] mb-4">
                    {paper.abstract}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--border)]">
                    {paper.results.slice(0, 2).map((result, idx) => (
                      <div key={idx}>
                        <span className="text-lg font-bold text-[var(--accent-success)]">
                          {result.value}
                        </span>
                        <span className="text-sm text-[var(--text-tertiary)] ml-2">
                          {result.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}