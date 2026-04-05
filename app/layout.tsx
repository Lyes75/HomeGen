import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home Generator Installation — Get Free Quotes | HomeGen",
  description:
    "Compare trusted home generator installers near you. Get free quotes for whole-house generator installation. Generac, Kohler, Cummins — all brands covered.",
  openGraph: {
    title: "Find Home Generator Installers Near You | HomeGen",
    description:
      "Compare local installers, estimate costs, and get free quotes for backup generator installation.",
    url: "https://homegen.co",
    siteName: "HomeGen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Generator Installation — Free Quotes | HomeGen",
    description: "Compare installers. Estimate costs. Get free quotes.",
  },
  alternates: {
    canonical: "https://homegen.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "HomeGen",
              url: "https://homegen.co",
              description:
                "Compare home generator installers and get free installation quotes across the United States.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://homegen.co/generator-installation/{state}/{city}",
                "query-input": "required name=city",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HomeGen",
              url: "https://homegen.co",
              logo: "https://homegen.co/logo.png",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)]">{children}</body>
    </html>
  );
}
