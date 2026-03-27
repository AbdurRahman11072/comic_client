import Link from "next/link";
import { LatestUpdate } from "@/types";
import { UpdateEntry } from "../updates/UpdateEntry";
import { ChevronRight } from "lucide-react";

interface LatestUpdatesSectionProps {
  updates: LatestUpdate[];
}

export function LatestUpdatesSection({ updates }: LatestUpdatesSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary uppercase flex items-center gap-2">
          <span className="w-1.5 h-8 bg-accent-blue inline-block rounded-full"></span>
          Latest Updates
        </h2>
        <Link 
          href="/latest-updates"
          className="text-sm font-outfit text-text-secondary hover:text-accent-blue flex items-center transition-colors mb-1"
        >
          View All <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {updates.map((update) => (
          <UpdateEntry key={update.series.id} update={update} />
        ))}
      </div>
    </section>
  );
}
