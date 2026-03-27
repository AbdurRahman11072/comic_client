import { getLatestUpdates } from "@/lib/mockData";
import { UpdateEntry } from "@/components/updates/UpdateEntry";

export default function LatestUpdatesPage() {
  const updates = getLatestUpdates();

  return (
    <main className="flex-1 flex flex-col container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 border-b border-border pb-6">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-text-primary uppercase flex items-center gap-3">
          <span className="w-2 h-10 bg-accent-blue inline-block rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></span>
          Latest Updates
        </h1>
        <p className="text-text-secondary font-outfit text-sm ml-5">Chronological feed of all newest chapter releases across the platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {updates.map((update) => (
          <UpdateEntry key={update.series.id} update={update} />
        ))}
      </div>
    </main>
  );
}
