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
    <main style={{ backgroundColor: "#0C0C0C", minHeight: "100vh" }} className="text-[#D7E2EA]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-[#D7E2EA]/80 hover:text-[#D7E2EA] uppercase tracking-widest text-sm transition-colors"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row sm:items-end gap-6"
        >
          <span
            className="text-[#D7E2EA] font-black leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 180px)" }}
          >
            {project.number}
          </span>
          <div>
            <div className="uppercase tracking-widest text-sm text-[#D7E2EA]/60 mb-2">
              {project.category}
            </div>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none"
              style={{ fontSize: "clamp(2.5rem, 7vw, 100px)" }}
            >
              {project.name}
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-[40px] sm:rounded-[60px] overflow-hidden border-2 border-[#D7E2EA]/20 aspect-[16/10] bg-[#1a1a1a] flex items-center justify-center"
        >
          <img
            src={project.col2Image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="uppercase tracking-widest text-sm text-[#D7E2EA]/60 mb-4">
              About the project
            </h2>
            <p
              className="font-light leading-relaxed text-[#D7E2EA]/90"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)" }}
            >
              [Placeholder description] This is where the story of {project.name} lives —
              the brief, the inspiration, the process, and the outcome. Replace this
              placeholder with the full project narrative.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="uppercase tracking-widest text-sm text-[#D7E2EA]/60 mb-4">
              Details
            </h2>
            <ul className="space-y-3 text-[#D7E2EA]/90">
              <li><span className="text-[#D7E2EA]/50 uppercase text-xs tracking-widest mr-3">Type</span>{project.category}</li>
              <li><span className="text-[#D7E2EA]/50 uppercase text-xs tracking-widest mr-3">Year</span>2026</li>
              <li><span className="text-[#D7E2EA]/50 uppercase text-xs tracking-widest mr-3">Role</span>Designer</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          <div className="rounded-[30px] border-2 border-dashed border-[#D7E2EA]/20 aspect-square flex items-center justify-center text-[#D7E2EA]/40 uppercase tracking-widest text-sm">
            Image Placeholder
          </div>
          <div className="rounded-[30px] border-2 border-dashed border-[#D7E2EA]/20 aspect-square flex items-center justify-center text-[#D7E2EA]/40 uppercase tracking-widest text-sm">
            Image Placeholder
          </div>
        </motion.div>

        <div className="mt-20 mb-10">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-12 py-5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors"
          >
            <ArrowLeft size={18} /> Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
