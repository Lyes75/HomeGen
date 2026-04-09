import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Generac vs Kohler: Which Home Generator Is Better? (2026) | HomeGen",
  description:
    "Honest side-by-side comparison of Generac and Kohler home generators. Price, reliability, noise, warranty, dealer support. Find out which brand fits your home.",
  alternates: {
    canonical: "https://homegen.co/guides/generac-vs-kohler",
  },
  openGraph: {
    title: "Generac vs Kohler Generators — Which Is Better? | HomeGen",
    description:
      "Side-by-side comparison: price, noise, reliability, warranty. Honest verdict from real install data.",
    url: "https://homegen.co/guides/generac-vs-kohler",
    type: "article",
  },
};

const tocItems = [
  { id: "price", label: "How do they compare on price?" },
  { id: "reliability", label: "Which brand is more reliable?" },
  { id: "noise", label: "Which one is quieter?" },
  { id: "warranty", label: "How does warranty compare?" },
  { id: "dealer-support", label: "Dealer and service support?" },
  { id: "verdict", label: "Which should I choose?" },
  { id: "faq", label: "FAQ" },
];

export default function GeneracVsKohlerGuide() {
  const thClass =
    "px-4 py-3 text-left text-sm font-semibold text-[var(--color-text-dark)] bg-[var(--color-bg-light)]";
  const tdClass =
    "px-4 py-3 text-sm text-[var(--color-text-body)] border-t border-[var(--color-border)]";
  const extLink = "text-[var(--color-primary-cyan)] hover:underline";
  const intLink = "text-[var(--color-primary-cyan)] hover:underline";

  const faq = [
    {
      q: "Is Generac or Kohler more reliable long-term?",
      a: "Both brands are reliable when properly maintained. Generac has a larger installed base, so failure data is more visible, but their failure rates are comparable to Kohler's. The biggest reliability factor isn't the brand — it's whether you do the annual oil change and run the weekly exercise cycle. A neglected Kohler will fail before a maintained Generac, and vice versa.",
    },
    {
      q: "Can I switch from Generac to Kohler (or vice versa) later?",
      a: "Yes, but it's basically a full reinstall. The transfer switch, concrete pad, and gas line can usually be reused, but the electrical connections and mounting will need to be redone. Budget 60-70% of a new installation cost. Most people don't switch brands — they upgrade within the same brand when they need more capacity.",
    },
    {
      q: "Which brand do electricians and installers recommend most?",
      a: "Most installers recommend Generac because they're certified Generac dealers and stock Generac parts. That's not a knock on the product — it's genuinely good. Kohler-certified installers obviously recommend Kohler. The honest answer: both brands are solid, and the installer's familiarity with the product matters more than the brand name on the unit.",
    },
    {
      q: "Are Kohler generators worth the extra cost?",
      a: "If noise is your top priority (unit near a bedroom or patio), yes. Kohler runs 2-3 dB quieter, which is noticeable. If you're on a budget or live in a rural area where noise isn't a concern, the Generac Guardian delivers the same power for $800-$2,000 less. The extra money doesn't buy you more reliability — just a quieter, more refined unit.",
    },
    {
      q: "Do Generac and Kohler use the same engines?",
      a: "No. Generac manufactures their own G-Force engines in-house. Kohler uses engines from various suppliers depending on the model, including their own proprietary designs for larger units. Both are purpose-built for standby generator duty (low RPM, long-idle operation), not repurposed lawnmower engines.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
          <nav className="text-sm text-[var(--color-text-light)]">
            <Link href="/" className={intLink}>HomeGen</Link>
            {" / "}
            <Link href="/#guides" className={intLink}>Guides</Link>
            {" / "}
            <span className="text-[var(--color-text-body)]">Generac vs Kohler</span>
          </nav>
        </div>

        <article className="mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6">
          {/* H1 */}
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-dark)] sm:text-4xl lg:text-5xl">
            Generac vs Kohler: Which Home Generator Is Better in 2026?
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-light)]">
            Last updated: April 2026
          </p>

          {/* P0 — Direct answer */}
          <div className="mt-6 rounded-xl border-l-4 border-[var(--color-primary-cyan)] bg-[var(--color-bg-light)] p-5">
            <p className="text-base font-medium text-[var(--color-text-dark)] leading-relaxed">
              <strong>Generac</strong> is the better choice for most homeowners.
              It costs $800-$2,000 less than Kohler at the same kW, has the
              largest dealer/service network in the US, and dominates ~75% of the
              residential market. <strong>Kohler</strong> is worth the premium if
              noise matters to you (2-3 dB quieter) or you want the most refined
              build quality. Both are reliable. Your installer matters more than
              the logo on the unit.
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
              Generac and Kohler are the two names that come up in every
              generator conversation. Between them, they power most of the
              standby generators in American homes. But they&apos;re not
              interchangeable, and picking the wrong one can cost you money or
              leave you with a service headache down the road.
            </p>
            <p>
              I&apos;ve spent months digging into spec sheets, installer
              feedback, and owner reviews for both brands. This isn&apos;t a
              rewrite of the manufacturer brochure. It&apos;s what I&apos;d tell
              you if you were sitting across the table asking which one to buy.
            </p>
            <p>
              Not sure what size you need yet? Figure that out first with our{" "}
              <Link href="/guides/generator-size-calculator" className={intLink}>
                generator sizing guide
              </Link>
              . Size matters more than brand.
            </p>
          </div>

          {/* ===== MAIN COMPARISON TABLE ===== */}
          <div className="mt-10 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr>
                  <th className={thClass}>Feature</th>
                  <th className={thClass}>
                    <a href="https://www.generac.com/all-products/generators/home-backup-generators/guardian" target="_blank" rel="noopener noreferrer" className={extLink}>
                      Generac Guardian 22 kW
                    </a>
                  </th>
                  <th className={thClass}>
                    <a href="https://www.kohlerpower.com/na/en/residential/generators.html" target="_blank" rel="noopener noreferrer" className={extLink}>
                      Kohler 20RCAL
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price (unit only)", "$5,000 – $6,500", "$5,800 – $8,000"],
                  ["Engine", "Generac G-Force 999cc", "Kohler Command PRO"],
                  ["Noise Level", "67 dB", "65 dB"],
                  ["Warranty", "5 years (10 yr available)", "5 years (extendable)"],
                  ["Transfer Switch", "200A included", "200A included"],
                  ["Fuel Options", "Natural gas / LP", "Natural gas / LP"],
                  ["US Market Share", "~75%", "~15%"],
                  ["Mobile App", "Mobile Link (WiFi)", "OnCue Plus (WiFi)"],
                  ["Dealer Network", "8,000+ dealers nationwide", "~3,000 dealers"],
                ].map(([feature, generac, kohler]) => (
                  <tr key={feature}>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>{feature}</td>
                    <td className={tdClass}>{generac}</td>
                    <td className={tdClass}>{kohler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== PRICE ===== */}
          <h2
            id="price"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            How Do Generac and Kohler Compare on Price?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Generac is cheaper. Not by a little, either. At every comparable
              kW rating, the{" "}
              <a href="https://www.generac.com/all-products/generators/home-backup-generators/guardian" target="_blank" rel="noopener noreferrer" className={extLink}>
                Generac Guardian
              </a>{" "}
              runs $800-$2,000 less than the equivalent{" "}
              <a href="https://www.kohlerpower.com/na/en/residential/generators.html" target="_blank" rel="noopener noreferrer" className={extLink}>
                Kohler
              </a>
              . Here&apos;s what that looks like across the lineup:
            </p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr>
                  <th className={thClass}>Segment</th>
                  <th className={thClass}>Generac</th>
                  <th className={thClass}>Kohler</th>
                  <th className={thClass}>Difference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Air-cooled 14 kW", "$3,200 – $4,500", "$4,200 – $5,500", "$800 – $1,000"],
                  ["Air-cooled 20-22 kW", "$5,000 – $6,500", "$5,800 – $8,000", "$800 – $1,500"],
                  ["Air-cooled 24-26 kW", "$5,500 – $10,000", "$7,000 – $11,000", "$1,000 – $2,000"],
                  ["Liquid-cooled 30-48 kW", "$9,000 – $22,000", "$11,000 – $25,000", "$2,000 – $3,000"],
                ].map(([segment, generac, kohler, diff]) => (
                  <tr key={segment}>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>{segment}</td>
                    <td className={tdClass}>{generac}</td>
                    <td className={tdClass}>{kohler}</td>
                    <td className={`${tdClass} text-[var(--color-primary-cyan)] font-medium`}>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              These are equipment-only prices. Installation costs are roughly the
              same for both brands since the labor doesn&apos;t change. For a
              full installed cost breakdown, see our{" "}
              <Link href="/guides/generator-installation-cost" className={intLink}>
                installation cost guide
              </Link>
              .
            </p>
            <p>
              The price gap matters most in the 20-22 kW sweet spot where most
              homeowners buy. On a $12,000 installed project, saving $1,200 on
              the unit is a 10% reduction. That&apos;s real money.
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/get-quotes?source=generac-vs-kohler" className={`text-sm font-medium ${intLink}`}>
              Compare installed quotes for both brands →
            </Link>
          </div>

          {/* ===== RELIABILITY ===== */}
          <h2
            id="reliability"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Which Brand Is More Reliable?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              This is where the internet arguments get heated. And the honest
              answer is: they&apos;re close. Really close.
            </p>
            <p>
              <a href="https://www.consumerreports.org/generators/best-standby-generators/" target="_blank" rel="noopener noreferrer" className={extLink}>
                Consumer Reports
              </a>{" "}
              rates both Generac and Kohler as &quot;Recommended&quot; in their
              standby generator category, with Kohler edging ahead slightly in
              predicted reliability scores. But the margin is small enough that
              it could flip year to year.
            </p>
            <p>
              Here&apos;s what matters more than the brand sticker:
              maintenance. Both manufacturers require annual oil changes, air
              filter replacement, and a weekly exercise cycle (the generator
              starts itself for 10-15 minutes to keep seals lubricated and
              the battery charged). Skip that for two years and either brand
              will let you down when the next storm hits.
            </p>
            <p>
              Generac has a larger installed base (roughly 3 out of 4
              residential standby generators in the US are Generac), so you
              see more Generac failure reports in forums. That&apos;s a volume
              thing, not a quality thing. If Kohler had 75% market share,
              you&apos;d see the same complaints about Kohler.
            </p>
            <p>
              J.D. Power&apos;s home improvement satisfaction surveys
              consistently rate both brands above average for owner
              satisfaction. The gap between them is smaller than the gap between
              either of them and the budget brands.
            </p>
          </div>

          {/* ===== NOISE ===== */}
          <h2
            id="noise"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Which Generator Is Quieter?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Kohler wins here. No contest.
            </p>
            <p>
              The Kohler 20RCAL runs at about 65 dB at full load. The Generac
              Guardian 22 kW hits 67 dB. That 2-3 dB difference doesn&apos;t
              sound like much on paper, but decibels are logarithmic. In
              practice, it&apos;s noticeable. Kohler sounds more like a
              steady hum; Generac has a bit more engine growl to it.
            </p>
            <p>
              This matters if your generator sits 5 feet from a bedroom window
              or near your patio. It matters less if the unit is 30 feet from
              the house behind a fence. For context, 65 dB is roughly the
              volume of a normal conversation. 67 dB is a louder conversation.
              Neither will drown out your TV, but on a quiet night,
              you&apos;ll hear both.
            </p>
            <p>
              Kohler&apos;s noise advantage comes from their engine design and
              enclosure. Their composite enclosures absorb more vibration than
              Generac&apos;s steel enclosures. If noise is genuinely your #1
              concern, Kohler is worth the premium. If you can put the
              generator on the far side of the house, save the money and go
              Generac.
            </p>
            <p>
              The NFPA requires generators to be installed at least 5 feet
              from windows and doors (per NFPA 37), and most local codes
              extend that to 18-24 inches from the home exterior. Placement
              affects perceived noise as much as the unit itself.
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/get-quotes?source=generac-vs-kohler" className={`text-sm font-medium ${intLink}`}>
              Get quotes and discuss noise with local installers →
            </Link>
          </div>

          {/* ===== WARRANTY ===== */}
          <h2
            id="warranty"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            How Does Warranty Coverage Compare?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Both brands offer 5-year limited warranties as standard. Both
              allow you to purchase extended coverage up to 10 years. The
              devil is in the details:
            </p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr>
                  <th className={thClass}>Warranty Detail</th>
                  <th className={thClass}>Generac</th>
                  <th className={thClass}>Kohler</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Standard warranty", "5 years", "5 years"],
                  ["Extended available", "Up to 10 years", "Up to 10 years"],
                  ["Extended cost", "$500 – $900", "$600 – $1,000"],
                  ["Covers labor?", "Parts only (standard)", "Parts only (standard)"],
                  ["Registration required?", "Yes, within 90 days", "Yes, within 90 days"],
                  ["Maintenance required?", "Yes, annual service", "Yes, annual service"],
                ].map(([detail, generac, kohler]) => (
                  <tr key={detail}>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>{detail}</td>
                    <td className={tdClass}>{generac}</td>
                    <td className={tdClass}>{kohler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Here&apos;s the catch with both warranties: they require proof
              of annual maintenance. Skip a service visit and the warranty can
              be voided. Keep your maintenance receipts.
            </p>
            <p>
              Generac&apos;s extended warranty is slightly cheaper, which
              tracks with their overall pricing advantage. But the coverage
              terms are nearly identical. This isn&apos;t a differentiator.
            </p>
          </div>

          {/* ===== DEALER SUPPORT ===== */}
          <h2
            id="dealer-support"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Which Has Better Dealer and Service Support?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Generac, by a wide margin. And this might be the most important
              factor in the whole comparison.
            </p>
            <p>
              Generac has over 8,000 certified dealers in the US. Kohler has
              about 3,000. That means in many markets, especially rural areas
              and smaller metros, there might be 5 Generac-certified
              installers for every 1 Kohler installer. That affects three
              things: quote competition (more quotes = better prices), parts
              availability (Generac parts are stocked everywhere), and service
              response time (if your unit needs repair during a storm, the
              guy who can fix a Generac will show up faster).
            </p>
            <p>
              In major metros like{" "}
              <Link href="/generator-installation/florida" className={intLink}>
                Miami
              </Link>{" "}
              or{" "}
              <Link href="/generator-installation/texas" className={intLink}>
                Houston
              </Link>
              , you&apos;ll find plenty of both. But in a mid-size city in
              Michigan or Tennessee? Generac dominance is real, and it
              matters when something breaks at 2 AM during an ice storm.
            </p>
            <p>
              Both brands offer WiFi monitoring apps (Generac Mobile Link,
              Kohler OnCue Plus) that let you check generator status from your
              phone. Generac&apos;s app is more mature and has better reviews.
              Kohler&apos;s OnCue Plus has improved a lot recently but still
              gets occasional complaints about connectivity.
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/get-quotes?source=generac-vs-kohler" className={`text-sm font-medium ${intLink}`}>
              Find Generac and Kohler certified installers near you →
            </Link>
          </div>

          {/* ===== VERDICT ===== */}
          <h2
            id="verdict"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Which Should I Choose for My Home?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              There&apos;s no single right answer, but there is a right answer
              for your situation. Here&apos;s the decision tree:
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border-2 border-[var(--color-primary-cyan)]/20 bg-[var(--color-primary-cyan)]/5 p-5 sm:p-6">
              <h3 className="text-base font-bold text-[var(--color-text-dark)]">
                Choose Generac if...
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-body)]">
                <li>• You want the best value for the money (same power output, lower price)</li>
                <li>• You live in a rural area or small metro where Kohler dealers are scarce</li>
                <li>• Fast parts availability matters to you (Generac parts are everywhere)</li>
                <li>• You want the widest selection of kW sizes and configurations</li>
                <li>• You&apos;re price-sensitive and the $800-$2,000 savings makes a difference</li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-[var(--color-primary-mint)]/20 bg-[var(--color-primary-mint)]/5 p-5 sm:p-6">
              <h3 className="text-base font-bold text-[var(--color-text-dark)]">
                Choose Kohler if...
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-body)]">
                <li>• Noise is your top priority (unit near a bedroom, patio, or neighbor&apos;s property line)</li>
                <li>• You want the most polished build quality and are willing to pay for it</li>
                <li>• You live in a major metro with good Kohler dealer coverage</li>
                <li>• You prefer a &quot;premium&quot; brand and the price difference doesn&apos;t bother you</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5 sm:p-6">
              <h3 className="text-base font-bold text-[var(--color-text-dark)]">
                It honestly doesn&apos;t matter if...
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-body)]">
                <li>• You have a good local installer who services both brands. The installer&apos;s skill and responsiveness matter more than the logo on the generator.</li>
                <li>• You&apos;re comparing reliability only. Both brands will last 15-20 years with proper maintenance. Flip a coin.</li>
                <li>• Your generator is 30+ feet from the house. The noise difference becomes irrelevant at that distance.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Bottom line: if you&apos;re agonizing over this decision,
              stop. Get quotes from 2-3 local installers, ask which brand
              they&apos;re certified for, and compare the installed prices.
              The right brand is the one with the best installer in your
              area. Use our{" "}
              <Link href="/calculator" className={intLink}>
                cost calculator
              </Link>{" "}
              to get a ballpark, then get real quotes.
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link href="/get-quotes?source=generac-vs-kohler" className={`text-sm font-medium ${intLink}`}>
              Get free quotes from both Generac and Kohler installers →
            </Link>
          </div>

          {/* ===== FAQ ===== */}
          <h2
            id="faq"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-8">
            {faq.map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                  {item.q}
                </h3>
                <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-14 flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5 sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] text-lg font-bold text-white">
              LB
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-dark)]">
                Lyes Boussouf
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-light)]">
                Founder &amp; Home Energy Specialist
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-body)] leading-relaxed">
                Lyes has reviewed specs, pricing data, and installer feedback
                for every major generator brand sold in the US. This guide is
                reviewed by licensed electricians and generator installation
                professionals who install both Generac and Kohler products.
              </p>
              <div className="mt-2 flex gap-3">
                <Link href="/about" className={`text-xs ${intLink}`}>About us</Link>
                <Link href="/contact" className={`text-xs ${intLink}`}>Contact</Link>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-[var(--color-bg-dark)] to-[#1E293B] p-8 text-center sm:p-10">
            <p className="text-lg text-white leading-relaxed">
              The best way to compare Generac and Kohler for your home is to
              get real quotes from certified installers in your area. It&apos;s
              free and takes 2 minutes.
            </p>
            <Link
              href="/get-quotes?source=generac-vs-kohler"
              className="btn-gradient mt-6 inline-block rounded-xl px-8 py-4 text-base"
            >
              Get Free Quotes from Local Installers →
            </Link>
          </div>
        </article>

        {/* Schema — Article with citations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Generac vs Kohler: Which Home Generator Is Better in 2026?",
              description:
                "Side-by-side comparison of Generac and Kohler home generators covering price, reliability, noise, warranty, and dealer support.",
              author: {
                "@type": "Person",
                name: "Lyes Boussouf",
                url: "https://homegen.co/about",
                jobTitle: "Founder & Home Energy Specialist",
                worksFor: {
                  "@type": "Organization",
                  name: "HomeGen",
                  url: "https://homegen.co",
                },
                knowsAbout: [
                  "Home standby generators",
                  "Generac generators",
                  "Kohler generators",
                  "Generator brand comparison",
                ],
              },
              publisher: {
                "@type": "Organization",
                name: "HomeGen",
                url: "https://homegen.co",
                logo: {
                  "@type": "ImageObject",
                  url: "https://homegen.co/logo.png",
                },
              },
              datePublished: "2026-04-09",
              dateModified: "2026-04-09",
              mainEntityOfPage:
                "https://homegen.co/guides/generac-vs-kohler",
              citation: [
                {
                  "@type": "CreativeWork",
                  name: "Best Standby Generators Buying Guide",
                  author: {
                    "@type": "Organization",
                    name: "Consumer Reports",
                  },
                  url: "https://www.consumerreports.org/generators/best-standby-generators/",
                },
                {
                  "@type": "CreativeWork",
                  name: "Home Improvement Satisfaction Study",
                  author: {
                    "@type": "Organization",
                    name: "J.D. Power",
                  },
                },
                {
                  "@type": "CreativeWork",
                  name: "NFPA 37: Standard for the Installation and Use of Stationary Combustion Engines and Gas Turbines",
                  author: {
                    "@type": "Organization",
                    name: "National Fire Protection Association",
                  },
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
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-border)] bg-white/95 px-4 py-3 backdrop-blur-sm sm:hidden">
          <Link
            href="/get-quotes?source=generac-vs-kohler"
            className="btn-gradient block rounded-lg py-3 text-center text-sm font-semibold"
          >
            Get Free Quotes →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
