"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Calculator", href: "/#calculator" },
  { label: "Cost Guide", href: "/#guides" },
  { label: "States", href: "/states" },
  { label: "Guides", href: "/#guides" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-full.png"
            alt="HomeGen - Home Generator Installation"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-body)] transition-colors hover:text-[var(--color-text-dark)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-quotes"
            className="btn-gradient rounded-lg px-5 py-2.5 text-sm text-white"
          >
            Get Free Quotes
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--color-text-dark)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-white px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium text-[var(--color-text-body)]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-quotes"
            className="btn-gradient mt-2 block rounded-lg px-5 py-2.5 text-center text-sm text-white"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Quotes
          </Link>
        </div>
      )}
    </header>
  );
}
