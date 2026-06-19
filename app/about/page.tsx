import type { Metadata } from "next";
import Image from "next/image";
import { HardHat, ShieldCheck, MapPin, Clock, Award, Users } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Stats from "@/components/sections/Stats";
import CTABand from "@/components/sections/CTABand";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About — Storm Restoration Insurance by Contractors Choice Agency",
  description:
    "Founded by a former contractor, Contractors Choice Agency has specialized in the trades for 20+ years. Meet the team behind Storm Restoration Insurance.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: HardHat, title: "Contractor-First", body: "Our founder ran a contracting business before insurance. We speak your language and understand your day." },
  { icon: ShieldCheck, title: "A-Rated Only", body: "We place business exclusively with financially strong carriers that actually pay restoration claims." },
  { icon: MapPin, title: "Multi-State Expertise", body: "Storm work crosses state lines. We structure coverage that follows your crews wherever the weather goes." },
  { icon: Clock, title: "Fast & Responsive", body: "15-minute quotes, same-day COIs, and a guaranteed 2-hour claims response. We move at the speed of your business." },
];

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-storm-navy pt-32 pb-20 text-white lg:pt-40">
        <div className="absolute inset-0 dot-pattern-light opacity-50" />
        <div className="container-x relative max-w-3xl">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber-light">
              About Us
            </span>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-balance sm:text-5xl">
              Insurance Built by Contractors, for Contractors
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-blue-100/85">
              Storm Restoration Insurance is a specialty program of {SITE.brand},
              founded by {SITE.owner} — a former contractor who got tired of watching
              agents misunderstand the trades. For 20+ years we&apos;ve specialized
              in the businesses everyone else declines.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
              Our Story
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
              From the Roof to the Risk
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-storm-slate">
              <p>
                {SITE.owner} started in the trades, not in insurance. He knew the
                frustration of being treated like a high-risk afterthought — buried in
                exclusions, surcharged for the work, and left without a real partner
                when a claim hit.
              </p>
              <p>
                So he built the agency he wished he&apos;d had. Today, {SITE.brand}{" "}
                protects 298+ contractors across the country, with deep specialization
                in storm restoration, hail, and multi-state roofing. We know NCCI 5551,
                we know what your contracts require, and we know how to keep coverage
                compliant as your crews chase storms from state to state.
              </p>
              <p>
                We&apos;re a lean, responsive team — which means when you call, you
                reach people who know your account and move fast. That&apos;s the
                difference between an agency and a partner.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/surety-bonds.png"
                alt="Contractor and client handshake"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Stats />

      <section className="bg-storm-mist py-20 lg:py-28">
        <div className="container-x">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
              What We Stand For
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
              Our Values
            </h2>
          </FadeIn>
          <StaggerChildren className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl border border-storm-cloud bg-white p-7 shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-storm-navy text-white">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-storm-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-storm-slate">
                    {v.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn className="mx-auto mt-14 max-w-3xl rounded-2xl border border-storm-cloud bg-white p-8 text-center shadow-card">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-storm-slate">
              <span className="flex items-center gap-2"><Award className="h-5 w-5 text-storm-amber" /> 20+ Years in the Trades</span>
              <span className="flex items-center gap-2"><Users className="h-5 w-5 text-storm-amber" /> 298+ Contractors Protected</span>
              <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-storm-amber" /> Licensed All 50 States</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-storm-amber" /> NPN #{SITE.npn}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
