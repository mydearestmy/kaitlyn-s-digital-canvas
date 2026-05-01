import { Link } from "@tanstack/react-router";

interface ContactButtonProps {
  label?: string;
}

export function ContactButton({ label = "Contact Me" }: ContactButtonProps) {
  return (
    <Link
      to="/contact"
      className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-12 py-5 sm:px-14 sm:py-6 md:px-16 md:py-7 text-sm sm:text-base md:text-lg whitespace-nowrap"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      {label}
    </Link>
  );
}
