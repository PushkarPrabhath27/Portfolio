"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import {
  Mail,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

const contactActions = [
  {
    icon: Mail,
    label: "Email Me",
    value: "pushkar.prabhath@gmail.com",
    href: "mailto:pushkar.prabhath@gmail.com",
    accent: "#ff2d75",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@PushkarPrabhath27",
    href: "https://github.com/PushkarPrabhath27",
    accent: "#00eaff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Pushkar Prabhath",
    href: "https://linkedin.com/in/pushkar-prabhath",
    accent: "#8b5cf6",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download CV",
    href: "/resume.pdf",
    accent: "#ffffff",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative section-spotlight-cyan subtle-noise py-24 overflow-hidden"
    >
      <Container>
        <SectionIntro
          title="LET’S BUILD SOMETHING SERIOUS."
          subtitle="Open to internships, research, product engineering, and AI opportunities."
          sticker="contact cta"
        />

        <motion.p
          initial={{
            opacity: 0,
            y: 24,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="max-w-3xl text-[#9ca3af] text-lg leading-relaxed mb-10 break-fix"
        >
          If you are building ambitious products, AI systems, or
          high-impact research workflows, let&apos;s connect.
        </motion.p>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactActions.map((action, index) => (
            <SpotlightCard
              key={action.label}
              delay={index * 0.08}
              className="group bg-[#111111]/90 border border-neutral-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
            >
              <a
                href={action.href}
                target={
                  action.href.startsWith("mailto:") ||
                  action.href.startsWith("/")
                    ? undefined
                    : "_blank"
                }
                rel={
                  action.href.startsWith("mailto:") ||
                  action.href.startsWith("/")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#9ca3af]">
                    {action.label}
                  </p>

                  <p
                    className="text-xl md:text-2xl font-bold break-fix mt-2 transition-colors duration-300 group-hover:text-white"
                    style={{
                      color: action.accent,
                    }}
                  >
                    {action.value}
                  </p>
                </div>

                <action.icon
                  className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    color: action.accent,
                  }}
                />
              </a>
            </SpotlightCard>
          ))}
        </StaggerGrid>
      </Container>
    </section>
  );
}