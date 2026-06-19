import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Workers' Compensation Insurance — NCCI Class 5551 for Roofers",
  description:
    "NCCI Class 5551 workers' comp for storm restoration and roofing crews. Correct classification, multi-state compliance, fall and ladder exposure handled right. 15-minute quotes.",
  alternates: { canonical: "/services/workers-compensation" },
};

const content: ServiceContent = {
  eyebrow: "Workers' Compensation",
  title: "Workers' Compensation Insurance — NCCI Class 5551",
  intro:
    "Roofing is one of the most dangerous trades on the books, and NCCI Class Code 5551 reflects it. Correct classification, accurate payroll splits, and true multi-state compliance are the difference between a fair premium and a brutal audit. We specialize in getting storm restoration crews covered — across every state you work.",
  image: "/images/workers-comp.png",
  imageAlt: "Roofing workers in safety harnesses on a steep roof pitch",
  whatCovered: [
    {
      heading: "Medical & Lost Wages",
      body: "When a crew member is injured — a fall, a nail-gun mishap, heat exhaustion during a summer tear-off — comp pays their medical bills and a portion of lost wages, with no fault questions asked. It's mandatory in nearly every state for a reason.",
    },
    {
      heading: "NCCI Class 5551 Classification",
      body: "Class 5551 is the roofing classification carriers use to rate height-exposed work. Misclassification (or sloppy payroll splits between roof and ground work) leads to overpaying or a painful audit. We classify your payroll correctly from day one.",
    },
    {
      heading: "Multi-State Compliance",
      body: "Storm crews cross state lines constantly. We structure your policy to cover every state you work, handle monopolistic states correctly, and keep you compliant so a new hail market never leaves a worker — or your business — exposed.",
    },
    {
      heading: "Employer's Liability",
      body: "Beyond statutory benefits, employer's liability protects you if an injured worker sues outside the comp system. It's the part of the policy that defends the business itself.",
    },
    {
      heading: "Return-to-Work & Claims Management",
      body: "We work with carriers that manage claims actively and support return-to-work programs — keeping your experience mod in check and your premiums lower over time.",
    },
    {
      heading: "Sub-Contractor Exposure",
      body: "1099 crews and uninsured subs can be pulled into your comp audit. We help you collect certificates and structure coverage so you only pay for the payroll that's truly yours.",
    },
  ],
  whoNeeds: [
    "Any roofing or storm restoration business with W-2 employees (required in most states)",
    "Contractors working crews across multiple states during hail season",
    "Businesses that have been misclassified or overcharged on the 5551 class",
    "Companies bidding GC work that requires proof of workers' comp",
    "Restoration businesses using a mix of W-2 and 1099 labor",
    "Contractors hit with surprise audit bills under their current carrier",
  ],
  whyCca: [
    {
      heading: "We Know 5551 Cold",
      body: "Roofing comp is our specialty. We get classification and payroll splits right so you don't overpay or fail an audit.",
    },
    {
      heading: "True Multi-State Setup",
      body: "We build coverage that follows your crews across state lines, including monopolistic-state handling where it applies.",
    },
    {
      heading: "Audit Protection",
      body: "We prep you for audits, help manage sub COIs, and fight misclassification so the year-end bill holds no surprises.",
    },
  ],
  faqs: [
    {
      q: "What is NCCI Class Code 5551?",
      a: "It's the NCCI roofing classification carriers use to rate workers' comp for crews working at height on roofs. It carries one of the highest base rates of any trade due to fall exposure, so accurate classification is essential.",
    },
    {
      q: "Do I need workers' comp in every state my crews work?",
      a: "Generally yes. Most states require comp for employees working in that state. We structure your policy for true multi-state compliance, including monopolistic states that require coverage through a state fund.",
    },
    {
      q: "Why did my premium jump at audit?",
      a: "Usually misclassified payroll, ground vs. roof splits done wrong, or uninsured subs rolled into your exposure. We fix classification and help you collect sub COIs to prevent it.",
    },
    {
      q: "Can I lower my comp cost over time?",
      a: "Yes — a clean claims history, active return-to-work programs, and a lower experience mod all reduce premium. We place you with carriers that reward safe operations.",
    },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
