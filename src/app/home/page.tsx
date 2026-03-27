import { HeroSpotlight } from "@/components/home/HeroSpotlight";
import { LatestUpdatesSection } from "@/components/home/LatestUpdatesSection";
import { PopularSeries } from "@/components/home/PopularSeries";
import { GenreBrowse } from "@/components/home/GenreBrowse";
import { getFeaturedSeries, getLatestUpdates, getPopularSeries, MOCK_SERIES } from "@/lib/mockData";

export default function HomePage() {
  const featured = getFeaturedSeries();
  const latestUpdates = getLatestUpdates();
  const popular = getPopularSeries();

  return (
    <main className="flex-1 flex flex-col w-full bg-bg-body overflow-x-hidden min-h-screen">
      <HeroSpotlight featured={featured} />
      <LatestUpdatesSection updates={latestUpdates} />
      <PopularSeries series={popular} />
      <GenreBrowse initialSeries={MOCK_SERIES} />
    </main>
  );
}
