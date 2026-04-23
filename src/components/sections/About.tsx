"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Azure Developer Associate", issuer: "Microsoft" },
];

export default function About() {
  return (
    <section id="about" className="relative section-spotlight-pink">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold break-fix leading-tight">About</h2>
          <p className="text-[#9ca3af] mt-3">Engineering background, interests, and focus areas.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#111] border border-neutral-800 border-l-2 border-l-[#ff2d75] rounded-xl p-6 space-y-4 text-[#9ca3af]"
          >
            <p className="break-fix">
              I&apos;m a B.Tech student at Amrita Vishwa Vidyapeetham (Class of 2027), focused on full-stack
              engineering and practical AI research.
            </p>
            <p className="break-fix">
              My work emphasizes production reliability, measurable outcomes, and readable system design.
            </p>
            <p className="break-fix">
              Current focus: neural-symbolic systems, speech intelligence, and retrieval-augmented workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#111] border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-[#ff2d75]">Location</h3>
              <p className="text-[#9ca3af] mt-2">Hyderabad, India</p>
            </div>

            <div className="bg-[#111] border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-[#ff2d75]">Certifications</h3>
              <ul className="mt-2 space-y-2 text-[#9ca3af] text-sm">
                {certifications.map((cert) => (
                  <li key={cert.name} className="break-fix">{cert.name} — {cert.issuer}</li>
                ))}
              </ul>
            </div>

            <Link
              href="https://github.com/PushkarPrabhath27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black"
            >
              View GitHub Profile
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
