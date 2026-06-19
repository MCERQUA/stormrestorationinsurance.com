import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Surety Bonds for Storm Restoration & Roofing Contractors",
  description:
    "Contractor license bonds and performance bonds for storm restoration contractors. Bid larger jobs, satisfy state licensing, and win commercial restoration contracts. 15-minute quotes.",
  alternates: { canonical: "/services/surety-bonds" },
};

const content: ServiceContent = {
  eyebrow: "Surety Bonds",
  title: "Surety Bonds for Storm Restoration Contractors",
  intro:
    "Bonds open doors. Whether a state requires a contractor license bond to keep your registration active, or a commercial restoration contract demands a performance bond before you can bid, the right surety lets you compete for bigger, better work. We help storm restoration contractors get bonded fast across the states they operate in.",
  image: "/images/surety-bonds.png",
  imageAlt: "Contractor shaking hands with a homeowner after a completed job",
  whatCovered: [
    {
      heading: "Contractor License Bonds",
      body: "Many states and municipalities require a license or registration bond to operate as a roofing or restoration contractor. It guarantees you'll follow licensing rules and protects the public — and it's often a prerequisite for pulling permits.",
    },
    {
      heading: "Performance Bonds",
      body: "On larger commercial restoration jobs, the owner may require a performance bond guaranteeing you'll complete the work per contract. Being bondable means you can bid the jobs your competitors can't.",
    },
    {
      heading: "Payment Bonds",
      body: "Often paired with performance bonds, payment bonds guarantee your subs and suppliers get paid — protecting the project owner from liens and giving them confidence to award you the contract.",
    },
    {
      heading: "Bid Bonds",
      body: "Some commercial and public restoration projects require a bid bond to submit a proposal, guaranteeing you'll honor your bid if selected. We help you qualify so you're never locked out of a project.",
    },
    {
      heading: "Multi-State Licensing Support",
      body: "Storm work crosses state lines, and each state has its own bonding requirements. We help you stay bonded and compliant in every state you chase storms.",
    },
    {
      heading: "Fast Underwriting",
      body: "We work with surety markets that understand contractors, so getting (and increasing) your bonding capacity doesn't stall your growth.",
    },
  ],
  whoNeeds: [
    "Contractors in states or cities that require a license or registration bond",
    "Restoration businesses bidding commercial jobs that require performance bonds",
    "Companies that need payment or bid bonds to compete for larger projects",
    "Contractors expanding into new states with their own bonding requirements",
    "Growing storm businesses that need higher bonding capacity to scale",
    "Anyone who has lost a bid because they weren't bondable",
  ],
  whyCca: [
    {
      heading: "Contractor-Focused Surety",
      body: "We work with surety markets that understand roofing and restoration, so approvals move fast.",
    },
    {
      heading: "Built to Grow With You",
      body: "As your storm business scales, we help raise your bonding capacity so you can chase bigger contracts.",
    },
    {
      heading: "Multi-State Coverage",
      body: "We keep you bonded and compliant in every state your crews operate.",
    },
  ],
  faqs: [
    {
      q: "What's the difference between a license bond and a performance bond?",
      a: "A license bond is required by a state or city to operate legally and protects the public. A performance bond is required by a project owner and guarantees you'll complete a specific contract as agreed.",
    },
    {
      q: "How much does a contractor bond cost?",
      a: "Premium is a small percentage of the bond amount and depends on your credit, experience, and financials. We shop surety markets to get you the best rate and the capacity you need.",
    },
    {
      q: "Can I get bonded in multiple states?",
      a: "Yes. Each state has its own requirements, and we help storm restoration contractors stay bonded and compliant everywhere they work.",
    },
    {
      q: "How fast can I get a bond?",
      a: "Many license bonds are issued same-day. Larger performance and contract bonds require underwriting, but we move quickly so bonding never stalls a bid.",
    },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
