"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/PushkarPrabhath27",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/pushkar-prabhath",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:pushkar.prabhath@gmail.com",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

const footerLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative py-16 border-t-4 border-white bg-black overflow-hidden"
      style={{ transform: "skewY(-2deg)" }}
    >
      <div className="absolute inset-0 halftone noise opacity-20" />
      
      <Container className="relative" style={{ transform: "skewY(2deg)" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-3xl font-black text-white">
                PUSH<span className="text-[#ff2d75]">KAR</span>
              </h3>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Full-Stack Engineer & AI Researcher. Building systems that scale.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#ff2d75] transition-colors duration-100 border-2 border-white/10 p-3 hover:border-[#ff2d75]"
                  whileHover={{ y: -5, rotate: [-5, 5, 0] }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#00f0ff] transition-colors duration-100 text-sm uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Open to opportunities. Let&apos;s build something amazing together.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-6 py-3 border-4 border-[#ff2d75] text-[#ff2d75] font-black uppercase text-sm tracking-wider hover:bg-[#ff2d75] hover:text-black transition-all duration-100"
              whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              LET&apos;S TALK
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t-4 border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Pushkar Prabhath R. All rights reserved.
          </p>
          <p className="text-xs text-white/30 uppercase tracking-widest">
            MADE WITH <span className="text-[#ff2d75]">&lt;3</span>
          </p>
        </div>
      </Container>

      <div
        className="absolute bottom-0 right-0 w-32 h-32 border-4 border-[#ff2d75] opacity-20 rotate-45 translate-x-1/2 translate-y-1/2"
      />
    </footer>
  );
}