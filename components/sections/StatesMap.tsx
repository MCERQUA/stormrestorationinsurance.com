import { MapPin } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const states = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const hailAlley = new Set(["TX","OK","KS","NE","CO","SD","ND","MO","IA","MN","WY","NM"]);

export default function StatesMap() {
  return (
    <section className="relative overflow-hidden bg-storm-navy-dark py-20 text-white lg:py-28">
      <div className="absolute inset-0 dot-pattern-light opacity-40" />
      <div className="container-x relative">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-storm-amber-light">
            <MapPin className="h-4 w-4" /> Coast to Coast
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
            Licensed and Writing Policies in All 50 States
          </h2>
          <p className="mt-4 text-lg text-blue-100/80">
            Chase the storm wherever it lands. We follow your crews across state
            lines and keep your coverage compliant. States in{" "}
            <span className="font-bold text-storm-amber-light">amber</span> are core
            hail-alley markets we write heavily.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-5 gap-2.5 sm:grid-cols-8 lg:grid-cols-10">
            {states.map((s) => (
              <div
                key={s}
                className={
                  "flex h-12 items-center justify-center rounded-lg border text-sm font-bold transition " +
                  (hailAlley.has(s)
                    ? "border-storm-amber bg-storm-amber/20 text-storm-amber-light"
                    : "border-white/15 bg-white/5 text-blue-100/80 hover:bg-white/10")
                }
              >
                {s}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
