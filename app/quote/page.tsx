import type { Metadata } from "next";
import { CheckCircle2, Phone, Clock, ShieldCheck, Zap } from "lucide-react";
import QuoteForm from "./QuoteForm";
import FadeIn from "@/components/animations/FadeIn";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Get a Storm Restoration Insurance Quote in 15 Minutes",
  description:
    "Request a fast, free quote for storm restoration and roofing contractor insurance — GL, workers' comp 5551, commercial auto, bonds, and more. Licensed in all 50 states.",
  alternates: { canonical: "/quote" },
};

const perks = [
  { icon: Zap, text: "15-minute quote turnaround" },
  { icon: ShieldCheck, text: "A-rated carriers only" },
  { icon: Clock, text: "Same-day COIs in most cases" },
  { icon: CheckCircle2, text: "Multi-state coverage built in" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const params = await searchParams;
  const success = params.success === "1";

  return (
    <section className="relative overflow-hidden bg-storm-mist pt-32 pb-20 lg:pt-40">
      <div className="absolute inset-x-0 top-0 h-80 bg-storm-navy" />
      <div className="absolute inset-x-0 top-0 h-80 dot-pattern-light opacity-50" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn className="text-white lg:pt-4">
          <span className="text-sm font-bold uppercase tracking-wider text-storm-amber-light">
            Free Quote
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
            Get Your Storm Insurance Quote
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-blue-100/85">
            Tell us about your business and we&apos;ll shop A-rated carriers to find
            the right coverage at the right price. No obligation.
          </p>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p.text} className="flex items-center gap-3 text-blue-50">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <p.icon className="h-5 w-5 text-storm-amber-light" />
                </span>
                <span className="font-medium">{p.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-blue-100/80">Prefer to talk?</p>
            <a href={`tel:${SITE.phoneRaw}`} className="mt-1 flex items-center gap-2 font-heading text-xl font-bold text-white">
              <Phone className="h-5 w-5 text-storm-amber-light" /> {SITE.phone}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          {success ? (
            <div className="rounded-2xl border border-storm-cloud bg-white p-10 text-center shadow-card">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-storm-amber text-white">
                <CheckCircle2 className="h-9 w-9" />
              </span>
              <h2 className="mt-5 font-heading text-2xl font-extrabold text-storm-navy">
                Quote Request Received
              </h2>
              <p className="mt-3 text-storm-slate">
                Thanks — your request is in. A specialist will reach out shortly with
                your storm restoration insurance options. Need it faster? Call{" "}
                <a href={`tel:${SITE.phoneRaw}`} className="font-bold text-storm-amber">{SITE.phone}</a>.
              </p>
            </div>
          ) : (
            <QuoteForm />
          )}
        </FadeIn>
      </div>
    </section>
  );
}
