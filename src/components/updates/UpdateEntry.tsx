import Link from "next/link";
import Image from "next/image";
import { LatestUpdate } from "@/types";
import { TypeBadge } from "../series/TypeBadge";

interface UpdateEntryProps {
  update: LatestUpdate;
}

export function UpdateEntry({ update }: UpdateEntryProps) {
  const { series, chapters } = update;

  return (
    <div className="flex gap-4 p-3 rounded-lg bg-bg-card border border-border hover:bg-bg-elevated transition-colors group">
      {/* Thumbnail */}
      <Link href={`/series/${series.slug}`} className="relative w-20 aspect-[2/3] shrink-0 rounded-md overflow-hidden">
        <Image
          src={series.coverImage}
          alt={series.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-1 left-1">
          <TypeBadge type={series.type} />
        </div>
      </Link>

      {/* Info & Chapters */}
      <div className="flex flex-col min-w-0 justify-center gap-2 w-full">
        <Link 
          href={`/series/${series.slug}`}
          className="font-outfit font-semibold text-text-primary hover:text-accent-blue truncate block"
        >
          {series.title}
        </Link>
        <div className="flex flex-col gap-1.5 w-full">
          {chapters.map((ch) => (
            <Link 
              key={ch.id}
              href={`/series/${series.slug}/chapter-${ch.chapterNumber}`}
              className="flex items-center justify-between group/chapter w-full p-2 py-1.5 rounded bg-bg-body border border-border/50 hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-colors"
            >
              <span className="text-sm font-mono text-text-primary font-medium group-hover/chapter:text-accent-blue">
                Ch. {ch.chapterNumber}
              </span>
              <span className="text-xs text-text-secondary font-sans truncate ml-2">
                {ch.createdAt}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
