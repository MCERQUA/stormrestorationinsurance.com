import Image from "next/image";
import { Quote, Star } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const testimonials = [
  {
    quote:
      "We run crews in five states during hail season. CCA is the only agency that didn't blink when I said 'storm restoration.' They had our comp and GL structured for multi-state in two days.",
    name: "Derek M.",
    role: "Owner, Summit Storm Roofing",
  },
  {
    quote:
      "Our old agent rated us wrong on the 5551 class and we overpaid for years. Josh's team fixed the classification and got us A-rated paper. Saved real money and the COIs come back same-day.",
    name: "Carlos R.",
    role: "GM, Apex Exterior Restoration",
  },
  {
    quote:
      "A ladder slipped on a steep tear-off and we had a claim by noon. I called and had a human on the phone inside the hour. That 2-hour promise is real — it mattered when it counted.",
    name: "Tyler B.",
    role: "Founder, Frontline Hail Pros",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-storm-mist py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
              Trusted by Storm Crews
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
              Contractors Who Chase Storms Trust Us
            </h2>
            <div className="mt-6 flex items-center gap-1 text-storm-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-storm-slate">
                Rated by 298+ contractor clients
              </span>
            </div>
            <div className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-2xl shadow-card lg:block">
              <Image
                src="/images/testimonials.png"
                alt="Storm restoration contractor"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </FadeIn>

          <StaggerChildren className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <StaggerItem
                key={t.name}
                className={i === 0 ? "sm:col-span-2" : ""}
              >
                <figure className="h-full rounded-2xl border border-storm-cloud bg-white p-7 shadow-card">
                  <Quote className="h-8 w-8 text-storm-amber/40" />
                  <blockquote className="mt-3 text-[15px] leading-relaxed text-storm-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-storm-cloud pt-4">
                    <span className="block font-heading font-bold text-storm-navy">
                      {t.name}
                    </span>
                    <span className="text-sm text-storm-slate">{t.role}</span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
