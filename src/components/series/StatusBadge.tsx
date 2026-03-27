import { SeriesStatus } from "@/types";

interface StatusBadgeProps {
  status: SeriesStatus;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const config = {
    ONGOING: { color: "text-accent-green", icon: "●", label: "Ongoing" },
    COMPLETED: { color: "text-text-secondary", icon: "■", label: "Completed" },
    HIATUS: { color: "text-accent-yellow", icon: "⏸", label: "Hiatus" },
  };

  const { color, icon, label } = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-outfit font-medium bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md text-white ${className}`}>
      <span className={`${color} text-[10px]`}>{icon}</span>
      {label}
    </span>
  );
}
