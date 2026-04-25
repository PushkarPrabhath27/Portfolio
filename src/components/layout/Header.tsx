"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-black/95 backdrop-blur-sm"
    >
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Pushkar <span className="text-[#ff2d75]">Prabhath</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#9ca3af]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white nav-underline">
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-block px-6 py-3 border border-[#ff2d75] text-[#ff2d75] hover:bg-[#ff2d75] hover:text-black shine-button"
          >
            Let&apos;s Talk
          </Link>

          <button
            className="md:hidden border border-neutral-700 px-3 py-2 text-sm"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 grid gap-3 text-sm text-[#9ca3af]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </motion.header>
  );
}
