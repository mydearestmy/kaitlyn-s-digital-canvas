import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { LiveProjectButton } from "./LiveProjectButton";

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>

      <div className="max-w-[65%] mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  return (
    <div
      className="h-[85vh] flex items-start justify-center"
      style={{ top: `${index * 28}px`, position: "relative" }}
    >
      <motion.div
        className="sticky top-24 md:top-32 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col items-center"
        style={{ scale, transformOrigin: "top" }}
      >
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 md:mb-10">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 120px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: "clamp(1.2rem, 2.4vw, 2.2rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton projectNumber={project.number} />
        </div>

        <div className="w-full flex justify-center">
          <a href={`/projects/${project.number}`} className="w-full block">
            <img
              src={project.col2Image}
              alt={project.name}
              className="w-full max-h-[55vh] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] hover:opacity-90 transition-opacity cursor-pointer"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
