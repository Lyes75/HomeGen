import { Search, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-dark)] sm:text-5xl lg:text-6xl">
          Find Trusted Home Generator{" "}
          <span className="gradient-text">Installers Near You</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-body)] sm:text-xl">
          Compare local installers, estimate costs, and get free quotes for
          whole-house generator installation in 60 seconds.
        </p>

        {/* Search bar */}
        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]"
              size={20}
            />
            <input
              type="text"
              placeholder="Enter your city or ZIP code"
              className="w-full rounded-xl border border-[var(--color-border)] py-4 pl-12 pr-4 text-base text-[var(--color-text-dark)] placeholder:text-[var(--color-text-light)] focus:border-[var(--color-primary-cyan)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-cyan)]/20"
              aria-label="Enter your city or ZIP code"
            />
          </div>
          <button className="btn-gradient rounded-xl px-8 py-4 text-base whitespace-nowrap">
            Get Quotes
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-6 flex items-center justify-center gap-1 text-sm text-[var(--color-text-light)]">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <span className="ml-1">Trusted by homeowners in 500+ US cities</span>
        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--color-text-dark)]">
              50,000+
            </p>
            <p className="text-sm text-[var(--color-text-light)]">
              Quotes Requested
            </p>
          </div>
          <div className="h-8 w-px bg-[var(--color-border)]" />
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--color-text-dark)]">
              500+
            </p>
            <p className="text-sm text-[var(--color-text-light)]">Cities</p>
          </div>
          <div className="h-8 w-px bg-[var(--color-border)]" />
          <div className="text-center">
            <p className="text-2xl font-bold text-[var(--color-text-dark)]">
              100%
            </p>
            <p className="text-sm text-[var(--color-text-light)]">Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}
