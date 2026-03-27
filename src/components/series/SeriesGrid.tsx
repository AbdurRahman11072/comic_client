import { Series } from "@/types";
import { SeriesCard } from "./SeriesCard";

interface SeriesGridProps {
  series: Series[];
  emptyMessage?: string;
}

export function SeriesGrid({ series, emptyMessage = "No series found matching your criteria." }: SeriesGridProps) {
  if (series.length === 0) {
    return (
      <div className="w-full flex items-center justify-center py-32 bg-bg-card rounded-lg border border-border border-dashed">
        <p className="text-text-muted text-lg font-outfit">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8 w-full">
      {series.map((item) => (
        <SeriesCard key={item.id} series={item} />
      ))}
    </div>
  );
}
