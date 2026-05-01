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

function ContactPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", minHeight: "100vh" }} className="text-[#D7E2EA]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#D7E2EA]/80 hover:text-[#D7E2EA] uppercase tracking-widest text-sm transition-colors"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-heading font-black uppercase tracking-tight leading-none mt-12"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Let's Talk
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl text-[#D7E2EA]/80 font-light leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.5rem)" }}
        >
          Got a project in mind, a collaboration idea, or just want to say hi?
          I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {[
            { icon: Mail, label: "Email", value: "hello@kaitlyn.studio" },
            { icon: Instagram, label: "Instagram", value: "@kaitlyn.designs" },
            { icon: Linkedin, label: "LinkedIn", value: "in/kaitlyn" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-3xl border-2 border-[#D7E2EA]/30 p-8 hover:border-[#D7E2EA] transition-colors"
            >
              <Icon size={28} className="mb-4" />
              <div className="uppercase tracking-widest text-xs text-[#D7E2EA]/60 mb-2">{label}</div>
              <div className="font-medium text-lg break-words">{value}</div>
            </div>
          ))}
        </motion.div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-20 grid gap-6 max-w-2xl"
        >
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent border-b-2 border-[#D7E2EA]/30 focus:border-[#D7E2EA] outline-none py-4 text-lg placeholder:text-[#D7E2EA]/40 transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            className="bg-transparent border-b-2 border-[#D7E2EA]/30 focus:border-[#D7E2EA] outline-none py-4 text-lg placeholder:text-[#D7E2EA]/40 transition-colors"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="bg-transparent border-b-2 border-[#D7E2EA]/30 focus:border-[#D7E2EA] outline-none py-4 text-lg placeholder:text-[#D7E2EA]/40 transition-colors resize-none"
          />
          <button
            type="submit"
            className="self-start mt-4 rounded-full text-white font-medium uppercase tracking-widest px-12 py-5 text-sm sm:text-base"
            style={{
              background:
                "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow:
                "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid white",
              outlineOffset: "-3px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
