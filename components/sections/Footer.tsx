import Link from "next/link";
import { Phone, Mail, MapPin, CloudLightning } from "lucide-react";
import { SITE } from "@/lib/utils";

const cols = [
  {
    title: "Coverage",
    links: [
      { label: "General Liability", href: "/services/general-liability" },
      { label: "Workers' Compensation", href: "/services/workers-compensation" },
      { label: "Commercial Auto", href: "/services/commercial-auto" },
      { label: "Surety Bonds", href: "/services/surety-bonds" },
      { label: "Tools & Equipment", href: "/services/equipment-insurance" },
      { label: "Umbrella Coverage", href: "/services/umbrella-coverage" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Get a Quote", href: "/quote" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-storm-navy-dark text-white">
      <div className="dot-pattern-light">
        <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-storm-amber text-white">
                <CloudLightning className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-base font-extrabold">
                  Storm Restoration
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-storm-amber-light">
                  Insurance
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100/80">
              Specialty insurance for storm restoration, hail, and multi-state
              roofing contractors. A program of {SITE.brand}.
            </p>
            <p className="mt-4 text-xs text-blue-200/60">NPN #{SITE.npn} · Licensed in all 50 states</p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-storm-amber-light">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-blue-100/80 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-storm-amber-light">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-blue-100/85">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2.5 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-storm-amber-light" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-storm-amber-light" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-storm-amber-light" />
                <span>
                  {SITE.address}
                  <br />
                  {SITE.city}, {SITE.state} {SITE.zip}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-blue-200/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
          <p>
            stormrestorationinsurance.com — Insurance products offered through{" "}
            {SITE.brand}.
          </p>
        </div>
      </div>
    </footer>
  );
}
