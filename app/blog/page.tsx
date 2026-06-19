import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import CTABand from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Storm Restoration Insurance Blog — Guides for Roofing Contractors",
  description:
    "Practical guides on storm restoration and roofing contractor insurance — NCCI 5551, multi-state coverage, hail season prep, GL vs. builders risk, and more.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  const posts = getAllPosts();
  return (
    <>
      <section className="relative overflow-hidden bg-storm-navy pt-32 pb-20 text-white lg:pt-40">
        <div className="absolute inset-0 dot-pattern-light opacity-50" />
        <div className="container-x relative max-w-3xl">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber-light">
              Resources
            </span>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              The Storm Restoration Insurance Blog
            </h1>
            <p className="mt-4 text-lg text-blue-100/85">
              Straight-talk guides on coverage, classification, and compliance for
              contractors who chase the storm.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-storm-mist py-20 lg:py-28">
        <div className="container-x">
          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-storm-cloud bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-4 text-xs font-semibold text-storm-slate">
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-storm-amber" />{p.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-storm-amber" />{p.readingTime}</span>
                  </div>
                  <h2 className="mt-4 font-heading text-xl font-bold text-storm-navy group-hover:text-storm-amber">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-storm-slate">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-storm-amber">
                    Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTABand />
    </>
  );
}
