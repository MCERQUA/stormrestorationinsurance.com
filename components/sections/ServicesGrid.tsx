import Link from "next/link";
import {
  ShieldCheck,
  HardHat,
  Truck,
  FileSignature,
  Wrench,
  Umbrella,
  ArrowRight,
} from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import FadeIn from "@/components/animations/FadeIn";

const services = [
  {
    icon: ShieldCheck,
    title: "General Liability",
    tag: "Roofing-Rated",
    desc: "A-rated GL with $1M/$2M limits built for roofing and storm restoration work — including sub-contractor and additional-insured requirements.",
    href: "/services/general-liability",
  },
  {
    icon: HardHat,
    title: "Workers' Compensation",
    tag: "NCCI 5551",
    desc: "Class 5551 roofing comp that keeps crews covered across state lines — height, ladder, and fall exposures underwritten correctly.",
    href: "/services/workers-compensation",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    tag: "Fleet & Trailers",
    desc: "Coverage for trucks, trailers, and storm-chaser fleets running through multiple states to reach hail-affected markets.",
    href: "/services/commercial-auto",
  },
  {
    icon: FileSignature,
    title: "Surety Bonds",
    tag: "License & Performance",
    desc: "Contractor license bonds and performance bonds that let you bid and win larger restoration contracts.",
    href: "/services/surety-bonds",
  },
  {
    icon: Wrench,
    title: "Tools & Equipment",
    tag: "Inland Marine",
    desc: "Protect ladders, nail guns, lifts, and trailer-mounted equipment on the jobsite, in transit, and in storage.",
    href: "/services/equipment-insurance",
  },
  {
    icon: Umbrella,
    title: "Umbrella Coverage",
    tag: "Excess Limits",
    desc: "Excess limits stacked above your GL and auto for the large-loss jobs that storm work brings — and the contracts that demand them.",
    href: "/services/umbrella-coverage",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
            Coverage Built for the Trade
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
            Everything a Storm Restoration Contractor Needs
          </h2>
          <p className="mt-4 text-lg text-storm-slate">
            One agency, the full stack of coverage — underwritten by carriers that
            understand roofing and storm work.
          </p>
        </FadeIn>

        <StaggerChildren className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-2xl border border-storm-cloud bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-storm-amber/40 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-storm-navy text-white transition group-hover:bg-storm-amber">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-storm-mist px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-storm-navy">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-storm-navy">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-storm-slate">
                  {s.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-storm-amber">
                  Explore coverage
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
