"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { SectionIntro } from "@/components/ui/SectionIntro";

const contactMethods = [
  { icon: Mail, label: "Email", value: "pushkar.prabhath@gmail.com", href: "mailto:pushkar.prabhath@gmail.com", accent: "#00eaff" },
  { icon: Github, label: "GitHub", value: "@PushkarPrabhath27", href: "https://github.com/PushkarPrabhath27", accent: "#00eaff" },
  { icon: Linkedin, label: "LinkedIn", value: "Pushkar Prabhath", href: "https://linkedin.com/in/pushkar-prabhath", accent: "#00eaff" },
  { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null, accent: "#00eaff" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    const subject = encodeURIComponent(`Portfolio Contact: ${name.trim()}`);
    const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`);
    window.location.href = `mailto:pushkar.prabhath@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative section-spotlight-cyan">
      <Container>
        <SectionIntro title="Contact" subtitle="Let’s discuss projects, research, or full-time opportunities." sticker="built with intent" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="panel-corners bg-[#111] border border-neutral-800 border-l-2 border-l-[#00eaff] rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 break-fix">Send a message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} required placeholder="Name" className="w-full border border-neutral-700 bg-black px-4 py-3 text-white focus:border-[#00eaff] focus:shadow-[0_0_0_1px_rgba(0,234,255,0.4)] outline-none" />
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Email" className="w-full border border-neutral-700 bg-black px-4 py-3 text-white focus:border-[#00eaff] focus:shadow-[0_0_0_1px_rgba(0,234,255,0.4)] outline-none" />
              <textarea rows={5} value={message} onChange={(event) => setMessage(event.target.value)} required placeholder="Message" className="w-full border border-neutral-700 bg-black px-4 py-3 text-white resize-none focus:border-[#00eaff] focus:shadow-[0_0_0_1px_rgba(0,234,255,0.4)] outline-none" />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-[#00eaff] text-[#00eaff] hover:bg-[#00eaff] hover:text-black shine-button"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="card-spotlight panel-corners bg-[#111] border border-neutral-800 border-l-2 border-l-[#00eaff] rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <method.icon className="w-5 h-5" style={{ color: method.accent }} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#9ca3af]">{method.label}</p>
                    {method.href ? (
                      <a href={method.href} target={method.href.startsWith("mailto:") ? undefined : "_blank"} rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="font-medium hover:text-white break-fix" style={{ color: method.accent }}>
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
