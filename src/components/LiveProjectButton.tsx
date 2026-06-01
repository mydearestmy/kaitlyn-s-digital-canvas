import { Link } from "@tanstack/react-router";
 
interface LiveProjectButtonProps {
  projectNumber: string;
}
 
export function LiveProjectButton({ projectNumber }: LiveProjectButtonProps) {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: projectNumber }}
      className="inline-block rounded-full text-[#D7E2EA] font-medium uppercase tracking-widest text-base sm:text-lg md:text-xl hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap" style={{ border: "2px solid #D7E2EA", padding: "14px 20px" }}
    >
      explore
    </Link>
  );
}
