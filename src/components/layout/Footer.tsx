"use client";

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
    <motion.footer initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="border-t border-neutral-800 bg-[#050505]">
      <Container className="py-14">
        <div className="panel-corners border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-semibold text-lg">Pushkar Prabhath</p>
            <p className="text-sm text-[#9ca3af] break-fix mt-1">Full-stack engineer + AI researcher</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[#9ca3af]">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white nav-underline">
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="#contact" className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black shine-button text-sm w-fit">
            Let&apos;s Build
          </Link>
        </div>
      </Container>
    </motion.footer>
  );
}
