import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Hurricane Season Generator Guide — How to Prepare Your Home (2026) | HomeGen",
  description:
    "How to prepare your home generator for hurricane season 2026. Timeline, checklist, costs, and state-by-state risk guide. Don't wait until a storm is in the forecast.",
  alternates: {
    canonical: "https://homegen.co/guides/hurricane-season-generator",
  },
  openGraph: {
    title: "Hurricane Season Generator Guide 2026 | HomeGen",
    description:
      "Preparation timeline, costs, safety rules, and state-by-state risk. Buy now, not when the storm hits.",
    url: "https://homegen.co/guides/hurricane-season-generator",
    type: "article",
  },
};

const tocItems = [
  { id: "when", label: "When is hurricane season?" },
  { id: "timing", label: "Buy before or during season?" },
  { id: "sizing", label: "What size do I need?" },
  { id: "prepare", label: "Prepare an existing generator" },
  { id: "during-after", label: "During and after a hurricane" },
  { id: "states", label: "States most at risk" },
  { id: "cost", label: "How much does it cost?" },
  { id: "safety", label: "Safety warnings" },
  { id: "faq", label: "FAQ" },
];

export default function HurricaneGuide() {
  const extLink = "text-[var(--color-primary-cyan)] hover:underline";
  const intLink = "text-[var(--color-primary-cyan)] hover:underline";
  const thClass =
    "px-4 py-3 text-left text-sm font-semibold text-[var(--color-text-dark)] bg-[var(--color-bg-light)]";
  const tdClass =
    "px-4 py-3 text-sm text-[var(--color-text-body)] border-t border-[var(--color-border)]";

  const faq = [
    {
      q: "How long before hurricane season should I buy a generator?",
      a: "At least 3-4 months. That gives you time to get quotes, schedule installation, and clear the permit process. If you start in January or February, you'll be ready well before June 1. Installers get booked solid by April in coastal states.",
    },
    {
      q: "Can I install a generator during hurricane season?",
      a: "Technically yes, but expect longer wait times and fewer discounts. Installers are busiest June through November in hurricane states. You might wait 4-8 weeks for installation instead of the usual 2-3. And if a storm is actively forming in the Gulf, some installers pause new installs entirely.",
    },
    {
      q: "Will my homeowner's insurance cover a generator?",
      a: "The generator itself can be covered under your homeowner's policy as a permanently installed home improvement. Some insurers in Florida and Texas offer premium discounts (1-5%) for homes with standby generators. Call your agent before you buy — they may require specific installation documentation.",
    },
    {
      q: "How long will my generator run during a hurricane?",
      a: "A natural gas standby generator can run indefinitely as long as the gas supply holds. Propane depends on tank size: a 500-gallon tank powers a 22 kW generator for 7-10 days at half load. Most hurricane-related outages last 2-7 days. Some last weeks — after Ida in Louisiana, parts of New Orleans were dark for over a month.",
    },
    {
      q: "Is a portable generator enough for a hurricane?",
      a: "For basic survival (lights, phone chargers, a fan), a portable works. For actual comfort — AC, refrigerator, cooking — you need a standby unit. Portables also can't start automatically when the power goes out at 3 AM during the storm. And running a portable indoors kills people every hurricane season. If you go portable, it stays outside.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
          <nav className="text-sm text-[var(--color-text-light)]">
            <Link href="/" className={intLink}>HomeGen</Link>
            {" / "}
            <Link href="/#guides" className={intLink}>Guides</Link>
            {" / "}
            <span className="text-[var(--color-text-body)]">Hurricane Season Generator Guide</span>
          </nav>
        </div>

        <article className="mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-dark)] sm:text-4xl lg:text-5xl">
            How Do I Prepare My Home Generator for Hurricane Season 2026?
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-light)]">Last updated: April 2026</p>

          {/* P0 */}
          <div className="mt-6 rounded-xl border-l-4 border-[var(--color-primary-cyan)] bg-[var(--color-bg-light)] p-5">
            <p className="text-base font-medium text-[var(--color-text-dark)] leading-relaxed">
              Atlantic hurricane season runs <strong>June 1 through November 30</strong>.
              A whole-house standby generator ($8,000-$15,000 installed) is the
              most reliable way to keep your home powered through multi-day
              outages. The time to buy is <strong>now, not when a storm is in the
              forecast</strong> — lead times double once season starts and
              installers stop taking new orders when a hurricane watch is issued.
            </p>
          </div>

          {/* TOC */}
          <nav className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5">
            <p className="mb-3 text-sm font-semibold text-[var(--color-text-dark)]">In this guide</p>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={`text-sm ${intLink}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Intro */}
          <div className="mt-10 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p className="text-lg">
              Every year it&apos;s the same story. A tropical system forms in
              the Gulf. Home Depot sells out of portable generators in 48 hours.
              People pay double on Facebook Marketplace for a unit that won&apos;t
              power their AC. Then they sit in a 95-degree house for four days
              wondering why they didn&apos;t do this sooner.
            </p>
            <p>
              Don&apos;t be that person. This guide gives you a month-by-month
              action plan so you&apos;re ready before the first storm even forms.
            </p>
          </div>

          {/* ===== WHEN ===== */}
          <h2 id="when" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            When Is Hurricane Season and Why Does It Matter for Generators?
          </h2>
          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              The Atlantic hurricane season officially runs from June 1 to
              November 30, with peak activity between mid-August and
              mid-October. According to{" "}
              <a href="https://www.nhc.noaa.gov/" target="_blank" rel="noopener noreferrer" className={extLink}>
                NOAA&apos;s National Hurricane Center
              </a>
              , this year is expected to be above-average, continuing a
              pattern of intensifying seasons driven by warmer ocean
              temperatures.
            </p>
            <p>
              Why this matters for generators: when a hurricane makes landfall,
              power outages aren&apos;t measured in hours. They&apos;re measured
              in days and weeks. Hurricane Helene (2024) left 1.2 million
              customers without power in South Carolina alone. Hurricane Ida
              (2021) knocked out power to all of New Orleans for over two weeks.
              FEMA recommends every household in a hurricane zone have a backup
              power plan, and a standby generator is the most reliable option
              available.
            </p>
          </div>

          {/* ===== TIMING ===== */}
          <h2 id="timing" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            Should I Buy a Generator Before or During Hurricane Season?
          </h2>
          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Before. Not &quot;the week before.&quot; Months before. Here&apos;s
              why: a standby generator installation takes 2-6 weeks from
              contract to power-on. That includes permitting, equipment
              ordering, scheduling, and the actual install. During season,
              installers in{" "}
              <Link href="/generator-installation/florida" className={intLink}>Florida</Link>,{" "}
              <Link href="/generator-installation/texas" className={intLink}>Texas</Link>, and{" "}
              <Link href="/generator-installation/louisiana" className={intLink}>Louisiana</Link>{" "}
              are booked solid. Lead times stretch to 8-12 weeks. Prices
              don&apos;t go up officially, but your negotiating power goes to
              zero.
            </p>
            <p>
              Here&apos;s your timeline:
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-6 space-y-4">
            {[
              {
                period: "6 months before (January-February)",
                color: "from-[#10B981] to-[#059669]",
                items: [
                  "Research generator sizes — use our sizing guide to figure out your kW needs",
                  "Get 2-3 quotes from local installers",
                  "Choose your brand (Generac vs Kohler — read our comparison)",
                  "Sign the contract and put down a deposit",
                ],
              },
              {
                period: "3 months before (March-April)",
                color: "from-[#00D4E8] to-[#2AF59A]",
                items: [
                  "Installation happens — 1-2 days on-site",
                  "Permit inspection completed",
                  "First test run with your installer present",
                  "Set up the weekly automatic exercise schedule",
                ],
              },
              {
                period: "1 month before (May)",
                color: "from-[#F59E0B] to-[#D97706]",
                items: [
                  "Annual maintenance service (oil, filters, spark plugs)",
                  "Verify propane tank is full (if propane) or gas line valve is open",
                  "Test the automatic transfer switch — flip your main breaker and confirm the generator starts",
                  "Update your family's storm plan: who stays, who evacuates, emergency contacts",
                ],
              },
              {
                period: "Storm approaching (48-72 hours)",
                color: "from-[#EF4444] to-[#DC2626]",
                items: [
                  "Run one final test start",
                  "Clear debris from around the unit (3-foot clearance minimum)",
                  "Secure loose items near the generator",
                  "Fill vehicles with gas while stations still have power",
                  "Charge all devices, fill bathtubs with water",
                ],
              },
              {
                period: "During the storm",
                color: "from-[#7C3AED] to-[#6D28D9]",
                items: [
                  "Your standby generator starts automatically when power drops — nothing to do",
                  "Monitor the unit through the mobile app (Generac Mobile Link or Kohler OnCue)",
                  "Do NOT go outside to check the generator during the storm",
                  "If it shuts down unexpectedly, wait until conditions are safe to inspect",
                ],
              },
              {
                period: "After the storm",
                color: "from-[#6B7280] to-[#4B5563]",
                items: [
                  "Inspect the unit for storm damage, debris, or water intrusion",
                  "Check the oil level — extended runs burn more oil",
                  "Once utility power is restored and stable (2+ hours), the ATS switches back automatically",
                  "Schedule a post-storm service if the generator ran for 48+ hours continuously",
                ],
              },
            ].map((step) => (
              <div key={step.period} className="rounded-xl border border-[var(--color-border)] overflow-hidden">
                <div className={`bg-gradient-to-r ${step.color} px-4 py-2.5`}>
                  <p className="text-sm font-semibold text-white">{step.period}</p>
                </div>
                <ul className="px-4 py-3 space-y-1.5">
                  {step.items.map((item, i) => (
                    <li key={i} className="text-sm text-[var(--color-text-body)] flex gap-2">
                      <span className="shrink-0 mt-0.5 text-[var(--color-text-light)]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/get-quotes?source=hurricane-guide" className={`text-sm font-medium ${intLink}`}>
              Don&apos;t wait until June. Get quotes now →
            </Link>
          </div>

          {/* ===== SIZING ===== */}
          <h2 id="sizing" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            What Size Generator Do I Need for Hurricane Protection?
          </h2>
          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              For hurricane preparedness, you want whole-house coverage. This
              isn&apos;t a winter ice storm where you lose power for 8 hours.
              Hurricanes knock out power for days, sometimes weeks. You need
              your AC running (it&apos;s going to be 90°F+ with no breeze when
              the storm passes), your refrigerator (food spoils in 4 hours
              without power), and your sump pump if you have one.
            </p>
            <p>
              For most homes in the hurricane belt (1,500-2,500 sq ft), that
              means a 20-22 kW standby generator. Read our{" "}
              <Link href="/guides/generator-size-calculator" className={intLink}>
                complete sizing guide
              </Link>{" "}
              for the exact math, or use our{" "}
              <Link href="/calculator" className={intLink}>
                interactive calculator
              </Link>{" "}
              to get a recommendation based on your specific appliances.
              The most popular models in this range are the{" "}
              <a href="https://www.generac.com/all-products/generators/home-backup-generators/guardian" target="_blank" rel="noopener noreferrer" className={extLink}>
                Generac Guardian 22 kW
              </a>{" "}
              and the{" "}
              <a href="https://www.kohlerpower.com/na/en/residential/generators.html" target="_blank" rel="noopener noreferrer" className={extLink}>
                Kohler 20RCAL
              </a>
              . Comparing brands? Check our{" "}
              <Link href="/guides/generac-vs-kohler" className={intLink}>
                Generac vs Kohler comparison
              </Link>{" "}
              or browse{" "}
              <Link href="/brands" className={intLink}>
                all generator brands we cover
              </Link>
              .
            </p>
            <p>
              The American Red Cross recommends that households with elderly
              residents, infants, or anyone dependent on medical equipment treat
              backup power as a medical necessity, not a convenience. If
              someone in your home uses a CPAP, oxygen concentrator, or
              powered wheelchair, a standby generator isn&apos;t optional.
            </p>
          </div>

          {/* ===== PREPARE EXISTING ===== */}
          <h2 id="prepare" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            How Do I Prepare My Existing Generator for a Storm?
          </h2>
          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Already have a standby generator? Good. But &quot;having&quot;
              one isn&apos;t the same as having one that works when you need
              it. Generators that sit untested for months can fail right when
              the lights go out. Here&apos;s your pre-season maintenance
              checklist:
            </p>
            <ul className="space-y-2 pl-1">
              {[
                "Change the oil and oil filter. If it's been 12+ months or 200+ hours, do it now.",
                "Replace the air filter. A clogged filter reduces output and increases fuel consumption.",
                "Check spark plugs. Replace if worn or carbon-fouled.",
                "Inspect the battery. Load-test it or replace it every 3 years. A dead battery = no auto-start.",
                "Verify coolant level (liquid-cooled units only).",
                "Run a full-load transfer test. Flip your main breaker off and confirm the generator picks up the whole house.",
                "Check that the weekly exercise schedule is active. The unit should run itself for 10-15 minutes every week.",
                "Confirm propane tank is at least 75% full, or natural gas valve is open and unobstructed.",
                "Clear vegetation, leaves, and debris from within 3 feet of the unit on all sides.",
              ].map((item) => (
                <li key={item} className="text-sm text-[var(--color-text-body)] flex gap-2">
                  <span className="shrink-0 text-[var(--color-primary-cyan)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              If you haven&apos;t done maintenance in over a year, call your
              installer for a professional service visit. Budget $200-$400.
              Cheap insurance against a $12,000 unit failing when it matters
              most.
            </p>
          </div>

          {/* ===== DURING & AFTER ===== */}
          <h2 id="during-after" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            What Should I Do During and After a Hurricane?
          </h2>
          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              During the storm: nothing. That&apos;s the whole point of a
              standby generator. It starts automatically, powers your home,
              and you stay inside. Monitor it through the app if you want,
              but don&apos;t go outside during the storm to check on it.
              Flying debris kills people. Your generator can handle rain and
              wind — it&apos;s built for it.
            </p>
            <p>
              After the storm passes and conditions are safe, do a quick
              visual inspection. Look for debris leaning against the unit,
              standing water near the exhaust, or any visible damage to the
              enclosure. Check your oil level — a generator running
              continuously for 48+ hours will burn through oil faster than
              normal. And once utility power comes back and stays stable for
              a couple hours, your automatic transfer switch will switch you
              back to grid power on its own.
            </p>
            <p>
              If the generator ran for more than 72 hours straight, schedule
              a professional service visit within a couple weeks. That&apos;s
              equivalent to a year of normal exercise cycles crammed into
              three days.
            </p>
          </div>

          {/* ===== STATES ===== */}
          <h2 id="states" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            Which States Are Most at Risk?
          </h2>
          <div className="mt-4 space-y-6 text-[var(--color-text-body)] leading-relaxed">
            <div className="rounded-xl border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-text-dark)]">
                <Link href="/generator-installation/florida" className={intLink}>Florida</Link>
              </h3>
              <p className="mt-2 text-sm">
                The most hurricane-exposed state in the country. 3.5+ outages
                per year, with FPL and Duke Energy customers regularly losing
                power for 3-7 days after major storms. Florida requires
                generators to meet the Florida Building Code (wind resistance,
                flood zone setback), which adds $500-$1,000 to installation
                costs in coastal counties. If you live in Florida and don&apos;t
                have a generator, you&apos;re gambling every June through
                November.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-text-dark)]">
                <Link href="/generator-installation/texas" className={intLink}>Texas</Link>
              </h3>
              <p className="mt-2 text-sm">
                Double threat: Gulf Coast hurricanes AND winter storms. The
                ERCOT grid failure during Winter Storm Uri (2021) left 4.5
                million homes without power for up to 5 days in sub-freezing
                temperatures. Houston, Galveston, and Corpus Christi also get
                hit by tropical systems regularly. Texas has the fastest-growing
                generator market in the country.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-text-dark)]">
                <Link href="/generator-installation/louisiana" className={intLink}>Louisiana</Link>
              </h3>
              <p className="mt-2 text-sm">
                Highest average outage duration in the US — over 13 hours per
                interruption. After Hurricane Ida (2021), parts of the state
                were without power for 6+ weeks. Entergy&apos;s aging
                infrastructure means even tropical storms cause multi-day
                outages. Generator demand has surged 300% since Katrina and
                hasn&apos;t slowed down.
              </p>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] p-5">
              <h3 className="font-semibold text-[var(--color-text-dark)]">South Carolina, North Carolina, Georgia</h3>
              <p className="mt-2 text-sm">
                South Carolina recorded 53 hours of outages in 2024, the
                highest of any state. Hurricane Helene alone affected 1.2
                million customers. North Carolina&apos;s coast and Georgia&apos;s
                coastal Savannah region are increasingly in the crosshairs as
                storms track further up the East Coast.
              </p>
            </div>

            <p>
              See all state-specific data on our{" "}
              <Link href="/states" className={intLink}>state-by-state directory</Link>.
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/get-quotes?source=hurricane-guide" className={`text-sm font-medium ${intLink}`}>
              Get quotes from installers in your state →
            </Link>
          </div>

          {/* ===== COST ===== */}
          <h2 id="cost" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            How Much Does a Hurricane-Ready Generator Setup Cost?
          </h2>

          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr>
                  <th className={thClass}>Item</th>
                  <th className={thClass}>Cost Range</th>
                  <th className={thClass}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20-22 kW generator (unit)", "$5,000 – $7,000", "Generac Guardian or Kohler 20RCAL"],
                  ["Full installation", "$3,500 – $6,000", "ATS, pad, gas line, permits, labor"],
                  ["Total installed", "$8,500 – $13,000", "Complete turn-key solution"],
                  ["Annual maintenance", "$200 – $400", "Oil, filters, battery test, inspection"],
                  ["Propane fill (500 gal)", "$800 – $1,500", "Lasts 7-10 days at half load"],
                  ["Natural gas (per day)", "$30 – $50", "Connected to utility line, unlimited supply"],
                ].map(([item, range, notes]) => (
                  <tr key={item}>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>{item}</td>
                    <td className={tdClass}>{range}</td>
                    <td className={`${tdClass} text-xs`}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Now compare that to the cost of NOT having one:
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-semibold text-red-800">The cost of going without</p>
            <ul className="mt-3 space-y-1.5 text-sm text-red-700">
              <li>• Spoiled food: $300-$600 per event (full fridge + freezer)</li>
              <li>• Hotel for a family of 4 during a 5-day outage: $750-$1,500</li>
              <li>• Burst pipes (no sump pump): $5,000-$15,000 in water damage</li>
              <li>• Lost income (work from home): $500-$2,000+ per week</li>
              <li>• Flooded basement (no sump pump during rain): $10,000+ in damage</li>
            </ul>
            <p className="mt-3 text-sm text-red-700">
              One bad hurricane and you&apos;ve spent more than the generator
              would have cost.
            </p>
          </div>

          <div className="mt-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              For the full cost breakdown by size and state, read our{" "}
              <Link href="/guides/generator-installation-cost" className={intLink}>
                installation cost guide
              </Link>
              . Comparing brands? See our{" "}
              <Link href="/guides/generac-vs-kohler" className={intLink}>
                Generac vs Kohler comparison
              </Link>
              .
            </p>
          </div>

          {/* ===== SAFETY ===== */}
          <h2 id="safety" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            Generator Safety: Mistakes That Kill People
          </h2>

          <div className="mt-4 rounded-xl border-2 border-red-300 bg-red-50 p-5 sm:p-6">
            <p className="text-sm font-bold text-red-800 uppercase tracking-wider">Critical safety warnings</p>
            <div className="mt-4 space-y-4 text-sm text-red-800">
              <div>
                <p className="font-semibold">Never run a portable generator indoors, in a garage, or under a carport.</p>
                <p className="mt-1 text-red-700">
                  Carbon monoxide poisoning kills dozens of Americans every
                  hurricane season. The CDC reports more CO deaths after
                  hurricanes than from the storms themselves. A standby
                  generator is permanently installed outdoors. A portable
                  must be at least 20 feet from any door, window, or vent.
                </p>
              </div>
              <div>
                <p className="font-semibold">Never back-feed power into your electrical panel.</p>
                <p className="mt-1 text-red-700">
                  Connecting a generator directly to your breaker panel
                  without a transfer switch sends power back into the grid
                  and can electrocute utility workers trying to restore power
                  on your street. It&apos;s also illegal everywhere in the US.
                  An automatic transfer switch prevents this.
                </p>
              </div>
              <div>
                <p className="font-semibold">Maintain NFPA clearances.</p>
                <p className="mt-1 text-red-700">
                  NFPA 37 requires at least 5 feet from openable windows,
                  doors, and air intakes. Most local codes require 18-24
                  inches from the home&apos;s exterior wall. Your installer
                  will handle placement, but don&apos;t move the unit after
                  installation.
                </p>
              </div>
              <div>
                <p className="font-semibold">Store fuel properly.</p>
                <p className="mt-1 text-red-700">
                  If you&apos;re using propane, the tank must be at least 10
                  feet from the generator and any building. Gasoline for
                  portables should be in approved containers, stored outside,
                  away from the home. Never refuel a running generator.
                </p>
              </div>
            </div>
          </div>

          {/* ===== FAQ ===== */}
          <h2 id="faq" className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-8">
            {faq.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">{item.q}</h3>
                <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-14 flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5 sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] text-lg font-bold text-white">
              LB
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-dark)]">Lyes Boussouf</p>
              <p className="mt-1 text-xs text-[var(--color-text-light)]">Founder &amp; Home Energy Specialist</p>
              <p className="mt-2 text-sm text-[var(--color-text-body)] leading-relaxed">
                Lyes tracks hurricane preparedness data, outage statistics, and
                generator demand patterns across the Gulf Coast and Atlantic
                states. This guide is reviewed by licensed electricians and
                emergency preparedness professionals.
              </p>
              <div className="mt-2 flex gap-3">
                <Link href="/about" className={`text-xs ${intLink}`}>About us</Link>
                <Link href="/contact" className={`text-xs ${intLink}`}>Contact</Link>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-[var(--color-bg-dark)] to-[#1E293B] p-8 text-center sm:p-10">
            <p className="text-lg font-semibold text-white">
              Hurricane season starts June 1.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Installation takes 2-6 weeks. Permits take 1-2 weeks. Installers
              book up fast after April. The math is simple: start now.
            </p>
            <Link
              href="/get-quotes?source=hurricane-guide"
              className="btn-gradient mt-6 inline-block rounded-xl px-8 py-4 text-base"
            >
              Get Free Quotes Before Season Starts →
            </Link>
          </div>
        </article>

        {/* Schema — Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "How Do I Prepare My Home Generator for Hurricane Season 2026?",
              description: "Complete hurricane season generator preparation guide: timeline, sizing, costs, state-by-state risk, and safety checklist.",
              author: {
                "@type": "Person",
                name: "Lyes Boussouf",
                url: "https://homegen.co/about",
                jobTitle: "Founder & Home Energy Specialist",
                worksFor: { "@type": "Organization", name: "HomeGen", url: "https://homegen.co" },
                knowsAbout: ["Home standby generators", "Hurricane preparedness", "Home backup power systems", "Generator installation"],
              },
              publisher: {
                "@type": "Organization",
                name: "HomeGen",
                url: "https://homegen.co",
                logo: { "@type": "ImageObject", url: "https://homegen.co/logo.png" },
              },
              datePublished: "2026-04-09",
              dateModified: "2026-04-09",
              mainEntityOfPage: "https://homegen.co/guides/hurricane-season-generator",
              citation: [
                {
                  "@type": "CreativeWork",
                  name: "2026 Atlantic Hurricane Season Outlook",
                  author: { "@type": "Organization", name: "National Oceanic and Atmospheric Administration (NOAA)" },
                  url: "https://www.nhc.noaa.gov/",
                },
                {
                  "@type": "CreativeWork",
                  name: "Hurricane Preparedness Guidelines",
                  author: { "@type": "Organization", name: "Federal Emergency Management Agency (FEMA)" },
                },
                {
                  "@type": "CreativeWork",
                  name: "Backup Power and Generator Safety",
                  author: { "@type": "Organization", name: "American Red Cross" },
                },
                {
                  "@type": "CreativeWork",
                  name: "Carbon Monoxide Poisoning After Natural Disasters",
                  author: { "@type": "Organization", name: "Centers for Disease Control and Prevention (CDC)" },
                },
              ],
            }),
          }}
        />
        {/* Schema — FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            }),
          }}
        />
        {/* Schema — HowTo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Prepare Your Home Generator for Hurricane Season",
              description: "Month-by-month action plan to get your home ready for hurricane season with a standby generator.",
              step: [
                { "@type": "HowToStep", name: "6 months before (Jan-Feb)", text: "Research generator sizes, get 2-3 quotes from local installers, choose your brand, sign the contract." },
                { "@type": "HowToStep", name: "3 months before (Mar-Apr)", text: "Complete installation, pass permit inspection, run first test with installer, set up weekly exercise schedule." },
                { "@type": "HowToStep", name: "1 month before (May)", text: "Annual maintenance service, verify fuel supply, test automatic transfer switch, update family storm plan." },
                { "@type": "HowToStep", name: "Storm approaching (48-72h)", text: "Run final test start, clear debris around unit, secure loose items, fill vehicles with gas, charge all devices." },
                { "@type": "HowToStep", name: "During the storm", text: "Generator starts automatically. Monitor via app. Do not go outside to check. Wait for safe conditions if it shuts down." },
                { "@type": "HowToStep", name: "After the storm", text: "Inspect for damage and debris, check oil level, let ATS switch back to grid automatically, schedule service if ran 48+ hours." },
              ],
            }),
          }}
        />

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-border)] bg-white/95 px-4 py-3 backdrop-blur-sm sm:hidden">
          <Link
            href="/get-quotes?source=hurricane-guide"
            className="btn-gradient block rounded-lg py-3 text-center text-sm font-semibold"
          >
            Get Quotes Before Hurricane Season →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
