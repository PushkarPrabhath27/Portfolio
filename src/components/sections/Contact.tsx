"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

const contactActions = [
  { icon: Mail, label: "Email Me", value: "pushkar.prabhath@gmail.com", href: "mailto:pushkar.prabhath@gmail.com", accent: "#ff2d75" },
  { icon: Github, label: "GitHub", value: "@PushkarPrabhath27", href: "https://github.com/PushkarPrabhath27", accent: "#00eaff" },
  { icon: Linkedin, label: "LinkedIn", value: "Pushkar Prabhath", href: "https://linkedin.com/in/pushkar-prabhath", accent: "#8b5cf6" },
  { icon: FileText, label: "Resume", value: "Download CV", href: "/resume.pdf", accent: "#ffffff" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative section-spotlight-cyan pb-28">
      <Container>
        <SectionHeading
          title="LET’S BUILD SOMETHING SERIOUS."
          subtitle="Open to internships, research, product engineering, and AI opportunities."
          sticker="contact cta"
        />

        <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl text-[#9ca3af] text-lg mb-10">
          If you are building ambitious products, AI systems, or high-impact research workflows, let&apos;s connect.
        </motion.p>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactActions.map((action) => (
            <SpotlightCard
              key={action.label}
              className="bg-[#111] border border-neutral-800 rounded-xl p-6"
            >
              <a href={action.href} target={action.href.startsWith("mailto:") || action.href.startsWith("/") ? undefined : "_blank"} rel={action.href.startsWith("mailto:") || action.href.startsWith("/") ? undefined : "noopener noreferrer"} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">{action.label}</p>
                  <p className="text-xl font-bold break-fix mt-2" style={{ color: action.accent }}>{action.value}</p>
                </div>
                <action.icon className="h-6 w-6" style={{ color: action.accent }} />
              </a>
            </SpotlightCard>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}
