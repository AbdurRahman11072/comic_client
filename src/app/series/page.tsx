import { FilterBar } from "@/components/series/FilterBar";
import { SeriesGrid } from "@/components/series/SeriesGrid";
import { MOCK_SERIES } from "@/lib/mockData";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function SeriesArchivePage({ searchParams }: Props) {
  const params = await searchParams;
  const search = params.search?.toLowerCase() || "";
  const type = params.type || "";
  const status = params.status || "";
  const genre = params.genre || "";
  const sortBy = params.sortBy || "Latest";

  let results = [...MOCK_SERIES];

  // Apply filters
  if (search) results = results.filter(s => s.title.toLowerCase().includes(search));
  if (type) results = results.filter(s => s.type === type);
  if (status) results = results.filter(s => s.status === status);
  if (genre) results = results.filter(s => s.genres.includes(genre));

  // Apply sort
  if (sortBy === "Latest") {
    results.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  } else if (sortBy === "MostViews") {
    results.sort((a, b) => b.views - a.views);
  } else if (sortBy === "TopRated") {
    results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortBy === "AZ") {
    results.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <main className="flex-1 flex flex-col container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-text-primary uppercase">Series Archive</h1>
        <p className="text-text-secondary font-outfit text-sm">Browse our entire collection. Filter by genre, status, and type to find your next favorite.</p>
      </div>
      
      <FilterBar />
      
      <div className="mb-4 text-sm font-outfit text-text-muted">
        Displaying {results.length} series.
      </div>
      
      <SeriesGrid series={results} />
    </main>
  );
}
