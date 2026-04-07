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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W498G6WR');`,
          }}
        />
        {/* End Google Tag Manager */}
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
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://homegen.co/generator-installation/{state}/{city}",
                },
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
              description:
                "Free service connecting homeowners with certified home generator installers across the United States.",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W498G6WR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
