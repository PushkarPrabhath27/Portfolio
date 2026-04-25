"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionIntro } from "@/components/ui/SectionIntro";

export default function About() {
  const lines = [
    "I’m Pushkar, a B.Tech CSE student (2027) building full-stack products and AI systems that ship.",
    "I focus on reliable architecture, research-driven iteration, and measurable outcomes.",
    "Current focus includes practical AI systems, production software, and long-term product thinking.",
  ];

  const infoCards = [
    {
      label: "Location",
      value: "Hyderabad, India",
    },
    {
      label: "Education",
      value: "B.Tech CSE",
    },
    {
      label: "Availability",
      value:
        "Open to Internships / Research / Full-time",
    },
  ];

  return (
    <section
      id="about"
      className="relative section-spotlight-pink subtle-noise py-24 overflow-hidden"
    >
      <Container>
        <SectionIntro
          title="About / Story"
          subtitle="Building AI + systems with long-term product thinking and high engineering standards."
          sticker="personal brand"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          {/* Left Main Story Card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="panel-corners card-spotlight bg-[#111111]/90 border border-neutral-800 border-l-2 border-l-[#ff2d75] rounded-2xl p-8 space-y-5 text-[#9ca3af]"
          >
            {lines.map((line) => (
              <motion.p
                key={line}
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
                className="text-lg leading-relaxed break-fix"
              >
                {line}
              </motion.p>
            ))}

            <motion.blockquote
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
              className="border-l-2 border-[#ff2d75] pl-4 text-white/90 italic text-lg"
            >
              “Elegant systems are built with intent, not just speed.”
            </motion.blockquote>
          </motion.div>

          {/* Right Sticky Cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="space-y-5 lg:sticky lg:top-28"
          >
            {infoCards.map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 35,
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
                className="panel-corners card-spotlight bg-[#111111]/90 border border-neutral-800 rounded-xl p-5"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#9ca3af]">
                  {item.label}
                </p>

                <p className="mt-2 text-white font-semibold break-fix">
                  {item.value}
                </p>
              </motion.div>
            ))}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 35,
                },
                show: {
                  opacity: 1,
                  x: 0,
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