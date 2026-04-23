"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "pushkar.prabhath@gmail.com",
    href: "mailto:pushkar.prabhath@gmail.com",
    accent: "#00f0ff",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@PushkarPrabhath27",
    href: "https://github.com/PushkarPrabhath27",
    accent: "#00f0ff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Pushkar Prabhath",
    href: "https://linkedin.com/in/pushkar-prabhath",
    accent: "#00f0ff",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
    accent: "#00f0ff",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact: ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );
    window.location.href = `mailto:pushkar.prabhath@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative section-spotlight-cyan">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold break-fix leading-tight">Contact</h2>
          <p className="text-[#9ca3af] mt-3 break-fix">
            Let&apos;s discuss projects, research, or full-time opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#111] border border-neutral-800 border-l-2 border-l-[#00f0ff] rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 break-fix">Send a message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-[#9ca3af] mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white focus:border-[#00f0ff] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-[#9ca3af] mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white focus:border-[#00f0ff] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-[#9ca3af] mb-2">Message</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-3 text-white resize-none focus:border-[#00f0ff] outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="card-spotlight bg-[#111] border border-neutral-800 border-l-2 border-l-[#00f0ff] rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <method.icon className="w-5 h-5" style={{ color: method.accent }} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        className="font-medium hover:text-white break-fix"
                        style={{ color: method.accent }}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="font-medium text-white break-fix">{method.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
