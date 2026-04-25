"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [active, setActive] = useState("#projects");

  useEffect(() => {
    const onScroll = () => {
      setShrunk(window.scrollY > 30);

      let current = active;

      for (const link of navLinks) {
        const el = document.querySelector(link.href);

        if (!el) continue;

        const rect = (el as HTMLElement).getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          current = link.href;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, [active]);

  const navClasses = useMemo(
    () =>
      `mx-auto mt-4 w-[min(980px,94vw)] rounded-full border border-white/15 bg-black/70 backdrop-blur-xl transition-all duration-300 ${
        shrunk
          ? "py-2 px-4"
          : "py-3 px-6"
      }`,
    [shrunk]
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={navClasses}>
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="#top"
            className="text-sm md:text-base font-semibold tracking-tight hover:opacity-90"
          >
            Pushkar{" "}
            <span className="text-[#ff2d75]">
              Prabhath
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[#9ca3af]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-underline hover:text-white transition-colors duration-300 ${
                  active === link.href
                    ? "text-white"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <MagneticButton
            href="#contact"
            className="hidden md:inline-block px-5 py-2 border border-[#ff2d75] text-[#ff2d75] hover:bg-[#ff2d75] hover:text-black shine-button rounded-full text-sm"
          >
            Let&apos;s Talk
          </MagneticButton>

          {/* Mobile Button */}
          <button
            className="md:hidden border border-white/20 px-3 py-1.5 text-xs rounded-full hover:border-white transition-colors"
            onClick={() =>
              setIsMenuOpen((prev) => !prev)
            }
            aria-label="Toggle Menu"
          >
            {isMenuOpen
              ? "Close"
              : "Menu"}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
            }}
            className="md:hidden mt-4 grid gap-3 text-sm text-[#9ca3af]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setIsMenuOpen(false)
                }
                className="hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <MagneticButton
              href="#contact"
              className="mt-2 inline-block px-4 py-3 border border-[#ff2d75] text-[#ff2d75] hover:bg-[#ff2d75] hover:text-black text-center rounded-xl"
            >
              Let&apos;s Talk
            </MagneticButton>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}