import Image from "next/image";
import Link from "next/link";

const stateLinks = [
  { label: "Florida", href: "/generator-installation/florida" },
  { label: "Texas", href: "/generator-installation/texas" },
  { label: "Louisiana", href: "/generator-installation/louisiana" },
  { label: "California", href: "/generator-installation/california" },
  { label: "New York", href: "/generator-installation/new-york" },
  { label: "All States", href: "/states" },
];

const resourceLinks = [
  { label: "Cost Guide", href: "/guides/generator-installation-cost" },
  { label: "Calculator", href: "/calculator" },
  { label: "Size Guide", href: "/guides/generator-size-calculator" },
  { label: "Brands", href: "/brands" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "For Installers", href: "/for-installers" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/logo.png"
              alt="HomeGen"
              width={120}
              height={32}
              className="brightness-0 invert"
            />
            <p className="mt-4 text-sm text-[var(--color-text-light)]">
              Find trusted home generator installers near you. Free quotes, no
              obligations.
            </p>
          </div>

          {/* States */}
          <div>
            <h4 className="text-sm font-semibold text-white">States</h4>
            <ul className="mt-4 space-y-2">
              {stateLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-light)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-light)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-light)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-[var(--color-text-light)]">
            &copy; 2026 HomeGen. All rights reserved.
          </p>
          <p className="mt-2 text-center text-xs text-[var(--color-text-light)]/60">
            HomeGen is a free service that connects homeowners with local
            generator installers. We may receive compensation from partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
