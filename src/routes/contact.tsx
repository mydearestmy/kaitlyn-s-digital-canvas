import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Kaitlyn" },
      { name: "description", content: "Get in touch with Kaitlyn for collaborations and projects." },
      { property: "og:title", content: "Contact — Kaitlyn" },
      { property: "og:description", content: "Get in touch with Kaitlyn." },
    ],
  }),
});

const contactLinks = [
  { icon: Mail, label: "Email", value: "kaitlynmeiruan@gmail.com", href: "mailto:hello@kaitlyn.studio" },
  { icon: Instagram, label: "Instagram", value: "@dearestmyy", href: "https://instagram.com/dearestmyy" },
  { icon: Linkedin, label: "LinkedIn", value: "Kaitlyn Nguyen", href: "https://www.linkedin.com/in/kaitlyn-nguyen-74558a3b6" },
];

function ContactPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", minHeight: "100vh" }} className="text-[#D7E2EA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-10 md:py-14">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#D7E2EA]/50 hover:text-[#D7E2EA] uppercase tracking-widest text-sm transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </Link>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-heading font-black uppercase tracking-tight leading-none mt-10 mb-16 md:mb-20"
          style={{ fontSize: "clamp(3.5rem, 13vw, 160px)" }}
        >
          Let's Talk
        </motion.h1>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p
              className="text-[#D7E2EA]/70 font-light leading-relaxed mb-12"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.35rem)" }}
            >
              Got a project in mind, a collaboration idea, or just want to say hi?
              I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-4">
              {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="group flex items-center gap-5 rounded-2xl border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60 px-6 py-5 transition-all duration-300 hover:bg-[#D7E2EA]/5"
                >
                  <div className="text-[#D7E2EA]/50 group-hover:text-[#D7E2EA] transition-colors">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="uppercase tracking-widest text-xs text-[#D7E2EA]/40 mb-1">{label}</div>
                    <div className="font-medium text-base md:text-lg">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            {[
              { type: "text", placeholder: "Your name" },
              { type: "email", placeholder: "Your email" },
            ].map(({ type, placeholder }) => (
              <div key={placeholder} className="relative">
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-b border-[#D7E2EA]/25 focus:border-[#D7E2EA] outline-none py-4 text-base md:text-lg placeholder:text-[#D7E2EA]/35 transition-colors"
                />
              </div>
            ))}

            <div className="relative">
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full bg-transparent border-b border-[#D7E2EA]/25 focus:border-[#D7E2EA] outline-none py-4 text-base md:text-lg placeholder:text-[#D7E2EA]/35 transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="rounded-full text-white font-medium uppercase tracking-widest px-12 py-5 text-sm md:text-base hover:opacity-90 transition-opacity"
                style={{
                  background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                  outline: "2px solid white",
                  outlineOffset: "3px",
                }}
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </main>
  );
}
