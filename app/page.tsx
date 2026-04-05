import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Calculator from "@/components/Calculator";
import StateGrid from "@/components/StateGrid";
import WhyHomeGen from "@/components/WhyHomeGen";
import GuidesGrid from "@/components/GuidesGrid";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal>
          <Calculator />
        </ScrollReveal>
        <ScrollReveal>
          <StateGrid />
        </ScrollReveal>
        <ScrollReveal>
          <WhyHomeGen />
        </ScrollReveal>
        <ScrollReveal>
          <GuidesGrid />
        </ScrollReveal>
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
