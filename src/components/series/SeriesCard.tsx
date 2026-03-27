import Link from "next/link";
import Image from "next/image";
import { Series } from "@/types";
import { TypeBadge } from "./TypeBadge";
import { StatusBadge } from "./StatusBadge";
import { Play } from "lucide-react";

interface SeriesCardProps {
  series: Series;
  showRank?: number;
}

export function SeriesCard({ series, showRank }: SeriesCardProps) {
  return (
    <Link 
      href={`/series/${series.slug}`} 
      className="group relative flex flex-col gap-2 w-full"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-bg-card border border-border">
        <Image
          src={series.coverImage}
          alt={series.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10">
          <TypeBadge type={series.type} />
        </div>
        <div className="absolute bottom-2 left-2 z-10">
          <StatusBadge status={series.status} />
        </div>

        {/* Hover Read Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <div className="bg-accent-blue text-white rounded-full p-3 shadow-[0_0_15px_rgba(59,130,246,0.6)]">
            <Play size={24} fill="currentColor" />
          </div>
        </div>

        {/* Optional Rank Number for Popular Section */}
        {showRank && (
          <div className="absolute -left-4 -bottom-6 text-9xl font-heading font-extrabold text-white/20 select-none z-0">
            {showRank}
          </div>
        )}
      </div>

      {/* Title & Info */}
      <div className="flex flex-col gap-0.5 mt-1">
        <h3 className="font-outfit font-semibold text-sm line-clamp-2 text-text-primary group-hover:text-accent-blue transition-colors">
          {series.title}
        </h3>
        {series.latestChapter && (
          <p className="text-xs text-text-muted font-mono">
            Ch.{series.latestChapter.chapterNumber} • {series.latestChapter.createdAt}
          </p>
        )}
      </div>
    </Link>
  );
}
