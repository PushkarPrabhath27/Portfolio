import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "./Container";

const footerLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="border-t border-neutral-800 bg-[#050505]"
    >
      <Container className="py-14">
        <div className="panel-corners border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-semibold text-lg text-white">
              Pushkar Prabhath R
            </p>

            <p className="text-sm text-[#9ca3af] break-fix mt-1">
              Full-Stack Engineer + AI Researcher
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-4 text-sm text-[#9ca3af]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white nav-underline transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black shine-button text-sm rounded-lg w-fit transition-all duration-300"
          >
            Let&apos;s Build
          </Link>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-[#666]">
          <p>© 2026 Pushkar Prabhath. All rights reserved.</p>

          <p>Designed & engineered with intent.</p>
        </div>
      </Container>
    </motion.footer>
  );
}