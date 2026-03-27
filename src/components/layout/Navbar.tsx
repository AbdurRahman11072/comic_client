import Link from "next/link";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-bg-navbar border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/home" className="text-xl font-heading font-bold tracking-wider text-text-primary flex items-center gap-2">
          VORTEX SCANS
        </Link>
        <div className="hidden md:flex gap-6 font-outfit text-sm font-medium">
          <Link href="/home" className="hover:text-text-link transition-colors">Home</Link>
          <Link href="/series" className="hover:text-text-link transition-colors">Series</Link>
          <Link href="/latest-updates" className="hover:text-text-link transition-colors">Latest Updates</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-text-secondary hover:text-text-primary transition-colors">
            <Search size={20} />
          </button>
          <Link href="/auth/login" className="font-outfit text-sm bg-accent-blue hover:bg-accent-blue-hover px-4 py-2 rounded-md font-medium text-white transition-colors">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
