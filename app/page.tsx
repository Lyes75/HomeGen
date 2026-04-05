import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Calculator from "@/components/Calculator";
import StateGrid from "@/components/StateGrid";
import WhyHomeGen from "@/components/WhyHomeGen";
import GuidesGrid from "@/components/GuidesGrid";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Calculator />
        <StateGrid />
        <WhyHomeGen />
        <GuidesGrid />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
