"use client";

import { useState } from "react";
import Link from "next/link";
import { Series } from "@/types";
import { SeriesCard } from "../series/SeriesCard";
import { ChevronRight } from "lucide-react";

interface GenreBrowseProps {
  initialSeries: Series[];
}

const GENRES = [
  "All", "Action", "Romance", "Fantasy", "Drama", "Comedy", 
  "Horror", "Thriller", "Isekai", "Slice of Life", "Martial Arts", 
  "System", "Reincarnation"
];

export function GenreBrowse({ initialSeries }: GenreBrowseProps) {
  const [selectedGenre, setSelectedGenre] = useState("All");

  // In a real app this would trigger an SWR/ReactQuery fetch, using initialSeries as fallback. 
  // For mock data, we just filter the passed array.
  const filteredSeries = selectedGenre === "All" 
    ? initialSeries 
    : initialSeries.filter(s => s.genres.includes(selectedGenre));

  // Take up to 8
  const displayedSeries = filteredSeries.slice(0, 8);

  return (
    <section className="container mx-auto px-4 py-12 border-t border-border bg-bg-body">
      <div className="flex flex-col mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary uppercase flex items-center gap-2">
          <span className="w-1.5 h-8 bg-badge-manhwa inline-block rounded-full shadow-[0_0_10px_rgba(124,58,237,0.6)]"></span>
          Browse by Genre
        </h2>
        
        {/* Genre Pills */}
        <div className="flex flex-wrap gap-2">
          {GENRES.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-1.5 rounded-full text-sm font-outfit font-medium transition-all duration-300 border ${
                selectedGenre === genre 
                  ? "bg-accent-blue border-accent-blue text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  : "bg-bg-elevated border-border text-text-secondary hover:text-text-primary hover:border-text-secondary"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      
      {displayedSeries.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {displayedSeries.map((item) => (
              <SeriesCard key={item.id} series={item} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
             <Link 
              href={`/series?genre=${selectedGenre !== "All" ? selectedGenre : ""}`}
              className="px-6 py-2 rounded-full border border-border text-text-primary font-outfit text-sm hover:bg-bg-elevated hover:border-text-secondary transition-all"
            >
              Discover More {selectedGenre !== "All" && selectedGenre} Series
            </Link>
          </div>
        </>
      ) : (
        <div className="py-20 text-center text-text-muted font-outfit">
           <p className="text-xl">No series found containing the genre "{selectedGenre}".</p>
        </div>
      )}
    </section>
  );
}
