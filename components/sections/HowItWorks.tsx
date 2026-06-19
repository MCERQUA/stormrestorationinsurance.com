import { PhoneCall, Search, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    icon: PhoneCall,
    n: "01",
    title: "Call or Submit",
    desc: "Tell us your trade, states, payroll, and fleet. Two minutes by phone or a quick online quote form — that's all we need to start.",
  },
  {
    icon: Search,
    n: "02",
    title: "We Match Carriers",
    desc: "We shop your account across our A-rated storm and roofing markets to find the right coverage at the right price — no generic quotes.",
  },
  {
    icon: ShieldCheck,
    n: "03",
    title: "Coverage in 24 Hours",
    desc: "Bind fast and get your COIs the same day in most cases. You're protected and ready to chase the next storm.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
            Simple, Fast, Done
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-storm-slate">
            From first call to bound coverage in as little as one business day.
          </p>
        </FadeIn>

        <StaggerChildren className="relative mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="relative h-full rounded-2xl border border-storm-cloud bg-storm-mist p-8">
                <span className="font-heading text-5xl font-extrabold text-storm-cloud">
                  {s.n}
                </span>
                <span className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-xl bg-storm-navy text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-storm-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-storm-slate">
                  {s.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
