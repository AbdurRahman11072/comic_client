"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Series } from "@/types";
import { TypeBadge } from "../series/TypeBadge";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";

interface HeroSpotlightProps {
  featured: Series[];
}

export function HeroSpotlight({ featured }: HeroSpotlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (featured.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featured.length]);

  if (!featured.length) return null;

  const current = featured[currentIndex];

  const next = () => setCurrentIndex((prev) => (prev + 1) % featured.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-bg-body group">
      {/* Blurred Background */}
      <div className="absolute inset-0">
        <Image
          src={current.coverImage}
          alt={current.title}
          fill
          className="object-cover blur-2xl opacity-40 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-body via-transparent to-bg-body/80" />
      </div>

      {/* Content Container */}
      <div className="container relative h-full mx-auto px-4 flex items-center">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Cover Image */}
          <div className="relative w-48 aspect-[2/3] shrink-0 rounded-lg overflow-hidden shadow-2xl shadow-black/50 hidden md:block border border-border">
            <Image
              src={current.coverImage}
              alt={current.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Info */}
          <div className="flex flex-col max-w-2xl text-center md:text-left drop-shadow-lg items-center md:items-start">
            <TypeBadge type={current.type} className="mb-4" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-2 line-clamp-2">
              {current.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {current.genres.map((genre) => (
                <span key={genre} className="px-2 py-1 bg-white/10 text-white rounded-md text-xs font-outfit backdrop-blur-md">
                  {genre}
                </span>
              ))}
            </div>
            <p className="text-text-secondary text-sm md:text-base line-clamp-3 mb-8 font-sans">
              {current.description}
            </p>
            <div className="flex gap-4">
              <Link 
                href={`/series/${current.slug}`}
                className="bg-accent-blue hover:bg-accent-blue-hover text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Read Now
              </Link>
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 backdrop-blur-sm">
                <Bookmark size={18} />
                Bookmark
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/80 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/80 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? "w-8 bg-accent-blue" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
