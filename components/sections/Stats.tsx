import Counter from "@/components/animations/Counter";
import FadeIn from "@/components/animations/FadeIn";

const stats = [
  { to: 20, suffix: "+", label: "Years Specializing in the Trades" },
  { to: 298, suffix: "", label: "Contractors Protected" },
  { to: 50, suffix: "", label: "States Licensed" },
  { to: 2, suffix: "-Hour", label: "Claims Response Guarantee" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-storm-navy py-16 text-white">
      <div className="absolute inset-0 dot-pattern-light opacity-50" />
      <div className="container-x relative py-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-heading text-5xl font-extrabold text-storm-amber-light">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-blue-100/80">
                {s.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
