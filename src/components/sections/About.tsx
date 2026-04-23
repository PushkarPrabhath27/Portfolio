"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MapPin, GraduationCap, Award } from "lucide-react";

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Azure Developer Associate", issuer: "Microsoft" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
      style={{ transform: "skewY(-2deg)" }}
    >
      <div className="absolute inset-0 halftone noise" />
      
      <Container className="relative" style={{ transform: "skewY(2deg)" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="mb-20 translate-x-12"
        >
          <h2
            className="text-6xl md:text-8xl font-black uppercase rgb cmyk-shadow glitch"
            data-text="ABOUT"
          >
            ABOUT
          </h2>
          <p className="text-lg uppercase tracking-[0.3em] text-white/60 mt-4">
            The Person Behind The Projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative p-8 bg-black border-4 border-white"
              style={{ boxShadow: "6px 6px 0 #00f0ff" }}
            >
              <div className="halftone absolute inset-0 opacity-30" />

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I&apos;m a B.Tech student at{" "}
                <span className="text-[#00f0ff] font-black">AMRITA VISHWA VIDYAPEETHAM</span>
                {" "}(graduating 2027), specializing in full-stack development and AI research.
                My focus is on building systems that handle real-world scale while advancing
                the state of the art in machine learning.
              </p>

              <p className="text-lg text-white/80 leading-relaxed mb-6">
                My engineering philosophy centers on{" "}
                <span className="text-[#ff2d75] font-black">DEMONSTRABLE RESULTS</span>.
                I believe the best way to showcase capability is through working systems,
                documented research, and measurable outcomes.
              </p>

              <p className="text-lg text-white/80 leading-relaxed">
                Currently focused on{" "}
                <span className="text-[#ffd500] font-black">NEURAL-SYMBOLIC SYSTEMS</span>
                {" "}and{" "}
                <span className="text-[#6a00ff] font-black">SELF-SUPERVISED LEARNING</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50, rotate: 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 bg-black border-4 border-white"
              style={{ boxShadow: "6px 6px 0 #ff2d75" }}
            >
              <div className="halftone absolute inset-0 opacity-20" />

              <h3 className="text-xl font-black uppercase mb-6 text-[#ff2d75]">
                Research Interests
              </h3>
              <ul className="space-y-4">
                {[
                  "Compiler optimization using learned cost models",
                  "Zero-shot and few-shot learning for speech processing",
                  "Cooperative dialogue systems and NLG",
                  "Retrieval-augmented generation"
                ].map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <span className="w-3 h-3 bg-[#ff2d75] rotate-45" />
                    <span className="text-white/80">{interest}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="space-y-6" style={{ transform: "rotate(1deg)" }}>
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative p-6 bg-black border-4 border-white"
              style={{ boxShadow: "4px 4px 0 #ffd500" }}
            >
              <div className="halftone absolute inset-0 opacity-20" />

              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-[#00f0ff]" />
                <h3 className="text-lg font-black uppercase">Education</h3>
              </div>
              <div className="pl-9">
                <p className="font-black text-white">B.TECH IN CS</p>
                <p className="text-sm text-white/60">Amrita Vishwa Vidyapeetham</p>
                <p className="text-xs text-white/40 mt-1">CLASS OF 2027</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: -1.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 bg-black border-4 border-white"
              style={{ boxShadow: "4px 4px 0 #ff2d75" }}
            >
              <div className="halftone absolute inset-0 opacity-20" />

              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#ff2d75]" />
                <h3 className="text-lg font-black uppercase">Location</h3>
              </div>
              <div className="pl-9">
                <p className="font-black text-white">HYDERABAD, INDIA</p>
                <p className="text-sm text-white/60">Open to remote</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 1.5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 bg-black border-4 border-white"
              style={{ boxShadow: "4px 4px 0 #6a00ff" }}
            >
              <div className="halftone absolute inset-0 opacity-20" />

              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#ffd500]" />
                <h3 className="text-lg font-black uppercase">Certifications</h3>
              </div>
              <div className="space-y-4 pl-9">
                {certifications.map((cert, index) => (
                  <div key={index}>
                    <p className="font-black text-white text-sm">{cert.name}</p>
                    <p className="text-xs text-white/40">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.a
              href="https://github.com/PushkarPrabhath27"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="block relative p-6 bg-black border-4 border-[#00f0ff] text-center group"
              style={{ boxShadow: "4px 4px 0 #ff2d75" }}
              whileHover={{ scale: 1.05, rotate: [-2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="halftone absolute inset-0 opacity-30" />
              <span className="text-4xl font-black text-[#00f0ff] block mb-2">{'</>'}</span>
              <span className="text-lg font-black uppercase text-white relative z-10">
                View GitHub Profile
              </span>
            </motion.a>
          </div>
        </div>
      </Container>
    </section>
  );
}