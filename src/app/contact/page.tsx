import { Mail, Github, Linkedin, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/layout/Container";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "pushkarprabhathrayana@gmail.com",
    href: "mailto:pushkarprabhathrayana@gmail.com",
    accent: "#00f0ff",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/PushkarPrabhath27",
    href: "https://github.com/PushkarPrabhath27",
    accent: "#00f0ff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pushkar-prabhath",
    href: "https://linkedin.com/in/pushkar-prabhath",
    accent: "#00f0ff",
  },
];

export const metadata = {
  title: "Contact | Pushkar Prabhath R",
  description: "Get in touch for collaboration opportunities, job roles, or research partnerships.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <Container className="py-12">
        <SectionHeader
          title="Get in Touch"
          subtitle="Interested in collaborating? Let&apos;s connect."
        />

        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <p className="text-lg text-[var(--text-secondary)] text-center mb-8">
              I&apos;m always open to discussing new opportunities, research collaborations,
              or interesting projects. Feel free to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-xl bg-[#111] border border-neutral-800 border-l-2 border-l-[#00f0ff] transition-all hover:-translate-y-1"
                >
                  <method.icon className="h-6 w-6 mb-3" style={{ color: method.accent }} />
                  <h4 className="font-medium text-white mb-1">
                    {method.label}
                  </h4>
                  <p className="text-sm text-[#9ca3af] break-all">
                    {method.value}
                  </p>
                </a>
              ))}
            </div>
          </Card>

          <Card className="text-center">
            <div className="flex items-center justify-center gap-2 text-[var(--text-secondary)] mb-4">
              <Calendar className="h-5 w-5" />
              <span>Availability</span>
            </div>
            <p className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Open to Opportunities
            </p>
            <p className="text-sm text-[var(--text-tertiary)]">
              Available for full-time roles and research collaborations starting Summer 2026
            </p>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-[var(--text-tertiary)]">
              <MapPin className="h-4 w-4" />
              <span>Hyderabad, India</span>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
