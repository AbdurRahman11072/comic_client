"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Search } from "lucide-react";

export function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

  // Debounce search update
  useEffect(() => {
    const timer = setTimeout(() => {
      createQueryString("search", searchQuery);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== "All") {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      pPush(params);
    },
    [searchParams]
  );

  const pPush = (params: URLSearchParams) => {
    // Reset to page 1 on filter change if pagination existed, omitted for simplicity unless added later
    router.push(`${pathname}?${params.toString()}`);
  }

  const currentType = searchParams.get("type") || "All";
  const currentStatus = searchParams.get("status") || "All";
  const currentGenre = searchParams.get("genre") || "All";
  const currentSort = searchParams.get("sortBy") || "Latest";

  return (
    <div className="flex flex-col gap-4 bg-bg-card border border-border rounded-lg p-4 mb-8">
      {/* Top Row: Search & Type Tabs */}
      <div className="flex flex-col md:flex-row justify-between gap-4 border-b border-border pb-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
            <Search size={18} />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 bg-bg-body border border-border rounded-md text-text-primary text-sm focus:outline-none focus:border-accent-blue transition-colors"
            placeholder="Search series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Type Tabs */}
        <div className="flex flex-wrap gap-2">
          {["All", "Manga", "Manhwa", "Manhua", "Comic"].map((type) => (
            <button
              key={type}
              onClick={() => createQueryString("type", type === "All" ? "" : type.toUpperCase())}
              className={`px-4 py-1.5 rounded-full text-sm font-outfit font-medium transition-colors ${
                (currentType === type || (currentType === type.toUpperCase())) 
                  ? "bg-accent-blue text-white" 
                  : "bg-bg-body text-text-secondary hover:text-text-primary border border-border hover:border-text-secondary"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Row: Dropdown Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Status Dropdown */}
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <label className="text-xs text-text-muted font-outfit font-medium uppercase tracking-wider">Status</label>
          <select 
            value={currentStatus}
            onChange={(e) => createQueryString("status", e.target.value)}
            className="bg-bg-body border border-border text-text-primary text-sm rounded-md px-3 py-2 w-full md:w-40 focus:outline-none focus:border-accent-blue"
          >
            <option value="All">All Status</option>
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
            <option value="HIATUS">Hiatus</option>
          </select>
        </div>

        {/* Genre Dropdown */}
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <label className="text-xs text-text-muted font-outfit font-medium uppercase tracking-wider">Genre</label>
          <select 
            value={currentGenre}
            onChange={(e) => createQueryString("genre", e.target.value)}
            className="bg-bg-body border border-border text-text-primary text-sm rounded-md px-3 py-2 w-full md:w-48 focus:outline-none focus:border-accent-blue"
          >
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Martial Arts">Martial Arts</option>
            <option value="Comedy">Comedy</option>
            <option value="System">System</option>
            <option value="Reincarnation">Reincarnation</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex flex-col gap-1 w-full md:w-auto ml-auto">
          <label className="text-xs text-text-muted font-outfit font-medium uppercase tracking-wider">Sort By</label>
          <select 
            value={currentSort}
            onChange={(e) => createQueryString("sortBy", e.target.value)}
            className="bg-bg-body border border-border text-text-primary text-sm rounded-md px-3 py-2 w-full md:w-48 focus:outline-none focus:border-accent-blue"
          >
            <option value="Latest">Latest Update</option>
            <option value="MostViews">Most Views</option>
            <option value="TopRated">Top Rated</option>
            <option value="AZ">A-Z</option>
          </select>
        </div>
      </div>
    </div>
  );
}
