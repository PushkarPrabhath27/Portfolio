"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

const navLinks = [
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#research", label: "RESEARCH" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-4 border-white">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="relative group">
            <motion.span
              className="text-2xl font-black text-white"
              whileHover={{
                textShadow: "-2px 0 #ff2d75, 2px 0 #00f0ff",
              }}
              transition={{ duration: 0.1 }}
            >
              PUSH<span className="text-[#ff2d75]">KAR</span>
            </motion.span>
            <motion.span
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#ff2d75] via-[#00f0ff] to-[#ffd500]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-black uppercase tracking-wider text-white/70 hover:text-white transition-all duration-100 group"
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-1 bg-[#ff2d75]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                  style={{ width: "0%" }}
                />
              </Link>
            ))}
          </div>

          <motion.div
            className="hidden md:block px-6 py-2 border-4 border-[#ff2d75] text-[#ff2d75] font-black uppercase text-sm tracking-wider hover:bg-[#ff2d75] hover:text-black transition-all duration-100"
            whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">LET&apos;S TALK</Link>
          </motion.div>

          <motion.button
            className="md:hidden p-2 text-white border-2 border-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white origin-left"
                animate={isMenuOpen ? { rotate: 45, y: 2.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white"
                animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white origin-left"
                animate={isMenuOpen ? { rotate: -45, y: -2.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.68, -0.55, 0.265, 1.55] }}
            className="md:hidden bg-black border-t-4 border-white overflow-hidden"
          >
            <Container className="py-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-xl font-black uppercase text-white hover:text-[#ff2d75] transition-colors duration-100"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 px-6 py-3 border-4 border-[#ff2d75] text-[#ff2d75] font-black uppercase text-center"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    LET&apos;S TALK
                  </Link>
                </motion.div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
