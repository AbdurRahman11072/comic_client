import Link from "next/link";
import { Series } from "@/types";
import { SeriesCard } from "../series/SeriesCard";
import { ChevronRight } from "lucide-react";

interface PopularSeriesProps {
  series: Series[];
}

export function PopularSeries({ series }: PopularSeriesProps) {
  // Take top 10
  const top10 = series.slice(0, 10);

  return (
    <section className="container mx-auto px-4 py-12 border-t border-border">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary uppercase flex items-center gap-2">
          <span className="w-1.5 h-8 bg-accent-orange inline-block rounded-full shadow-[0_0_10px_rgba(249,115,22,0.6)]"></span>
          Popular Series
        </h2>
        <Link 
          href="/series?sortBy=popular"
          className="text-sm font-outfit text-text-secondary hover:text-accent-orange flex items-center transition-colors mb-1"
        >
          View All <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-4 mt-6">
        {top10.map((item, index) => (
          <div key={item.id} className="relative z-10 w-full mb-6">
            <SeriesCard series={item} showRank={index + 1} />
          </div>
        ))}
      </div>
    </section>
  );
}
