import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "What Size Generator Do I Need? Calculator & Sizing Guide (2026)",
  description:
    "Figure out exactly what size home generator you need. Use our free calculator, see wattage charts for every appliance, and avoid the #1 sizing mistake homeowners make.",
  alternates: {
    canonical: "https://homegen.co/guides/generator-size-calculator",
  },
  openGraph: {
    title: "What Size Generator Do I Need? | HomeGen",
    description:
      "Free calculator + expert sizing guide. Find the right kW for your home in 2 minutes.",
    url: "https://homegen.co/guides/generator-size-calculator",
    type: "article",
  },
};

const tocItems = [
  { id: "quick-answer", label: "What size generator does my home need?" },
  { id: "how-to-calculate", label: "How do I calculate the right size?" },
  { id: "calculator", label: "Free Calculator" },
  { id: "sizing-mistake", label: "What's the biggest sizing mistake?" },
  { id: "scenarios", label: "What size for my specific situation?" },
  { id: "air-vs-liquid", label: "Air-cooled or liquid-cooled?" },
  { id: "fuel-type", label: "Does fuel type change the size I need?" },
  { id: "faq", label: "FAQ" },
];

export default function GeneratorSizeGuide() {
  const thClass =
    "px-4 py-3 text-left text-sm font-semibold text-[var(--color-text-dark)] bg-[var(--color-bg-light)]";
  const tdClass =
    "px-4 py-3 text-sm text-[var(--color-text-body)] border-t border-[var(--color-border)]";

  const faq = [
    {
      q: "What size generator do I need for a 2,000 sq ft house?",
      a: "For a 2,000 sq ft home, you'll typically need a 16-20 kW generator for essential circuits, or a 22 kW unit for whole-house coverage including central air conditioning. The exact size depends on your AC tonnage and whether you have an electric or gas water heater, dryer, and range.",
    },
    {
      q: "Can a generator be too big for my house?",
      a: "Not really. An oversized unit wastes a bit of fuel at idle, but an undersized one will trip your breakers the first time your AC and dryer run at the same time.",
    },
    {
      q: "What's the difference between running watts and starting watts?",
      a: "Running watts is the continuous power an appliance draws during normal operation. Starting watts (or surge watts) is the brief spike when a motor kicks on, usually 2-3x the running wattage for a few seconds. Your generator must be sized to handle the highest starting surge.",
    },
    {
      q: "How long can a home generator run continuously?",
      a: "Most standby home generators can run continuously for days or even weeks, as long as they have fuel. Natural gas units connected to a gas line can run indefinitely. Propane units depend on tank size — a 500-gallon propane tank can power a 22 kW generator for roughly 7-10 days at 50% load.",
    },
    {
      q: "Do I need a permit to install a home generator?",
      a: "Yes, almost everywhere. Your installer handles it. Budget $50-$300.",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
          <nav className="text-sm text-[var(--color-text-light)]">
            <Link href="/" className="hover:text-[var(--color-primary-cyan)]">
              HomeGen
            </Link>
            {" / "}
            <Link
              href="/#guides"
              className="hover:text-[var(--color-primary-cyan)]"
            >
              Guides
            </Link>
            {" / "}
            <span className="text-[var(--color-text-body)]">
              Generator Size Calculator
            </span>
          </nav>
        </div>

        {/* Article */}
        <article className="mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6">
          {/* H1 */}
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-dark)] sm:text-4xl lg:text-5xl">
            What Size Generator Do I Need?
          </h1>
          <p className="mt-3 text-sm text-[var(--color-text-light)]">
            Last updated: April 2026
          </p>

          {/* P0 — Direct answer block for GEO */}
          <div className="mt-6 rounded-xl border-l-4 border-[var(--color-primary-cyan)] bg-[var(--color-bg-light)] p-5">
            <p className="text-base font-medium text-[var(--color-text-dark)] leading-relaxed">
              Most US homes need a <strong>16 to 22 kW standby generator</strong>.
              A 2,000 sq ft home with central AC typically requires a 20-22 kW unit.
              Essential-circuits-only setups (no AC, no dryer) can get by with 10-14 kW.
              Expect to pay <strong>$8,000-$15,000 installed</strong>, depending on size, brand, and location.
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5">
            <p className="mb-3 text-sm font-semibold text-[var(--color-text-dark)]">
              In this guide
            </p>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-[var(--color-primary-cyan)] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Intro */}
          <div className="mt-10 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p className="text-lg">
              The short answer: most homes need a{" "}
              <strong className="text-[var(--color-text-dark)]">
                16 to 22 kW generator
              </strong>
              . But that range is wide enough to mean a $3,000 difference in
              price, so getting it right matters.
            </p>
            <p>
              The slightly longer answer depends on three things: what you want
              to power, where you live, and whether you care about running your
              AC during an outage. Spoiler: you probably do, especially in{" "}
              <Link
                href="/generator-installation/florida"
                className="text-[var(--color-primary-cyan)] hover:underline"
              >
                Florida
              </Link>{" "}
              or{" "}
              <Link
                href="/generator-installation/texas"
                className="text-[var(--color-primary-cyan)] hover:underline"
              >
                Texas
              </Link>
              .
            </p>
            <p>
              This guide walks you through the exact math, gives you a cheat
              sheet by home size, and points out the one mistake that costs
              homeowners the most money. There&apos;s also a{" "}
              <a
                href="#calculator"
                className="text-[var(--color-primary-cyan)] hover:underline"
              >
                free calculator
              </a>{" "}
              below if you just want the quick answer.
            </p>
          </div>

          {/* Quick Answer */}
          <h2
            id="quick-answer"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            What Size Generator Does My Home Need?
          </h2>

          <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr>
                  <th className={thClass}>Home Size (sq ft)</th>
                  <th className={thClass}>Essential Circuits</th>
                  <th className={thClass}>Whole House</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["< 1,500", "10 – 14 kW", "16 – 20 kW"],
                  ["1,500 – 2,500", "14 – 18 kW", "20 – 22 kW"],
                  ["2,500 – 3,500", "18 – 22 kW", "22 – 24 kW"],
                  ["3,500 – 5,000", "22 – 24 kW", "24 – 26 kW"],
                  ["5,000+", "24+ kW", "30+ kW (liquid-cooled)"],
                ].map(([size, essential, whole]) => (
                  <tr key={size}>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>
                      {size}
                    </td>
                    <td className={tdClass}>{essential}</td>
                    <td className={tdClass}>{whole}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              &quot;Essential circuits&quot; means the basics: fridge, lights, a
              few outlets, your internet, and maybe your heating system.
              &quot;Whole house&quot; means everything stays on: central AC,
              electric dryer, oven, the works. The price gap between these two
              options is usually $2,000–$4,000, and most of that difference is
              the generator itself, not the installation. Most popular sizes
              come from{" "}
              <a href="https://www.generac.com/all-products/generators/home-backup-generators" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Generac</a>
              , which dominates the residential market. For a deeper dive into
              pricing, see our{" "}
              <Link href="/guides/generator-installation-cost" className="text-[var(--color-primary-cyan)] hover:underline">installation cost guide</Link>.
            </p>
            <p>
              If you live anywhere south of Virginia, you want whole-house
              coverage. Losing AC in July isn&apos;t just uncomfortable. It&apos;s
              a health risk, especially for kids and elderly family members.
              According to the{" "}
              <a href="https://www.energy.gov/ceser/electric-disturbance-events-oe-417-annual-summaries" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">U.S. Department of Energy</a>,
              major power disruption events have increased by over 60% in the
              last decade. And
              if you&apos;re spending $8,000+ on a generator install anyway, the
              marginal cost to go from &quot;some power&quot; to &quot;full
              power&quot; is worth it.
            </p>
          </div>

          {/* How to Calculate */}
          <h2
            id="how-to-calculate"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            How Do I Calculate What Size Generator I Need?
          </h2>

          {/* Step 1 */}
          <h3 className="mt-8 text-xl font-semibold text-[var(--color-text-dark)]">
            Step 1: List what you want to power
          </h3>
          <div className="mt-3 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Start with the non-negotiables: refrigerator, lights, phone
              chargers, Wi-Fi router. Then ask yourself — can I live without AC
              for 48 hours? If the answer is no (and for most people, it is),
              add your HVAC system to the list. That alone jumps you from 14 to 20+ kW. It&apos;s the single biggest factor in sizing.
            </p>
            <p>
              Don&apos;t forget sump pumps if you have a basement. Medical
              equipment too. A CPAP machine only draws 400 watts, but you
              absolutely cannot lose it during a storm. And if you work from
              home, your office setup (computer, monitors, router) is probably
              non-negotiable too.
            </p>
          </div>

          {/* Step 2 */}
          <h3 className="mt-8 text-xl font-semibold text-[var(--color-text-dark)]">
            Step 2: Look up the wattages
          </h3>
          <p className="mt-3 text-[var(--color-text-body)] leading-relaxed">
            I know, it&apos;s a lot of numbers. Bear with me. Here&apos;s a
            reference chart for the most common household appliances. Pay
            attention to the &quot;starting watts&quot; column. That&apos;s the
            one that matters most for sizing.
          </p>

          <div className="mt-5 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr>
                  <th className={thClass}>Appliance</th>
                  <th className={`${thClass} text-right`}>Running Watts</th>
                  <th className={`${thClass} text-right`}>Starting Watts</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Central AC (3 ton)", "3,500", "4,500"],
                  ["Central AC (5 ton)", "5,000", "6,500"],
                  ["Refrigerator", "700", "1,200"],
                  ["Electric Water Heater", "4,500", "4,500"],
                  ["Gas Furnace (blower)", "800", "1,300"],
                  ["Sump Pump", "800", "1,500"],
                  ["Well Pump (1/2 HP)", "1,000", "1,500"],
                  ["Electric Range / Oven", "3,000", "3,000"],
                  ["Microwave", "1,200", "1,200"],
                  ["Washer", "500", "1,200"],
                  ["Electric Dryer", "5,000", "6,000"],
                  ["Gas Dryer", "700", "1,800"],
                  ["10 Rooms of Lights (LED)", "500", "500"],
                  ["Garage Door Opener", "750", "1,400"],
                  ["Home Office Setup", "500", "500"],
                  ["Pool Pump", "2,500", "3,500"],
                  ["EV Charger (Level 2)", "7,200", "7,200"],
                  ["Security System", "200", "200"],
                  ["Wi-Fi Router + Modem", "50", "50"],
                  ["TV + Entertainment", "400", "400"],
                ].map(([name, running, starting]) => (
                  <tr key={name}>
                    <td className={`${tdClass} font-medium text-[var(--color-text-dark)]`}>
                      {name}
                    </td>
                    <td className={`${tdClass} text-right`}>{running}W</td>
                    <td className={`${tdClass} text-right`}>{starting}W</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Here&apos;s a detail most guides skip: starting watts matter more
              than running watts for sizing. When your AC compressor kicks on,
              it draws almost double its running wattage for a few seconds. Your
              generator has to handle that spike without tripping. That&apos;s
              why step 3 exists.
            </p>
          </div>

          {/* Step 3 */}
          <h3 className="mt-8 text-xl font-semibold text-[var(--color-text-dark)]">
            Step 3: Add it up and apply the 25% rule
          </h3>
          <div className="mt-3 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Take your total running wattage, add the largest single starting
              wattage spike (usually your AC), then multiply the whole thing by
              1.25. That 25% buffer isn&apos;t optional. It protects against
              simultaneous startup surges and gives your generator room to
              breathe. Generators that run consistently above 80% load get
              loud, burn through fuel faster, and don&apos;t last as long.
              Consumer Reports recommends this same 25% safety buffer in their
              standby generator buying guide, noting that undersized units are
              the number one source of homeowner dissatisfaction.
            </p>
            <p>
              Most electricians will tell you to go one size up from your
              calculation. They&apos;re right, but not for the reason you think.
              It&apos;s not about safety margins. It&apos;s because generators
              are loudest and least efficient when running at 90%+ capacity.
              Drop to 70-80% load and the difference in noise is night and day.
            </p>
          </div>

          {/* Example calculation */}
          <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5 sm:p-6">
            <p className="font-semibold text-[var(--color-text-dark)]">
              Example: Sizing for essential circuits
            </p>
            <div className="mt-3 space-y-1 text-sm text-[var(--color-text-body)]">
              <p>Central AC (3 ton): 3,500W running / 4,500W starting</p>
              <p>Refrigerator: 700W</p>
              <p>Lights (10 rooms LED): 500W</p>
              <p>Garage door opener: 750W</p>
              <p>Home office: 500W</p>
              <p>Wi-Fi router: 50W</p>
            </div>
            <div className="mt-4 border-t border-[var(--color-border)] pt-4 text-sm text-[var(--color-text-body)]">
              <p>
                Running total: <strong>6,000W</strong>
              </p>
              <p>Add AC starting surge: 6,000 + 1,000 = 7,000W</p>
              <p>Apply 25% margin: 7,000 x 1.25 = 8,750W</p>
              <p className="mt-2 text-base font-bold text-[var(--color-text-dark)]">
                Round up → 10 kW generator
              </p>
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-body)] italic">
              But wait — add the electric dryer and water heater too? Now you&apos;re
              at 18,250W before the margin. That puts you at{" "}
              <strong>22 kW</strong>.
            </p>
          </div>

          {/* Step 4 */}
          <h3 className="mt-8 text-xl font-semibold text-[var(--color-text-dark)]">
            Step 4: Round up to the nearest available size
          </h3>
          <div className="mt-3 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Generators come in standard sizes: 7.5, 10, 14, 16, 20, 22, 24,
              and 26 kW for air-cooled units. Above 26 kW, you&apos;re looking
              at liquid-cooled models (<a href="https://www.generac.com/all-products/generators/home-backup-generators/protector" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Generac Protector series</a>, <a href="https://www.kohlerpower.com/na/en/residential/generators.html" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Kohler</a> 30-48
              kW), which cost significantly more and require more space.
            </p>
            <p>
              Always round UP, not down. A 22 kW generator running your 20 kW
              load at 90% capacity will be louder and burns through fuel faster.
              It won&apos;t last as long either. A 24 kW unit running the same
              load at 83% is a much better deal. You&apos;re looking at maybe
              $600 more for the bigger unit. On a ten grand project? Just do it.
            </p>
          </div>

          {/* Calculator */}
          <h2
            id="calculator"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Use Our Free Generator Size Calculator
          </h2>
          <p className="mt-3 text-[var(--color-text-body)] leading-relaxed">
            Don&apos;t want to do the math yourself? Plug in your numbers below
            and get an instant estimate for the right generator size and
            approximate cost. For an even more detailed breakdown with
            appliance-by-appliance selection, try our{" "}
            <Link href="/calculator" className="text-[var(--color-primary-cyan)] hover:underline">detailed calculator</Link>.
          </p>

          <div className="mt-6 -mx-4 sm:mx-0">
            <Calculator />
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/get-quotes?source=size-guide"
              className="text-[var(--color-primary-cyan)] font-medium hover:underline"
            >
              Want exact pricing for your area? Get free quotes from local
              installers →
            </Link>
          </div>

          {/* The #1 Mistake */}
          <h2
            id="sizing-mistake"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            What&apos;s the Biggest Generator Sizing Mistake?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>The most common mistake isn&apos;t buying too big. It&apos;s buying too small.</p>
            <p>
              Here&apos;s how it happens: you get three quotes. One installer
              recommends a 22 kW Generac for $12,000. Another says you can get
              away with a 14 kW unit for $8,000. You pick the cheaper one
              because, reasonably, $4,000 is real money.
            </p>
            <p>
              Then hurricane season hits. The power goes out. Your 14 kW
              generator kicks in and powers your fridge, your lights, your Wi-Fi.
              Great. But it&apos;s 94&deg;F outside and your AC won&apos;t start
              because the starting surge alone exceeds what your generator can
              handle.
            </p>
            <p>
              Now you&apos;re sitting in a dark-ish house with an $8,000
              generator humming outside and no air conditioning. And the cost to
              swap it out for a bigger unit? More than the $4,000 you saved.
            </p>
            <p>
              Skip the 7.5 kW units too. They sound affordable, but you&apos;ll
              regret it the first time your AC kicks in and the generator
              struggles. If you&apos;re torn between two sizes, go bigger. The
              price difference between a 20 kW and a 22 kW Generac is roughly
              $500-$800 for the unit. On a $10,000+ project, that&apos;s a
              rounding error. Not sure which brand to pick? Read our{" "}
              <Link href="/guides/generac-vs-kohler" className="text-[var(--color-primary-cyan)] hover:underline">Generac vs Kohler comparison</Link>.
            </p>
          </div>

          {/* Scenarios */}
          <h2
            id="scenarios"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            What Size Generator Do I Need for My Specific Situation?
          </h2>

          <p className="mt-4 text-[var(--color-text-body)] leading-relaxed">
            OK, quick rundown of what makes sense for each home size.
          </p>

          <div className="mt-6 space-y-8">
            {/* Small home */}
            <div className="rounded-xl border border-[var(--color-border)] p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                Small home (&lt; 1,500 sq ft), essential circuits only
              </h3>
              <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                A 10-14 kW generator handles lights, fridge, a window AC unit,
                and a few outlets. Budget: $6,000-$9,000 installed. Good fit if
                you have gas heat (no electric furnace) and don&apos;t mind
                skipping the dryer during an outage. The{" "}
                <a href="https://www.generac.com/all-products/generators/home-backup-generators/guardian" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Generac Guardian 10 kW</a>
                {" "}is the go-to model here.
              </p>
            </div>

            {/* Average home */}
            <div className="rounded-xl border border-[var(--color-border)] p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                Average home (1,500–2,500 sq ft), whole-house coverage
              </h3>
              <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                This is where most buyers land. A 20-22 kW air-cooled generator
                covers central AC, all major appliances, and your home office.
                Budget: $9,000-$14,000 installed. The{" "}
                <a href="https://www.generac.com/all-products/generators/home-backup-generators/guardian" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Generac Guardian 22 kW</a> and{" "}
                <a href="https://www.kohlerpower.com/na/en/residential/generators.html" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Kohler 20RCAL</a> are the two most popular models in this range.
                There&apos;s a reason they&apos;re the best sellers.
              </p>
            </div>

            {/* Large home */}
            <div className="rounded-xl border border-[var(--color-border)] p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                Large home (2,500–4,000 sq ft), whole house + pool/EV
              </h3>
              <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                You&apos;ll need 24-26 kW if you want whole-house coverage plus
                a pool pump or EV charger. Budget: $12,000-$18,000 installed. At
                this size, ask your installer about load management. A smart
                transfer switch can let a smaller generator handle a bigger house
                by cycling loads automatically. Your AC and dryer never run at
                the same time, but honestly, you barely notice.
              </p>
            </div>

            {/* Estate */}
            <div className="rounded-xl border border-[var(--color-border)] p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-[var(--color-text-dark)]">
                Estate / large property (4,000+ sq ft)
              </h3>
              <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                You&apos;re in liquid-cooled territory. 30-48 kW units from{" "}
                <a href="https://www.generac.com/all-products/generators/home-backup-generators/protector" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Generac (Protector series)</a> or{" "}
                <a href="https://www.kohlerpower.com/na/en/residential/generators.html" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Kohler</a>. Budget: $18,000-$30,000+
                installed. These are commercial-grade units and need more
                clearance space, a concrete pad, and potentially a dedicated fuel
                supply. Yeah, that sounds like a lot. But if you own a 5,000+ sq
                ft home, you&apos;re not shopping by price. You&apos;re shopping
                by reliability. Check our{" "}
                <Link href="/states" className="text-[var(--color-primary-cyan)] hover:underline">state-by-state cost guide</Link> for
                pricing in your area.
              </p>
            </div>
          </div>

          {/* Air-Cooled vs. Liquid-Cooled */}
          <h2
            id="air-vs-liquid"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Should I Get an Air-Cooled or Liquid-Cooled Generator?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Simple version: air-cooled generators cover the 7.5 to 26 kW range.
              They&apos;re cheaper and way easier to maintain. They&apos;re also
              smaller, which matters when your unit sits three feet from a bedroom
              window. Good enough for about 90% of homes. You can browse{" "}
              <a href="https://www.generac.com/all-products/generators/home-backup-generators/guardian" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">Generac&apos;s full air-cooled lineup</a> on their official site.
            </p>
            <p>
              Liquid-cooled generators start at 25 kW and go up to 150 kW. They
              run quieter, last longer under heavy use, and handle sustained
              loads better. But they cost 40-60% more and need more space for
              installation.
            </p>
            <p>
              If your calculation came out under 26 kW, go air-cooled. Period.
              You don&apos;t need the extra cost and complexity. If you&apos;re
              above 26 kW, you have no choice because air-cooled units top out
              there. And if you&apos;re right at 24-26 kW and thinking about
              liquid-cooled &quot;just in case,&quot; save your money. A
              properly sized air-cooled unit will serve you well for 10-15 years.
            </p>
          </div>

          {/* Fuel Type */}
          <h2
            id="fuel-type"
            className="mt-14 scroll-mt-24 text-2xl font-bold text-[var(--color-text-dark)] sm:text-3xl"
          >
            Does My Fuel Type Change the Generator Size I Need?
          </h2>

          <div className="mt-4 space-y-4 text-[var(--color-text-body)] leading-relaxed">
            <p>
              Not directly, but there&apos;s a nuance that catches people off
              guard.
            </p>
            <p>
              Natural gas generators produce about 10% less power than their
              propane equivalents at the same engine size. So a 22 kW generator
              on propane might only deliver 20 kW on natural gas. Most
              manufacturers rate their units for both fuels. Check the{" "}
              <a href="https://www.generac.com/all-products/generators/home-backup-generators/guardian" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-cyan)] hover:underline">spec sheet</a> for
              the &quot;natural gas&quot; rating specifically. Don&apos;t
              just look at the headline number.
            </p>
            <p>
              If you&apos;re on natural gas (most suburban homes), make sure your
              gas meter can handle the additional load. Your installer should
              verify this, but it&apos;s worth asking about. A generator pulling
              200,000+ BTU/hour can overwhelm a standard residential gas meter.
              Upgrading the meter is usually free from the gas company, but it
              takes 2-4 weeks. Plan ahead. The National Fire Protection
              Association (NFPA 37) also requires standby generators to be
              installed at least 5 feet from any openable window or door, which
              is another factor your installer will account for.
            </p>
          </div>

          {/* FAQ */}
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
                {item.q.includes("permit") ? (
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    Yes, almost everywhere. Your installer handles it. Budget
                    $50-$300. Check your local building department&apos;s
                    requirements, or see the{" "}
                    <a
                      href="https://www.iccsafe.org/products-and-services/i-codes/2021-i-codes/irc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-primary-cyan)] hover:underline"
                    >
                      ICC&apos;s residential code overview
                    </a>
                    .
                  </p>
                ) : (
                  <p className="mt-2 text-[var(--color-text-body)] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Author Box */}
          <div className="mt-14 flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-light)] p-5 sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-cyan)] to-[var(--color-primary-mint)] text-lg font-bold text-white">
              HG
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-dark)]">
                HomeGen Editorial Team
              </p>
              <p className="mt-1 text-xs text-[var(--color-text-light)]">
                Reviewed by licensed electricians and generator installation professionals
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-body)] leading-relaxed">
                The HomeGen team researches home backup power systems, interviews
                installers across the US, and maintains up-to-date pricing data
                for every state. Our guides are fact-checked against manufacturer
                specifications and industry standards (NFPA, NEC, ICC).
              </p>
              <div className="mt-2 flex gap-3">
                <Link href="/about" className="text-xs text-[var(--color-primary-cyan)] hover:underline">About us</Link>
                <Link href="/contact" className="text-xs text-[var(--color-primary-cyan)] hover:underline">Contact</Link>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-[var(--color-bg-dark)] to-[#1E293B] p-8 text-center sm:p-10">
            <p className="text-lg text-white leading-relaxed">
              Still not sure what size you need? That&apos;s normal. Every home
              is different. The fastest way to get a definitive answer is to have
              a local installer do an on-site assessment. They&apos;ll inspect
              your electrical panel, measure your actual loads, and recommend the
              right unit.
            </p>
            <Link
              href="/get-quotes?source=size-guide"
              className="btn-gradient mt-6 inline-block rounded-xl px-8 py-4 text-base"
            >
              Get Free Quotes from Certified Installers →
            </Link>
          </div>
        </article>

        {/* Schema Markup — Combined Article + FAQPage + HowTo + Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "What Size Generator Do I Need? Calculator & Sizing Guide",
              description:
                "How to calculate the right generator size for your home, with wattage charts, common mistakes, and a free interactive calculator.",
              author: {
                "@type": "Person",
                name: "HomeGen Editorial Team",
                url: "https://homegen.co/about",
                jobTitle: "Home Backup Power Specialists",
                worksFor: {
                  "@type": "Organization",
                  name: "HomeGen",
                  url: "https://homegen.co",
                },
                knowsAbout: [
                  "Home standby generators",
                  "Generator sizing",
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
              datePublished: "2026-04-07",
              dateModified: "2026-04-09",
              mainEntityOfPage:
                "https://homegen.co/guides/generator-size-calculator",
              citation: [
                {
                  "@type": "CreativeWork",
                  name: "Electric Disturbance Events (OE-417) Annual Summaries",
                  author: {
                    "@type": "Organization",
                    name: "U.S. Department of Energy",
                  },
                  url: "https://www.energy.gov/ceser/electric-disturbance-events-oe-417-annual-summaries",
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
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How Do I Calculate What Size Generator I Need?",
              description:
                "Step-by-step method to determine the right generator size for your home.",
              step: [
                {
                  "@type": "HowToStep",
                  name: "List your appliances",
                  text: "Write down every appliance you want to power during an outage, including your HVAC system, refrigerator, lights, and any medical equipment.",
                },
                {
                  "@type": "HowToStep",
                  name: "Add up the wattages",
                  text: "Find the running wattage and starting wattage for each appliance. Use the starting wattage for motor-driven appliances like AC units and sump pumps.",
                },
                {
                  "@type": "HowToStep",
                  name: "Apply the 25% safety margin",
                  text: "Multiply your total wattage by 1.25 to account for power surges and future additions. Consumer Reports recommends this same buffer.",
                },
                {
                  "@type": "HowToStep",
                  name: "Round up to the nearest generator size",
                  text: "Match your total to the nearest available generator size: 10 kW, 14 kW, 16 kW, 20 kW, 22 kW, 24 kW, or 26 kW. Always round up, not down.",
                },
              ],
            }),
          }}
        />
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
            href="/get-quotes?source=size-guide"
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
