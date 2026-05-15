import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = projects.find((p) => p.number === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <main style={{ backgroundColor: "#0C0C0C", minHeight: "100vh" }} className="text-[#D7E2EA] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-black mb-4">Project not found</h1>
        <Link to="/" className="underline">Go home</Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main style={{ backgroundColor: "#0C0C0C", minHeight: "100vh" }} className="text-[#D7E2EA] p-10">
      <p>{error.message}</p>
    </main>
  ),
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <main
      style={{ backgroundColor: "#0C0C0C", minHeight: "100vh" }}
      className="text-[#D7E2EA] w-full"
    >
      <div
        className="w-full px-6 sm:px-10 md:px-16 py-10 md:py-14"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Back */}
        <div className="relative z-20">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-[#D7E2EA]/50 hover:text-[#D7E2EA] uppercase tracking-widest text-sm transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>

        {/* Project number + title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end gap-4 overflow-hidden"
        >
          <span
            className="font-black leading-none text-[#D7E2EA]/30"
            style={{ fontSize: "clamp(4rem, 10vw, 140px)" }}
          >
            {project.number}
          </span>
          <div className="pb-2">
            <div className="uppercase tracking-widest text-sm text-[#D7E2EA]/50 mb-2">
              {project.category}
            </div>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none"
              style={{ fontSize: "clamp(2rem, 6vw, 90px)" }}
            >
              {project.name}
            </h1>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-[32px] sm:rounded-[48px] overflow-hidden border border-[#D7E2EA]/20 aspect-[16/9] bg-[#1a1a1a]"
        >
          <img
            src={project.col2Image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About + Details */}
        <div className="mt-16 grid gap-12 md:grid-cols-[2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="uppercase tracking-widest text-xs text-[#D7E2EA]/50 mb-5">
              About the project
            </h2>
            <p
              className="font-light leading-relaxed text-[#D7E2EA]/80"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}
            >
              {project.description ?? `[Placeholder description] This is where the story of ${project.name} lives — the brief, the inspiration, the process, and the outcome. Replace this placeholder with the full project narrative.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="uppercase tracking-widest text-xs text-[#D7E2EA]/50 mb-5">
              Details
            </h2>
            <ul className="space-y-4">
              {[
                { label: "Type", value: project.category },
                { label: "Year", value: project.year ?? "2026" },
                { label: "Role", value: project.role ?? "Designer" },
              ].map(({ label, value }) => (
                <li key={label} className="flex flex-col gap-1">
                  <span className="uppercase text-[10px] tracking-widest text-[#D7E2EA]/40">{label}</span>
                  <span className="text-[#D7E2EA]/90 font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Gallery placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              className="rounded-[24px] border border-dashed border-[#D7E2EA]/20 aspect-video flex items-center justify-center text-[#D7E2EA]/30 uppercase tracking-widest text-xs"
            >
              Image Placeholder
            </div>
          ))}
        </motion.div>

        {/* Bottom back link */}
        <div className="mt-20 mb-10">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 hover:border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-10 py-4 text-sm transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
