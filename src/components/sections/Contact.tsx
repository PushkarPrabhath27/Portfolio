"use client";

import { FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "pushkar.prabhath@gmail.com",
    href: "mailto:pushkar.prabhath@gmail.com",
    color: "#ff2d75"
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "@PushkarPrabhath27",
    href: "https://github.com/PushkarPrabhath27",
    color: "#00f0ff"
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "Pushkar Prabhath",
    href: "https://linkedin.com/in/pushkar-prabhath",
    color: "#ffd500"
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Hyderabad, India",
    href: null,
    color: "#6a00ff"
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{ transform: "skewY(2deg)" }}
    >
      <div className="absolute inset-0 halftone noise bg-black" />
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <Container className="relative" style={{ transform: "skewY(-2deg)" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="mb-20 text-center"
        >
          <h2
            className="text-6xl md:text-8xl font-black uppercase rgb cmyk-shadow glitch"
            data-text="CONTACT"
          >
            CONTACT
          </h2>
          <p className="text-lg uppercase tracking-[0.3em] text-white/60 mt-4">
            Let&apos;s Build Something Together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative"
            style={{ transform: "rotate(-1deg)" }}
          >
            <div className="relative p-8 bg-black border-4 border-white" style={{ boxShadow: "6px 6px 0 #ff2d75" }}>
              <div className="halftone absolute inset-0 opacity-20" />

              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: "20px solid transparent",
                  borderRight: "20px solid transparent",
                  borderTop: "20px solid white",
                  top: "-20px"
                }}
              />

              <h3 className="text-2xl font-black uppercase mb-8 text-center glitch-text">
                SEND A MESSAGE
              </h3>

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.3em] text-white/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="sp-input w-full"
                    placeholder="YOUR NAME"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.3em] text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="sp-input w-full"
                    placeholder="YOUR@EMAIL.COM"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.3em] text-white/60 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="sp-input w-full resize-none"
                    placeholder="YOUR MESSAGE..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="comic-button w-full group"
                  whileHover={{ scale: 1.02, rotate: [-2, 2, 0] }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
                style={{ transform: `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)` }}
              >
                <motion.div
                  className="relative p-6 bg-black border-4 border-white transition-all duration-100"
                  style={{
                    boxShadow: `4px 4px 0 ${method.color}`
                  }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="halftone absolute inset-0 opacity-30" />

                  <div className="flex items-center gap-6 relative z-10">
                    <div
                      className="p-4 border-2 border-white bg-black group-hover:bg-current transition-colors duration-100"
                      style={{ color: method.color }}
                    >
                      <method.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40 block mb-1">
                        {method.label}
                      </span>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                          className="text-lg font-black text-white group-hover:text-current transition-colors duration-100"
                          style={{ color: method.color }}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-lg font-black text-white">
                          {method.value}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative"
              style={{ transform: "rotate(1deg)" }}
            >
              <div
                className="relative p-6 bg-black border-4 border-[#00ff88]"
                style={{ boxShadow: "4px 4px 0 #00ff88" }}
              >
                <div className="halftone absolute inset-0 opacity-20" />

                <div className="flex items-center justify-center gap-3 relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-3 h-3 bg-[#00ff88]"
                  />
                  <span className="text-lg font-black uppercase text-[#00ff88] tracking-wider">
                    Available for Opportunities
                  </span>
                </div>
                <p className="text-sm text-white/60 text-center mt-2">
                  Open to internships, freelance, and full-time roles
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <div
        className="absolute top-1/4 right-0 w-32 h-32 border-4 border-[#ff2d75] opacity-20 rotate-45"
      />
      <div
        className="absolute bottom-1/4 left-0 w-24 h-24 border-4 border-[#00f0ff] opacity-20 -rotate-12"
      />
    </section>
  );
}
