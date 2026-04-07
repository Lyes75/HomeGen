import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get Free Generator Installation Quotes | HomeGen",
  description:
    "Request free, no-obligation quotes from certified generator installers in your area.",
  alternates: {
    canonical: "https://homegen.co/get-quotes",
  },
};

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function GetQuotesPage({ searchParams }: Props) {
  const params = await searchParams;
  const initialCity = (params.city as string) || (params.zip as string) || "";
  const source = (params.source as string) || "direct";

  return (
    <>
      <Header />
      <main className="bg-[var(--color-bg-light)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[var(--color-text-dark)] sm:text-4xl">
              Get Your Free Generator Installation Quotes
            </h1>
            <p className="mt-4 text-[var(--color-text-body)]">
              Fill out this quick form and receive quotes from 2-3 certified
              installers in your area. No fees, no obligations.
            </p>
          </div>

          <QuoteForm initialCity={initialCity} source={source} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Home Generator Installation Quote Service",
              provider: {
                "@type": "Organization",
                name: "HomeGen",
              },
              description:
                "Free quote service connecting homeowners with certified home generator installers across the United States.",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free, no-obligation quotes",
              },
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
