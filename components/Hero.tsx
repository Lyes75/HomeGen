"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, Globe, Award, DollarSign } from "lucide-react";
import cities from "@/data/cities.json";
import citiesFull from "@/data/cities-full.json";

interface City {
  city: string;
  state: string;
  stateAbbr: string;
  slug: string;
  stateSlug: string;
}

export default function Hero() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<City[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Set of city slugs that have full published pages
  const publishedCities = new Set(
    citiesFull.map((c) => `${c.stateSlug}/${c.slug}`)
  );

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length < 2) {
        setResults([]);
        setIsOpen(false);
        return;
      }
      // ZIP code detection
      if (/^\d{5}$/.test(query.trim())) {
        setResults([]);
        setIsOpen(false);
        return;
      }
      const q = query.toLowerCase();
      const filtered = (cities as City[])
        .filter(
          (c) =>
            c.city.toLowerCase().startsWith(q) ||
            c.city.toLowerCase().includes(q)
        )
        .slice(0, 5);
      setResults(filtered);
      setIsOpen(filtered.length > 0);
      setActiveIndex(-1);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigateToCity = useCallback(
    (city: City) => {
      setIsOpen(false);
      setQuery(`${city.city}, ${city.stateAbbr}`);
      const cityPath = `${city.stateSlug}/${city.slug}`;
      if (publishedCities.has(cityPath)) {
        router.push(`/generator-installation/${cityPath}`);
      } else {
        router.push(`/generator-installation/${city.stateSlug}`);
      }
    },
    [router, publishedCities]
  );

  const handleSubmit = useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) return;

    // ZIP code
    if (/^\d{5}$/.test(trimmed)) {
      router.push(`/get-quotes?zip=${trimmed}`);
      return;
    }

    // If there's an active suggestion, use it
    if (activeIndex >= 0 && results[activeIndex]) {
      navigateToCity(results[activeIndex]);
      return;
    }

    // Try to match a city
    const q = trimmed.toLowerCase();
    const match = (cities as City[]).find(
      (c) => c.city.toLowerCase() === q
    );
    if (match) {
      navigateToCity(match);
      return;
    }

    // Fallback: go to get-quotes with city pre-filled
    router.push(`/get-quotes?city=${encodeURIComponent(trimmed)}`);
  }, [query, activeIndex, results, router, navigateToCity]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, -1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && results[activeIndex]) {
          navigateToCity(results[activeIndex]);
        } else {
          handleSubmit();
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  return (
    <section className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-dark)] sm:text-5xl lg:text-6xl">
          Find Trusted Home Generator{" "}
          <span className="gradient-text">Installers Near You</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl">
          Get free, no-obligation quotes from certified local installers.
          Use our calculator to find the right size and estimate costs
          before you buy.
        </p>

        {/* Search bar */}
        <div
          ref={wrapperRef}
          className="relative mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]"
              size={20}
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => results.length > 0 && setIsOpen(true)}
              placeholder="Enter your city or ZIP code"
              className="w-full rounded-xl border border-[var(--color-border)] py-4 pl-12 pr-4 text-base text-[var(--color-text-dark)] placeholder:text-[var(--color-text-light)] focus:border-[var(--color-primary-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-cyan)]/20"
              aria-label="Enter your city or ZIP code"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-autocomplete="list"
              role="combobox"
              autoComplete="off"
            />

            {/* Autocomplete dropdown */}
            {isOpen && results.length > 0 && (
              <ul
                role="listbox"
                className="absolute top-full left-0 z-50 mt-1 w-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-lg"
              >
                {results.map((city, index) => (
                  <li
                    key={`${city.slug}-${city.stateSlug}`}
                    role="option"
                    aria-selected={index === activeIndex}
                    className={`cursor-pointer px-4 py-3 text-left text-sm transition-colors ${
                      index === activeIndex
                        ? "bg-[var(--color-bg-light)] text-[var(--color-text-dark)]"
                        : "text-[var(--color-text-body)] hover:bg-[var(--color-bg-light)]"
                    }`}
                    onMouseDown={() => navigateToCity(city)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className="font-medium">{city.city}</span>
                    <span className="text-[var(--color-text-light)]">
                      , {city.stateAbbr}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="btn-gradient rounded-xl px-8 py-4 text-base whitespace-nowrap"
          >
            Get Quotes
          </button>
        </div>

        {/* Trust signal */}
        <p className="mt-6 text-sm text-[var(--color-text-light)]">
          The free way to find trusted generator installers near you.
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Globe size={20} className="text-[var(--color-primary-cyan)]" />
              <p className="text-2xl font-bold text-[var(--color-text-dark)]">
                All 50 States
              </p>
            </div>
            <p className="text-sm text-[var(--color-text-light)]">
              Covering all 50 states
            </p>
          </div>
          <div className="h-8 w-px bg-[var(--color-border)]" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Award size={20} className="text-[var(--color-primary-cyan)]" />
              <p className="text-2xl font-bold text-[var(--color-text-dark)]">
                All Major Brands
              </p>
            </div>
            <p className="text-sm text-[var(--color-text-light)]">
              Generac, Kohler, Cummins & more
            </p>
          </div>
          <div className="h-8 w-px bg-[var(--color-border)]" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <DollarSign size={20} className="text-[var(--color-primary-cyan)]" />
              <p className="text-2xl font-bold text-[var(--color-text-dark)]">
                100% Free
              </p>
            </div>
            <p className="text-sm text-[var(--color-text-light)]">
              No fees, no obligations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
