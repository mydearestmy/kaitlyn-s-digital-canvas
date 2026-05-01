import { Link } from "@tanstack/react-router";
 
interface ContactButtonProps {
  label?: string;
}
 
export function ContactButton({ label = "Contact Me" }: ContactButtonProps) {
  return (
    <Link
      to="/contact"
      className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-14 py-6 sm:px-16 sm:py-7 md:px-20 md:py-8 text-sm sm:text-base md:text-lg whitespace-nowrap"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "4px",
      }}
    >
      {label}
    </Link>
  );
}
