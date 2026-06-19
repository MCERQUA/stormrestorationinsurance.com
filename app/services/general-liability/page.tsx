import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "General Liability Insurance for Roofing & Storm Restoration Contractors",
  description:
    "Roofing-rated general liability with $1M/$2M limits for storm restoration contractors. Additional-insured, waiver of subrogation, multi-state coverage. 15-minute quotes.",
  alternates: { canonical: "/services/general-liability" },
};

const content: ServiceContent = {
  eyebrow: "General Liability",
  title: "General Liability Insurance for Storm Restoration Contractors",
  intro:
    "Roofing-rated general liability is the foundation of every storm restoration program. We place A-rated GL with $1,000,000 per-occurrence and $2,000,000 aggregate limits built for the realities of tear-offs, re-roofs, and multi-state hail work — including the additional-insured and waiver-of-subrogation endorsements your contracts demand.",
  image: "/images/general-liability.png",
  imageAlt: "Professional roofers in safety gear on a residential roof",
  whatCovered: [
    {
      heading: "Third-Party Bodily Injury",
      body: "If a homeowner, passerby, or other trade is hurt because of your work — a falling shingle, a tripping hazard, dropped debris — your GL responds to medical costs, legal defense, and settlements up to your policy limits.",
    },
    {
      heading: "Property Damage",
      body: "Storm work is high-stakes: a tarp fails overnight, water gets into a home mid-project, or equipment damages a driveway. GL covers third-party property damage you become legally liable for, which is exactly what GCs and homeowners want to see on your COI.",
    },
    {
      heading: "Products & Completed Operations",
      body: "Completed-operations coverage protects you after the job is done. If a re-roof you finished last season leaks and causes interior damage, this is the part of your policy that responds — critical for restoration work that's scrutinized after the fact.",
    },
    {
      heading: "Additional Insured & Waiver of Subrogation",
      body: "General contractors, property managers, and insurance-restoration networks routinely require you to name them as additional insured and waive subrogation. We add the right endorsements so you qualify to bid — and so a missing form never costs you a job.",
    },
    {
      heading: "Personal & Advertising Injury",
      body: "Covers claims like slander, libel, or copyright issues in your advertising — relevant when storm-chasing marketing and door-knocking are part of how you win work.",
    },
    {
      heading: "Medical Payments",
      body: "Small, no-fault medical payments for minor third-party injuries on your jobsite — often resolving issues before they escalate into liability claims.",
    },
  ],
  whoNeeds: [
    "Roofing and storm restoration contractors bidding GC or insurance-restoration work",
    "Businesses that need $1M/$2M limits to satisfy contract requirements",
    "Contractors required to name additional insureds or provide waivers of subrogation",
    "Companies running crews across multiple states during hail season",
    "Contractors who use sub-contractors and need to manage their COI exposure",
    "Anyone whose current GL excludes or surcharges roofing height work",
  ],
  whyCca: [
    {
      heading: "Roofing-Rated, Not Surcharged",
      body: "Most agents bury roofing in exclusions or sky-high pricing. We place it correctly with carriers that actually want the class.",
    },
    {
      heading: "Same-Day COIs",
      body: "Need to be on a roof tomorrow? We turn certificates and additional-insured endorsements around fast so you never lose a job to paperwork.",
    },
    {
      heading: "Multi-State Structure",
      body: "We build your GL to follow your crews across state lines so a new hail market never means a coverage gap.",
    },
  ],
  faqs: [
    {
      q: "What GL limits do I need for storm restoration work?",
      a: "Most contracts require $1,000,000 per occurrence / $2,000,000 aggregate at minimum. Larger commercial and some property managers require higher limits or an umbrella. We match limits to the contracts you're chasing.",
    },
    {
      q: "Does general liability cover my own work that goes wrong?",
      a: "GL covers third-party bodily injury and property damage, including completed-operations claims after a job. It does not cover the cost to redo your own faulty workmanship — that's a separate consideration we'll walk you through.",
    },
    {
      q: "Can you add additional insureds and waivers of subrogation?",
      a: "Yes. These are standard endorsements for restoration work and we add them quickly so you qualify to bid GC and insurance-restoration jobs.",
    },
    {
      q: "Will my sub-contractors affect my GL premium?",
      a: "Yes — uninsured subs can be rolled into your exposure at audit. We help you collect sub COIs and structure coverage to avoid surprise audit charges.",
    },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
