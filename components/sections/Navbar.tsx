"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, CloudLightning, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/utils";

const services = [
  { label: "General Liability", href: "/services/general-liability" },
  { label: "Workers' Compensation", href: "/services/workers-compensation" },
  { label: "Commercial Auto", href: "/services/commercial-auto" },
  { label: "Surety Bonds", href: "/services/surety-bonds" },
  { label: "Tools & Equipment", href: "/services/equipment-insurance" },
  { label: "Umbrella Coverage", href: "/services/umbrella-coverage" },
];

const nav = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-[0_2px_20px_-8px_rgba(27,79,114,0.25)] backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-storm-navy text-white">
            <CloudLightning className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base font-extrabold text-storm-navy">
              Storm Restoration
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-storm-amber">
              Insurance
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-storm-ink hover:text-storm-navy">
              Coverage <ChevronDown className="h-4 w-4" />
            </button>
            {svcOpen && (
              <div className="absolute left-0 top-full w-64 rounded-xl border border-storm-cloud bg-white p-2 shadow-card">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-storm-slate hover:bg-storm-mist hover:text-storm-navy"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-storm-ink hover:text-storm-navy"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="ml-2 flex items-center gap-2 text-sm font-bold text-storm-navy"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            href="/quote"
            className="ml-3 inline-flex h-11 items-center rounded-lg bg-storm-amber px-5 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(230,126,34,0.5)] transition hover:bg-storm-amber-dark"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="lg:hidden text-storm-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-storm-cloud bg-white px-5 py-4 lg:hidden">
          <p className="px-1 pb-1 text-xs font-bold uppercase tracking-wider text-storm-amber">
            Coverage
          </p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2 text-sm font-medium text-storm-slate"
            >
              {s.label}
            </Link>
          ))}
          <div className="my-2 h-px bg-storm-cloud" />
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2 text-sm font-semibold text-storm-ink"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="mt-2 flex items-center gap-2 px-2 py-2 text-sm font-bold text-storm-navy"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="mt-2 flex h-12 items-center justify-center rounded-lg bg-storm-amber font-bold text-white"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
