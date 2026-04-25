"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionIntro } from "@/components/ui/SectionIntro";

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Azure Developer Associate", issuer: "Microsoft" },
];

export default function About() {
  return (
    <section id="about" className="relative section-spotlight-pink">
      <Container>
        <SectionIntro title="About" subtitle="Engineering background, interests, and focus areas." sticker="available for work" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="lg:col-span-2 panel-corners bg-[#111] border border-neutral-800 border-l-2 border-l-[#ff2d75] rounded-xl p-6 space-y-4 text-[#9ca3af]"
          >
            {["I’m a B.Tech student at Amrita Vishwa Vidyapeetham (Class of 2027), focused on full-stack engineering and practical AI research.", "My work emphasizes production reliability, measurable outcomes, and readable system design.", "Current focus: neural-symbolic systems, speech intelligence, and retrieval-augmented workflows."].map((line) => (
              <motion.p key={line} className="break-fix" variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}>
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="panel-corners bg-[#111] border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-[#ff2d75]">Location</h3>
              <p className="text-[#9ca3af] mt-2">Hyderabad, India</p>
            </div>

            <div className="panel-corners bg-[#111] border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-[#ff2d75]">Certifications</h3>
              <ul className="mt-2 space-y-2 text-[#9ca3af] text-sm">
                {certifications.map((cert) => (
                  <li key={cert.name} className="break-fix">
                    {cert.name} — {cert.issuer}
                  </li>
                ))}
              </ul>
            </div>

            <MagneticButton
              href="https://github.com/PushkarPrabhath27"
              className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black shine-button"
            >
              View GitHub Profile
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
