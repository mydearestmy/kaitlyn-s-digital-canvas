import { Link } from "@tanstack/react-router";

interface LiveProjectButtonProps {
  projectNumber: string;
}

export function LiveProjectButton({ projectNumber }: LiveProjectButtonProps) {
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: projectNumber }}
      className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-12 py-5 sm:px-14 sm:py-6 text-sm sm:text-base md:text-lg hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap"
    >
      explore
    </Link>
  );
}
