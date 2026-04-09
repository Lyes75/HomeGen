import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title:
    "Generator Installation Cost Guide 2026 — Breakdown by State, Size & Brand | HomeGen",
  description:
    "How much does it cost to install a home generator in 2026? Full breakdown by size (10-48 kW), state, and brand. Average cost: $8,000-$15,000. Get free quotes.",
  alternates: {
    canonical: "https://homegen.co/guides/generator-installation-cost",
  },
  openGraph: {
    title: "Generator Installation Cost (2026) | HomeGen",
    description:
      "Full cost breakdown by generator size, state, and brand. $8,000-$15,000 average. Free quotes.",
    url: "https://homegen.co/guides/generator-installation-cost",
    type: "article",
  },
};

const tocItems = [
  { id: "cost-by-size", label: "What does it cost by generator size?" },
  { id: "cost-breakdown", label: "What's included in the price?" },
  { id: "cost-by-state", label: "How much in my state?" },
  { id: "cost-by-brand", label: "Does the brand affect the price?" },
  { id: "reduce-cost", label: "How can I reduce the cost?" },
  { id: "calculator", label: "Free Calculator" },
  { id: "faq", label: "FAQ" },
];

export default function GeneratorCostGuide() {
  const thClass =
    "px-4 py-3 text-left text-sm font-semibold text-[var(--color-text-dark)] bg-[var(--color-bg-light)]";
  const tdClass =
    "px-4 py-3 text-sm text-[var(--color-text-body)] border-t border-[var(--color-border)]";
  const extLink =
    "text-[var(--color-primary-cyan)] hover:underline";
  const intLink =
    "text-[var(--color-primary-cyan)] hover:underline";

  const faq = [
    {
      q: "How much does a whole-house generator cost fully installed?",
      a: "A whole-house standby generator typically costs $8,000 to $15,000 fully installed for a standard 20-22 kW unit. This includes the generator, automatic transfer switch, concrete pad, gas line connection, electrical work, and permits. Larger homes or high-cost states like California can push the total above $20,000.",
    },
    {
      q: "Is it cheaper to install a generator yourself?",
      a: "No. Standby generator installation requires a licensed electrician for the transfer switch wiring and, in most states, a plumber or gas fitter for the fuel connection. DIY installation voids most manufacturer warranties and violates building codes in virtually every US jurisdiction.",
    },
    {
      q: "How much does it cost to run a home generator per day?",
      a: "Running costs depend on fuel type and load. A 22 kW generator on natural gas costs roughly $30-$50 per day at half load. Propane costs about $40-$60 per day. Diesel is the most expensive at $50-$70 per day. Most outages last 8-24 hours, so a single event typically costs $20-$50 in fuel.",
    },
    {
      q: "Does a home generator increase my property value?",
      a: "Yes. According to Remodeling Magazine's Cost vs. Value report, a standby generator recoups roughly 50-75% of its cost at resale. In hurricane-prone states like Florida and Texas, that number can be higher because buyers actively look for backup power.",
    },
    {
      q: "How long does generator installation take?",
      a: "The on-site installation takes 1-2 days. But the full timeline from contract to power-on is usually 2-6 weeks, depending on permit approval times in your area and equipment availability. During hurricane season, lead times can stretch to 8-12 weeks.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
          <nav className="text-sm text-[var(--color-text-light)]">
            <Link href="/" className={intLink}>
              HomeGen
            </Link>
            {" / "}
            <Link href="/#guides" className={intLink}>
              Guides
            </Link>
            {" / "}
            <span className="text-[var(--color-text-body)]">
              Generator Installation Cost
            </span>
          </nav>
        </div>

        <article className="mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6">
          {/* H1 */}
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-dark)] sm:text-4xl lg:text-5xl">
            How Much Does It Cost to Install a Home Generator in 2026?
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-light)]">
            Last updated: April 2026
          </p>

          {/* P0 — Direct answer block */}
          <div className="mt-6 rounded-xl border-l-4 border-[var(--color-primary-cyan)] bg-[var(--color-bg-light)] p-5">
            <p className="text-base font-medium text-[var(--color-text-dark)] leading-relaxed">
              The average cost to install a home standby generator in 2026 is{" "}
              <strong>$8,000 to $15,000</strong>, including equipment, labor,
              transfer switch, and permits. A standard 22 kW unit costs about
              $12,000. The three biggest price factors are generator size (kW),
              your state (labor rates and permits), and the brand you choose.
            </p>
          </div>

          {/* TOC */}
          <nav className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5">
            <p className="mb-3 text-sm font-semibold text-[var(--color-text-dark)]">
              In this guide
            </p>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={`text-sm ${intLink}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Intro */}
          <div className="mt-10 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p className="text-lg">
              Generator installation isn&apos;t cheap. But it&apos;s one of
              those purchases where knowing the real numbers ahead of time saves
              you from overpaying or buying the wrong size. This guide breaks
              down every cost component so you can walk into a quote meeting and
              know exactly what&apos;s fair.
            </p>
            <p>
              Not sure what size you need yet? Start with our{" "}
              <Link href="/guides/generator-size-calculator" className={intLink}>
                generator sizing guide
              </Link>{" "}
              first. Size drives cost more than anything else.
            </p>
          </div>

          {/* ===== COST BY SIZE ===== */}
          <h2
            id="cost-by-size"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            What&apos;s the Average Cost by Generator Size?
          </h2>

          <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
            Size is the single biggest cost driver. A 10 kW unit for essential
            circuits costs half as much as a 22 kW whole-house system. Here&apos;s
            the full breakdown for 2026:
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr>
                  <th className={thClass}>Size</th>
                  <th className={thClass}>Equipment</th>
                  <th className={thClass}>Installation</th>
                  <th className={`${thClass} font-bold`}>Total Installed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["10 kW", "$2,500 – $3,800", "$3,000 – $5,000", "$5,500 – $8,800"],
                  ["14 kW", "$3,200 – $4,500", "$3,200 – $5,200", "$6,400 – $9,700"],
                  ["16 kW", "$3,800 – $5,200", "$3,300 – $5,500", "$7,100 – $10,700"],
                  ["20 kW", "$4,500 – $6,000", "$3,500 – $5,800", "$8,000 – $11,800"],
                  ["22 kW", "$5,000 – $7,000", "$3,500 – $6,000", "$8,500 – $13,000"],
                  ["24 kW", "$5,500 – $8,000", "$3,800 – $6,200", "$9,300 – $14,200"],
                  ["26 kW", "$6,500 – $10,000", "$4,000 – $6,500", "$10,500 – $16,500"],
                  ["30 kW*", "$9,000 – $13,000", "$4,500 – $7,500", "$13,500 – $20,500"],
                  ["36 kW*", "$11,000 – $16,000", "$5,000 – $8,000", "$16,000 – $24,000"],
                  ["48 kW*", "$14,000 – $22,000", "$5,500 – $9,000", "$19,500 – $31,000"],
                ].map(([size, equip, install, total]) => (
                  <tr key={size}>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>
                      {size}
                    </td>
                    <td className={tdClass}>{equip}</td>
                    <td className={tdClass}>{install}</td>
                    <td className={`${tdClass} font-semibold text-[var(--color-text-dark)]`}>
                      {total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-[var(--color-text-light)]">
            * Liquid-cooled units. All others are air-cooled.
          </p>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              The sweet spot for most homeowners is the 20-22 kW range. That
              covers central AC, all major appliances, and a home office for a
              typical 2,000 sq ft house. Below 16 kW and you&apos;re giving up
              AC. Above 26 kW and you&apos;re in commercial territory with
              liquid-cooled systems that cost 50-70% more.
            </p>
            <p>
              Use our{" "}
              <Link href="/calculator" className={intLink}>
                detailed calculator
              </Link>{" "}
              to get a personalized estimate based on your exact appliances.
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/get-quotes?source=cost-guide"
              className={`text-sm font-medium ${intLink}`}
            >
              Get exact pricing for your home →
            </Link>
          </div>

          {/* ===== COST BREAKDOWN ===== */}
          <h2
            id="cost-breakdown"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            What&apos;s Included in the Installation Cost?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              When an installer quotes you $12,000 for a 22 kW generator,
              here&apos;s where that money actually goes:
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {[
              {
                label: "Generator unit",
                range: "$5,000 – $7,000",
                desc: "The generator itself. This is the single biggest line item. Prices vary by brand, size, and whether it's air-cooled or liquid-cooled.",
              },
              {
                label: "Automatic Transfer Switch (ATS)",
                range: "$800 – $2,000",
                desc: "Detects when utility power drops and switches your home to generator power in seconds. This is required — not optional. A 200-amp ATS is standard for most homes.",
              },
              {
                label: "Installation labor",
                range: "$1,500 – $3,000",
                desc: "Electrical wiring from the generator to your panel, ATS installation, startup and testing. Expect 1-2 days of on-site work by a licensed electrician.",
              },
              {
                label: "Concrete pad",
                range: "$500 – $1,200",
                desc: "The generator sits on a level concrete or composite pad. Some installers pour a new pad; others use pre-fab pads that cost less.",
              },
              {
                label: "Gas line connection",
                range: "$500 – $1,500",
                desc: "Running a dedicated gas line from your meter to the generator. Distance matters. If the generator is 50+ feet from the gas meter, this gets expensive.",
              },
              {
                label: "Permits and inspection",
                range: "$50 – $500",
                desc: "Electrical permit is required in virtually every US municipality. Some areas also require a plumbing/gas permit. Your installer usually handles this.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[var(--color-border)] p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[var(--color-text-dark)]">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-[var(--color-primary-cyan)]">
                    {item.range}
                  </p>
                </div>
                <p className="mt-1.5 text-sm text-[var(--color-text-body)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[var(--color-text-body)] leading-relaxed">
            <p>
              According to the{" "}
              <a
                href="https://www.census.gov/construction/c30/c30index.html"
                target="_blank"
                rel="noopener noreferrer"
                className={extLink}
              >
                U.S. Census Bureau&apos;s construction spending data
              </a>
              , residential electrical work costs have risen 12-15% since 2022,
              driven by labor shortages and material costs. That tracks with what
              we&apos;re seeing in generator installation quotes across the
              country.
            </p>
          </div>

          {/* ===== COST BY STATE ===== */}
          <h2
            id="cost-by-state"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            How Much Does Generator Installation Cost in My State?
          </h2>

          <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
            Where you live changes the price dramatically. A 22 kW Generac that
            costs $11,000 installed in Tennessee might run $18,000+ in
            California. Here&apos;s why, and what to expect in each state:
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[580px]">
              <thead>
                <tr>
                  <th className={thClass}>State</th>
                  <th className={thClass}>22 kW Installed</th>
                  <th className={thClass}>Cost Factor</th>
                  <th className={thClass}>Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Florida", "$9,000 – $14,000", "Average", "High demand, competitive market, hurricane-driven volume"],
                  ["Texas", "$8,500 – $13,500", "Below avg", "Lower labor costs, strong installer competition"],
                  ["Louisiana", "$8,000 – $12,500", "Below avg", "Lower cost of living, high outage frequency drives volume"],
                  ["Georgia", "$8,500 – $13,500", "Below avg", "Moderate labor, growing market"],
                  ["California", "$13,000 – $22,000", "55% above", "Seismic bracing required, strict permits, high labor"],
                  ["New York", "$11,000 – $18,000", "35% above", "High labor rates, complex permitting in tri-state area"],
                  ["Michigan", "$8,500 – $13,000", "Below avg", "Midwest labor rates, straightforward permitting"],
                ].map(([state, range, factor, why]) => (
                  <tr key={state}>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>
                      <Link
                        href={`/generator-installation/${(state as string).toLowerCase().replace(/\s+/g, "-")}`}
                        className={intLink}
                      >
                        {state}
                      </Link>
                    </td>
                    <td className={tdClass}>{range}</td>
                    <td className={tdClass}>{factor}</td>
                    <td className={`${tdClass} text-xs`}>{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              California deserves special mention. The state requires seismic
              bracing for outdoor equipment, Title 24 energy compliance
              documentation, and local fire department setback approvals in
              wildfire zones. HomeAdvisor reports that California generator
              installations cost 50-70% more than the national average, and
              our data confirms that range.
            </p>
            <p>
              For{" "}
              <Link href="/generator-installation/florida" className={intLink}>
                Florida
              </Link>
              {" "}and{" "}
              <Link href="/generator-installation/texas" className={intLink}>
                Texas
              </Link>
              , the good news is competition. These states have so many
              installers that prices stay reasonable even during peak hurricane
              season. Just don&apos;t wait until a storm is in the forecast to
              start shopping. Lead times double overnight.
            </p>
            <p>
              See all pricing by state on our{" "}
              <Link href="/states" className={intLink}>
                state-by-state directory
              </Link>
              .
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/get-quotes?source=cost-guide"
              className={`text-sm font-medium ${intLink}`}
            >
              Get local quotes for your state →
            </Link>
          </div>

          {/* ===== COST BY BRAND ===== */}
          <h2
            id="cost-by-brand"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Does the Brand Affect the Installation Price?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Yes, but less than you&apos;d think. Installation labor is roughly
              the same regardless of brand. The price difference is almost
              entirely in the unit itself. Here&apos;s how the major brands
              stack up for a 20-22 kW unit:
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {[
              {
                brand: "Generac Guardian",
                range: "$5,000 – $6,500",
                position: "Market leader (~75% share). Best dealer network, fastest parts availability. The Honda Civic of generators: reliable, well-priced, everywhere.",
                link: "https://www.generac.com/all-products/generators/home-backup-generators/guardian",
              },
              {
                brand: "Generac Protector (liquid-cooled)",
                range: "$9,000 – $16,000",
                position: "For large homes (30+ kW). Quieter and longer-lasting than air-cooled, but significantly more expensive. Only needed above 26 kW.",
                link: "https://www.generac.com/all-products/generators/home-backup-generators/protector",
              },
              {
                brand: "Kohler",
                range: "$5,800 – $8,000",
                position: "Premium build quality, slightly quieter operation. Smaller dealer network than Generac. Popular in the Northeast and with homeowners who want the \"premium\" option.",
                link: "https://www.kohlerpower.com/na/en/residential/generators.html",
              },
              {
                brand: "Briggs & Stratton",
                range: "$4,200 – $5,500",
                position: "Budget-friendly option. Solid reliability but fewer features. The company went through bankruptcy in 2020 and was acquired, so parts availability can be spotty in some areas.",
                link: null,
              },
              {
                brand: "Champion",
                range: "$3,800 – $5,000",
                position: "Lowest price point for standby generators. Popular for essential-circuits-only setups. Limited dealer/service network compared to Generac and Kohler.",
                link: null,
              },
            ].map((item) => (
              <div
                key={item.brand}
                className="rounded-xl border border-[var(--color-border)] p-4 sm:p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-[var(--color-text-dark)]">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={extLink}
                      >
                        {item.brand}
                      </a>
                    ) : (
                      item.brand
                    )}
                  </h3>
                  <p className="shrink-0 text-sm font-medium text-[var(--color-primary-cyan)]">
                    {item.range}
                  </p>
                </div>
                <p className="mt-1.5 text-sm text-[var(--color-text-body)]">
                  {item.position}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Consumer Reports rates Generac and Kohler as the top two standby
              generator brands for reliability and owner satisfaction. For a
              detailed head-to-head, read our{" "}
              <Link href="/guides/generac-vs-kohler" className={intLink}>
                Generac vs Kohler comparison
              </Link>
              .
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/get-quotes?source=cost-guide"
              className={`text-sm font-medium ${intLink}`}
            >
              Compare installer quotes for your preferred brand →
            </Link>
          </div>

          {/* ===== REDUCE COST ===== */}
          <h2
            id="reduce-cost"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            How Can I Reduce My Generator Installation Cost?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              You&apos;re not going to negotiate the price of the generator
              unit. That&apos;s set by the manufacturer. But there&apos;s real
              money to save on the installation side:
            </p>

            <p>
              <strong className="text-[var(--color-text-dark)]">
                Get 3 quotes, minimum.
              </strong>{" "}
              Installation labor varies wildly between companies. We&apos;ve
              seen $2,000 differences on the same job in the same city. The
              NFPA recommends using only licensed electrical contractors for
              generator installations, but within that pool, prices vary a lot.
              Getting multiple bids is the single best way to save money.
            </p>

            <p>
              <strong className="text-[var(--color-text-dark)]">
                Place the generator close to your gas meter and electrical
                panel.
              </strong>{" "}
              Every extra foot of gas line and electrical conduit adds cost.
              If you can keep the generator within 20 feet of both, you&apos;ll
              save $500-$1,000 on the install.
            </p>

            <p>
              <strong className="text-[var(--color-text-dark)]">
                Consider a load management system.
              </strong>{" "}
              Instead of buying a 26 kW generator to cover everything, a smart
              transfer switch with load shedding lets you use a smaller (cheaper)
              unit by cycling non-critical loads. Your AC and electric dryer
              never run at the exact same time, but you probably won&apos;t
              notice.
            </p>

            <p>
              <strong className="text-[var(--color-text-dark)]">
                Buy off-season.
              </strong>{" "}
              Generator prices don&apos;t change much seasonally, but installer
              availability does. In{" "}
              <Link href="/generator-installation/florida" className={intLink}>
                Florida
              </Link>{" "}
              and the Gulf Coast, fall and winter are the slow months. Installers
              are more willing to compete on price when they&apos;re not
              booked solid.
            </p>

            <p>
              <strong className="text-[var(--color-text-dark)]">
                Check for utility rebates.
              </strong>{" "}
              Some utility companies offer demand-response incentives for
              standby generators. The{" "}
              <a
                href="https://www.energy.gov/energysaver"
                target="_blank"
                rel="noopener noreferrer"
                className={extLink}
              >
                Department of Energy&apos;s Energy Saver program
              </a>{" "}
              lists federal and state programs. It&apos;s not a huge discount,
              but $200-$500 off is $200-$500 off.
            </p>

            <p>
              <strong className="text-[var(--color-text-dark)]">
                Finance it.
              </strong>{" "}
              Most major installer networks offer 60-120 month financing. A
              $12,000 generator at 120 months is about $100/month. Not free,
              but way more manageable than writing a $12K check.
            </p>
          </div>

          {/* ===== CALCULATOR ===== */}
          <h2
            id="calculator"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Estimate Your Cost with Our Free Calculator
          </h2>
          <p className="mt-3 text-[var(--color-text-body)] leading-relaxed">
            Plug in your home size, state, and fuel type to get a personalized
            estimate. For an appliance-by-appliance breakdown, use our{" "}
            <Link href="/calculator" className={intLink}>
              detailed calculator
            </Link>
            .
          </p>

          <div className="mt-6 -mx-4 sm:mx-0">
            <Calculator />
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/get-quotes?source=cost-guide"
              className={`font-medium ${intLink}`}
            >
              Want exact pricing? Get free quotes from local installers →
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
                Lyes researches home backup power systems, analyzes installer
                pricing data across all 50 states, and maintains HomeGen&apos;s
                cost estimation tools. This guide is reviewed by licensed
                electricians and generator installation professionals.
              </p>
              <div className="mt-2 flex gap-3">
                <Link
                  href="/about"
                  className={`text-xs ${intLink}`}
                >
                  About us
                </Link>
                <Link
                  href="/contact"
                  className={`text-xs ${intLink}`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-[var(--color-bg-dark)] to-[#1E293B] p-8 text-center sm:p-10">
            <p className="text-lg text-white leading-relaxed">
              Ready to get real quotes? Skip the guesswork and hear from 2-3
              certified installers in your area. It&apos;s free, fast, and
              no-obligation.
            </p>
            <Link
              href="/get-quotes?source=cost-guide"
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
                "How Much Does It Cost to Install a Home Generator in 2026?",
              description:
                "Full cost breakdown for home generator installation by size, state, and brand. Average cost $8,000-$15,000 including equipment, labor, and permits.",
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
                  "Generator installation costs",
                  "Home backup power systems",
                  "Generac generators",
                  "Kohler generators",
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
                "https://homegen.co/guides/generator-installation-cost",
              citation: [
                {
                  "@type": "CreativeWork",
                  name: "Construction Spending - Annual Value of Construction Put in Place",
                  author: {
                    "@type": "Organization",
                    name: "U.S. Census Bureau",
                  },
                  url: "https://www.census.gov/construction/c30/c30index.html",
                },
                {
                  "@type": "CreativeWork",
                  name: "Best Standby Generators Buying Guide",
                  author: {
                    "@type": "Organization",
                    name: "Consumer Reports",
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
                {
                  "@type": "CreativeWork",
                  name: "Cost vs. Value Report",
                  author: {
                    "@type": "Organization",
                    name: "Remodeling Magazine",
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
            href="/get-quotes?source=cost-guide"
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
