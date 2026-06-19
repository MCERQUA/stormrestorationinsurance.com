import { Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { SITE } from "@/lib/utils";

export default function CTABand({
  title = "Get Your Free Storm Insurance Quote Today",
  subtitle = "15-minute quotes. A-rated carriers. Coverage that follows your crews across every state line.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-amber-band py-16 lg:py-20">
      <div className="absolute inset-0 dot-pattern-light opacity-30" />
      <div className="container-x relative">
        <FadeIn className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-white text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-white/90">{subtitle}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button href="/quote" variant="white" size="lg">
              Get a Quote <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href={`tel:${SITE.phoneRaw}`}
              variant="navy"
              size="lg"
              className="!bg-storm-navy-dark"
            >
              <Phone className="h-5 w-5" /> {SITE.phone}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
