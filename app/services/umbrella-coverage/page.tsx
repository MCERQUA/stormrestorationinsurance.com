import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Umbrella Insurance for Storm Restoration Contractors",
  description:
    "Excess umbrella limits above GL and commercial auto for storm restoration contractors. Satisfy large-contract requirements and protect against catastrophic claims. 15-minute quotes.",
  alternates: { canonical: "/services/umbrella-coverage" },
};

const content: ServiceContent = {
  eyebrow: "Umbrella Coverage",
  title: "Commercial Umbrella Insurance for Storm Restoration",
  intro:
    "Storm restoration brings large jobs — and large jobs bring large exposure. One serious accident, a fall, or a multi-home water loss can blow past your base GL or auto limits in a heartbeat. A commercial umbrella stacks excess limits on top of your underlying policies, protecting your business from catastrophic claims and unlocking the contracts that demand higher limits.",
  image: "/images/og-default.png",
  imageAlt: "Storm restoration contractors working on a roof under a dramatic sky",
  whatCovered: [
    {
      heading: "Excess Liability Limits",
      body: "An umbrella adds limits — commonly $1M to $5M or more — on top of your general liability and commercial auto. When a claim exceeds the underlying policy, the umbrella picks up where it leaves off.",
    },
    {
      heading: "Catastrophic Claim Protection",
      body: "A single severe injury or large-property loss on a storm job can exceed a $1M/$2M GL fast. The umbrella is what stands between a bad claim and your business's survival.",
    },
    {
      heading: "Contract Requirement Compliance",
      body: "Larger commercial restoration jobs, property managers, and insurance-restoration networks frequently require $2M, $5M, or higher total limits. An umbrella is the affordable way to meet those requirements and win the bid.",
    },
    {
      heading: "Sits Above Multiple Policies",
      body: "One umbrella can provide excess limits over your GL, commercial auto, and (in many cases) employer's liability — efficient, coordinated protection across your program.",
    },
    {
      heading: "Defense Costs",
      body: "Beyond paying claims, the umbrella can extend defense coverage for large suits, protecting your business from the legal costs a catastrophic claim generates.",
    },
    {
      heading: "Affordable Peace of Mind",
      body: "Umbrella limits are one of the most cost-effective coverages dollar-for-dollar. For a fraction of your base premiums, you multiply your protection.",
    },
  ],
  whoNeeds: [
    "Storm restoration contractors bidding larger commercial or multi-unit jobs",
    "Businesses whose contracts require $2M, $5M, or higher total limits",
    "Companies with fleets and crews creating significant auto and liability exposure",
    "Contractors working high-value properties where a loss could be severe",
    "Growing storm businesses that want to protect their balance sheet",
    "Anyone whose base GL and auto limits feel thin for the size of jobs they run",
  ],
  whyCca: [
    {
      heading: "Right-Sized Limits",
      body: "We match your umbrella to the contracts you chase and the real exposure storm work creates — not a one-size guess.",
    },
    {
      heading: "Coordinated Program",
      body: "We structure the umbrella to sit cleanly over your GL and auto so there are no gaps between the layers.",
    },
    {
      heading: "Cost-Effective",
      body: "Umbrella is one of the best values in your program — we help you add meaningful protection affordably.",
    },
  ],
  faqs: [
    {
      q: "What does a commercial umbrella actually do?",
      a: "It adds excess liability limits on top of your underlying GL and commercial auto. When a covered claim exceeds those policy limits, the umbrella responds up to its own limit.",
    },
    {
      q: "Why would a storm restoration contractor need one?",
      a: "Large jobs and fleet driving create exposure that can exceed a standard $1M/$2M GL or auto policy. An umbrella protects against catastrophic claims and satisfies higher-limit contract requirements.",
    },
    {
      q: "How much umbrella coverage should I carry?",
      a: "It depends on the size of your jobs, your fleet, and your contract requirements — commonly $1M to $5M. We right-size it to your business and the work you're bidding.",
    },
    {
      q: "Is umbrella coverage expensive?",
      a: "It's one of the most cost-effective coverages available. For a fraction of your base premiums you can multiply your total protection — which is why it's a smart move for growing storm businesses.",
    },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
