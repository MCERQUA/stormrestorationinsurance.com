import { HardHat, Map, ShieldCheck, Clock } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const reasons = [
  {
    icon: HardHat,
    title: "We Were Contractors First",
    desc: "Founder Josh Cotner ran a contracting business before insurance. We know what a COI deadline, an additional-insured endorsement, and a 7am tear-off actually mean to your day.",
  },
  {
    icon: Map,
    title: "Multi-State Storm Expertise",
    desc: "Storm work doesn't respect state lines. We structure GL, comp, and auto so you stay compliant the moment you cross into the next hail market — no coverage gaps.",
  },
  {
    icon: ShieldCheck,
    title: "A-Rated Carriers Only",
    desc: "We place your business with financially strong, A-rated carriers that actually pay restoration claims — not the cheapest paper that disappears after a major loss.",
  },
  {
    icon: Clock,
    title: "2-Hour Claims Response",
    desc: "When a ladder slips or a truck gets hit chasing a storm, you reach a human fast. Guaranteed 2-hour claims response, 24/7 reporting.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-storm-mist py-20 lg:py-28">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
              Why Contractors Switch to Us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
              An Insurance Partner That Actually Gets Storm Work
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-storm-slate">
              Most agents see &quot;roofer&quot; on an application and panic. We see a
              business to protect. For 20+ years we&apos;ve specialized in the trades
              everyone else declines — and storm restoration is right in our
              wheelhouse.
            </p>
          </FadeIn>

          <StaggerChildren className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <div className="h-full rounded-2xl border border-storm-cloud bg-white p-6 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-storm-amber/12 text-storm-amber">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-storm-navy">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-storm-slate">
                    {r.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
