import Image from "next/image";
import { Phone, ShieldCheck, Clock, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { SITE } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-storm-navy pt-28 pb-24 text-white lg:pt-36 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-storm-navy via-storm-navy to-storm-navy-dark" />
      <div className="absolute inset-0 dot-pattern-light opacity-60" />
      <div
        className="absolute right-0 top-0 hidden h-full w-1/2 lg:block"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <Image
          src="/images/hero.png"
          alt="Roofing contractors repairing a hail-damaged roof"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-storm-navy via-storm-navy/40 to-transparent" />
      </div>

      <div className="container-x relative z-10 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-storm-amber/40 bg-storm-amber/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-storm-amber-light">
              <span className="h-1.5 w-1.5 rounded-full bg-storm-amber" />
              Built for Storm Chasers & Restoration Crews
            </span>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] text-balance sm:text-5xl lg:text-[3.4rem]">
              Storm Restoration Insurance for Contractors Who{" "}
              <span className="text-storm-amber-light">Chase the Storm</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100/85">
              Hail damage, wind restoration, and multi-state roofing contractors —
              A-rated GL, workers&apos; comp Class 5551, bonds, and commercial auto.
              15-minute quotes.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button href={`tel:${SITE.phoneRaw}`} variant="white" size="lg">
                <Phone className="h-5 w-5" /> Call {SITE.phone}
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-blue-100/80">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-storm-amber-light" /> A-Rated
                Carriers
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-storm-amber-light" /> All 50 States
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-storm-amber-light" /> 2-Hour Claims
                Response
              </span>
            </div>
          </FadeIn>
        </div>
        <div className="lg:hidden">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="Roofing contractors repairing a hail-damaged roof"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
