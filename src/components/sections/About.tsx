"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function About() {
  return (
    <section id="about" className="relative section-spotlight-pink pb-20">
      <Container>
        <SectionHeading title="About / Story" subtitle="Building AI + systems with long-term product thinking and high engineering standards." sticker="personal brand" />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="panel-corners bg-[#111] border border-neutral-800 rounded-2xl p-8 space-y-4 text-[#9ca3af]">
            <p>I’m Pushkar, a B.Tech CSE student (2027) building full-stack products and AI systems that ship.</p>
            <p>I focus on reliable architecture, research-driven iteration, and measurable outcomes.</p>
            <blockquote className="border-l-2 border-[#ff2d75] pl-4 text-white/90 italic">“Elegant systems are built with intent, not just speed.”</blockquote>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }} className="space-y-5 lg:sticky lg:top-28">
            {[
              ["Hyderabad, India", "Location"],
              ["B.Tech CSE", "Education"],
              ["Open to Internships / Research / Full-time", "Availability"],
            ].map(([value, label]) => (
              <div key={label} className="panel-corners bg-[#111] border border-neutral-800 rounded-xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">{label}</p>
                <p className="mt-2 text-white font-semibold break-fix">{value}</p>
              </div>
            ))}

            <MagneticButton href="https://github.com/PushkarPrabhath27" className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black shine-button">
              GitHub
            </MagneticButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
