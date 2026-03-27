import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-bg-navbar border-t border-border mt-auto py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-text-muted text-sm font-outfit">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-heading text-lg font-bold text-text-primary tracking-wider">VORTEX SCANS</span>
          <p className="mt-1 max-w-sm">Read Comics, manga, manhua, manhwa, translated swiftly: Vortex, your ultimate library.</p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/series" className="hover:text-text-primary transition-colors">Browse</Link>
          <Link href="#" className="hover:text-text-primary transition-colors">Discord</Link>
          <Link href="#" className="hover:text-text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
