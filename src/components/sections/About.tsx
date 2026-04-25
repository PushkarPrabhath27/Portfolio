"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionIntro } from "@/components/ui/SectionIntro";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
  },
  {
    name: "Azure Developer Associate",
    issuer: "Microsoft",
  },
];

export default function About() {
  const lines = [
    "I’m a B.Tech student at Amrita Vishwa Vidyapeetham (Class of 2027), focused on full-stack engineering and practical AI research.",
    "My work emphasizes production reliability, measurable outcomes, and readable system design.",
    "Current focus: neural-symbolic systems, speech intelligence, and retrieval-augmented workflows.",
  ];

  return (
    <section
      id="about"
      className="relative section-spotlight-pink subtle-noise py-24 overflow-hidden"
    >
      <Container>
        <SectionIntro
          title="About"
          subtitle="Engineering background, interests, and focus areas."
          sticker="available for work"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Main Card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="lg:col-span-2 panel-corners card-spotlight bg-[#111111]/90 border border-neutral-800 border-l-2 border-l-[#ff2d75] rounded-xl p-8 space-y-6 text-[#9ca3af]"
          >
            {lines.map((line) => (
              <motion.p
                key={line}
                className="break-fix text-lg leading-relaxed"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    filter: "blur(8px)",
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.14,
                },
              },
            }}
            className="space-y-6"
          >
            {/* Location */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 40,
                  filter: "blur(6px)",
                },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="panel-corners card-spotlight bg-[#111111]/90 border border-neutral-800 rounded-xl p-6"
            >
              <h3 className="font-semibold text-[#ff2d75] uppercase tracking-wider text-sm">
                Location
              </h3>

              <p className="text-white mt-3 text-xl font-medium">
                Hyderabad, India
              </p>

              <p className="text-[#9ca3af] mt-1 text-sm">
                Open to remote opportunities
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 40,
                  filter: "blur(6px)",
                },
                show: {
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="panel-corners card-spotlight bg-[#111111]/90 border border-neutral-800 rounded-xl p-6"
            >
              <h3 className="font-semibold text-[#ff2d75] uppercase tracking-wider text-sm">
                Certifications
              </h3>

              <ul className="mt-4 space-y-4 text-sm">
                {certifications.map((cert) => (
                  <li key={cert.name} className="break-fix">
                    <p className="text-white font-medium">{cert.name}</p>
                    <p className="text-[#9ca3af] mt-1">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 40,
                },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              <MagneticButton
                href="https://github.com/PushkarPrabhath27"
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-white text-white hover:bg-white hover:text-black rounded-xl shine-button"
              >
                View GitHub Profile
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}