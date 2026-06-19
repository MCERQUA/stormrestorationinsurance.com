import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import FAQ from "@/components/sections/FAQ";
import { type FAQItem } from "@/lib/faqs";
import CTABand from "@/components/sections/CTABand";
import { SITE } from "@/lib/utils";

export type ServiceContent = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  whatCovered: { heading: string; body: string }[];
  whoNeeds: string[];
  whyCca: { heading: string; body: string }[];
  faqs: FAQItem[];
};

export default function ServicePage({ c }: { c: ServiceContent }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: c.title,
    provider: {
      "@type": "InsuranceAgency",
      name: "Contractors Choice Agency",
      telephone: SITE.phone,
    },
    areaServed: "US",
    description: c.intro,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-storm-navy pt-32 pb-20 text-white lg:pt-40">
        <div className="absolute inset-0 dot-pattern-light opacity-50" />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <nav className="mb-5 flex items-center gap-2 text-sm text-blue-200/70">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-storm-amber-light">{c.eyebrow}</span>
            </nav>
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100/85">
              {c.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" variant="primary" size="lg">
                Get a Quote <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href={`tel:${SITE.phoneRaw}`} variant="white" size="lg">
                <Phone className="h-5 w-5" /> {SITE.phone}
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's covered */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <FadeIn className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
              What&apos;s Covered
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
              Coverage Details
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2">
            {c.whatCovered.map((w) => (
              <StaggerItem key={w.heading}>
                <div className="h-full rounded-2xl border border-storm-cloud bg-storm-mist p-7 shadow-card">
                  <h3 className="font-heading text-lg font-bold text-storm-navy">
                    {w.heading}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-storm-slate">
                    {w.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Who needs it */}
      <section className="relative overflow-hidden bg-storm-mist py-20 lg:py-28">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
              Who Needs It
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
              Is This Coverage Right for You?
            </h2>
            <p className="mt-4 text-lg text-storm-slate">
              If any of these describe your storm restoration business, this coverage
              belongs in your program.
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <ul className="space-y-4">
              {c.whoNeeds.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-storm-cloud bg-white p-4 shadow-card"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-storm-amber text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] font-medium text-storm-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Why CCA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
              Why Contractors Choice Agency
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
              The Right Coverage, Placed by People Who Get It
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3">
            {c.whyCca.map((w) => (
              <StaggerItem key={w.heading}>
                <div className="h-full rounded-2xl border border-storm-cloud bg-storm-mist p-7">
                  <h3 className="font-heading text-lg font-bold text-storm-navy">
                    {w.heading}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-storm-slate">
                    {w.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <FAQ
        faqs={c.faqs}
        title={`${c.title} — FAQ`}
        subtitle="Straight answers from a team that specializes in storm restoration."
      />
      <CTABand />
    </>
  );
}
