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
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          const range = [i / projects.length, 1];
          const scale = useTransform(scrollYProgress, range, [1, targetScale]);
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              scale={scale}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  scale,
}: {
  project: Project;
  index: number;
  scale: MotionValue<number>;
}) {
  return (
    <div
      className="h-[85vh] flex items-start justify-center"
      style={{ top: `${index * 28}px`, position: "relative" }}
    >
      <motion.div
        className="sticky top-24 md:top-32 w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
        style={{ scale, transformOrigin: "top" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
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
          <LiveProjectButton />
        </div>

        <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-5">
            <img
              src={project.col1Image1}
              alt={`${project.name} 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="col-span-3">
            <img
              src={project.col2Image}
              alt={`${project.name} 3`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
