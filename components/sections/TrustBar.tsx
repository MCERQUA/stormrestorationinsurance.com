import { ShieldCheck, MapPin, Award, Clock, Zap, BadgeCheck, HardHat } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "A-Rated Carriers" },
  { icon: MapPin, label: "Licensed All 50 States" },
  { icon: Award, label: "20+ Years Experience" },
  { icon: Clock, label: "2-Hour Claims Response" },
  { icon: Zap, label: "15-Min Quote Turnaround" },
  { icon: BadgeCheck, label: "NPN #8608479" },
  { icon: HardHat, label: "Former Contractor Founder" },
];

export default function TrustBar() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-storm-cloud bg-storm-mist py-5">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 px-5">
          {loop.map((it, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2.5 text-sm font-semibold text-storm-slate"
            >
              <it.icon className="h-5 w-5 text-storm-amber" />
              {it.label}
              <span className="ml-6 text-storm-cloud">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
