import { SeriesType } from "@/types";

interface TypeBadgeProps {
  type: SeriesType;
  className?: string;
}

export function TypeBadge({ type, className = "" }: TypeBadgeProps) {
  const bgColors: Record<SeriesType, string> = {
    MANHWA: "bg-badge-manhwa",
    MANGA: "bg-badge-manga",
    MANHUA: "bg-badge-manhua",
    COMIC: "bg-badge-comic",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-mono font-bold text-white tracking-wider uppercase rounded-full ${bgColors[type]} ${className}`}
    >
      {type}
    </span>
  );
}
