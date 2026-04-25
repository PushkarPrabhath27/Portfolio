import Link from "next/link";
import { Container } from "./Container";

const footerLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-semibold">Pushkar Prabhath R</p>
            <p className="text-sm text-[#9ca3af] break-fix">Full-Stack Engineer & AI Researcher</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[#9ca3af]">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black text-sm w-fit"
          >
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
