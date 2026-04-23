"use client";

import { MapPin, GraduationCap, Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/layout/Container";

interface AboutContentProps {
  certifications: Array<{ name: string; issuer: string }>;
}

export function AboutContent({ certifications }: AboutContentProps) {
  return (
    <Container className="py-12">
      <SectionHeader
        title="About"
        subtitle="The person behind the projects"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                I&apos;m a B.Tech student at{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  Amrita Vishwa Vidyapeetham
                </span>{" "}
                (graduating 2027), specializing in full-stack development and AI research.
                My focus is on building systems that handle real-world scale while advancing
                the state of the art in machine learning.
              </p>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                My engineering philosophy centers on{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  demonstrable results over claims
                </span>
                . I believe the best way to showcase capability is through working systems,
                documented research, and measurable outcomes. Every project I undertake is
                designed to solve real problems while pushing technical boundaries.
              </p>

              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Currently, I&apos;m focused on two research directions:{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  neural-symbolic systems
                </span>{" "}
                for compiler optimization and{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  self-supervised learning
                </span>{" "}
                for speech analysis.
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Research Interests
            </h3>
            <ul className="space-y-2">
              <li className="text-[var(--text-secondary)] flex items-start gap-2">
                <span className="text-[var(--accent-primary)] mt-1.5">•</span>
                Compiler optimization using learned cost models
              </li>
              <li className="text-[var(--text-secondary)] flex items-start gap-2">
                <span className="text-[var(--accent-primary)] mt-1.5">•</span>
                Zero-shot and few-shot learning for speech processing
              </li>
              <li className="text-[var(--text-secondary)] flex items-start gap-2">
                <span className="text-[var(--accent-primary)] mt-1.5">•</span>
                Cooperative dialogue systems and natural language generation
              </li>
              <li className="text-[var(--text-secondary)] flex items-start gap-2">
                <span className="text-[var(--accent-primary)] mt-1.5">•</span>
                Retrieval-augmented generation and knowledge integration
              </li>
            </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Education
            </h3>
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-[var(--accent-primary)] mt-0.5" />
              <div>
                <p className="font-medium text-[var(--text-primary)]">
                  B.Tech in Computer Science
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Amrita Vishwa Vidyapeetham
                </p>
                <p className="text-sm text-[var(--text-tertiary)]">Expected graduation: 2027</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Location
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[var(--accent-primary)] mt-0.5" />
              <div>
                <p className="font-medium text-[var(--text-primary)]">Hyderabad, India</p>
                <p className="text-sm text-[var(--text-secondary)]">Open to remote opportunities</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-[var(--accent-success)] mt-0.5" />
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">{cert.name}</p>
                    <p className="text-sm text-[var(--text-tertiary)]">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Button
            variant="outline"
            className="w-full"
            rightIcon={<ExternalLink className="h-4 w-4" />}
            onClick={() => window.open("https://github.com/PushkarPrabhath27", "_blank")}
          >
            View GitHub Profile
          </Button>
        </div>
      </div>
    </Container>
  );
}