import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kaitlyn — Digital Media Designer" },
      {
        name: "description",
        content:
          "Kaitlyn is a digital media creator crafting immersive 3D, motion, and web experiences.",
      },
      { property: "og:title", content: "Kaitlyn — Digital Media Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of Kaitlyn — 3D modeling, rendering, motion design, videography, and web design.",
      },
    ],
  }),
});

function Index() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
