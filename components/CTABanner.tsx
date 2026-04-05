export default function CTABanner() {
  return (
    <section
      id="cta"
      className="bg-gradient-to-br from-[var(--color-bg-dark)] to-[#1E293B] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Don&apos;t Wait for the Next Power Outage
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-light)]">
          Join 50,000+ homeowners who found their perfect generator through
          HomeGen.
        </p>
        <button className="btn-gradient mt-8 rounded-xl px-10 py-4 text-lg">
          Get Your Free Quote Now
        </button>
        <p className="mt-4 text-sm text-[var(--color-text-light)]">
          No spam. No obligations. Just quotes from local pros.
        </p>
      </div>
    </section>
  );
}
