import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import StatesMap from "@/components/sections/StatesMap";
import FAQ from "@/components/sections/FAQ";
import { HOME_FAQS } from "@/lib/faqs";
import CTABand from "@/components/sections/CTABand";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <StatesMap />
      <FAQ />
      <CTABand />
    </>
  );
}
