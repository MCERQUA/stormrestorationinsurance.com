import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Auto Insurance for Storm Restoration Fleets & Trailers",
  description:
    "Commercial auto for storm restoration contractors — trucks, trailers, and multi-state storm-chaser fleets. Hired & non-owned, cargo, and trailer coverage. 15-minute quotes.",
  alternates: { canonical: "/services/commercial-auto" },
};

const content: ServiceContent = {
  eyebrow: "Commercial Auto",
  title: "Commercial Auto Insurance for Storm Restoration Fleets",
  intro:
    "Storm work means miles. Crews drive trucks loaded with materials and tow trailers full of equipment across multiple states to reach the next hail market. Personal auto policies won't cover that — and one accident with a loaded trailer can be a six-figure loss. We place commercial auto built for storm-chaser fleets.",
  image: "/images/commercial-auto.png",
  imageAlt: "Fleet of contractor trucks and trailers on a highway",
  whatCovered: [
    {
      heading: "Liability for Trucks & Trailers",
      body: "Covers bodily injury and property damage you cause while driving company vehicles or towing trailers. With heavy loads and long hauls between storms, adequate liability limits are non-negotiable.",
    },
    {
      heading: "Physical Damage (Comp & Collision)",
      body: "Protects your own trucks and trailers against collision, theft, vandalism, and — fittingly — storm and hail damage to the vehicles themselves while parked at a jobsite or hotel.",
    },
    {
      heading: "Hired & Non-Owned Auto",
      body: "When crews drive their own trucks or you rent vehicles to chase a storm, hired & non-owned coverage protects the business from liability those vehicles create. Essential for fast-scaling storm operations.",
    },
    {
      heading: "Trailer & Equipment in Transit",
      body: "We coordinate auto and inland-marine coverage so the trailer and the gear inside it are both protected on the road, not just at the jobsite.",
    },
    {
      heading: "Multi-State Operation",
      body: "We make sure your fleet stays covered as it crosses state lines following the weather — no surprises when a truck is registered in one state and working in another.",
    },
    {
      heading: "Uninsured/Underinsured Motorist",
      body: "Protects your drivers and business when the at-fault party has no coverage or too little — a real risk on the long interstate hauls storm work requires.",
    },
  ],
  whoNeeds: [
    "Storm restoration businesses that own trucks or tow equipment trailers",
    "Companies whose crews drive across multiple states to reach hail markets",
    "Contractors who rent vehicles or rely on employee-owned trucks for jobs",
    "Businesses hauling expensive material loads and trailer-mounted equipment",
    "Fleets that need higher liability limits to satisfy contracts",
    "Anyone currently relying on personal auto for business driving (a coverage gap)",
  ],
  whyCca: [
    {
      heading: "Fleet & Storm-Chaser Savvy",
      body: "We understand multi-state hauling and structure auto to follow your crews wherever the storm sends them.",
    },
    {
      heading: "Coordinated With Your Equipment",
      body: "We align auto and inland-marine so the trailer and the tools inside are both covered on the road.",
    },
    {
      heading: "A-Rated Carriers",
      body: "Fast claims handling from carriers that pay — because a downed truck means a stalled crew and lost revenue.",
    },
  ],
  faqs: [
    {
      q: "Will personal auto cover my work trucks?",
      a: "No. Personal auto policies typically exclude business use, and a claim can be denied. Storm restoration vehicles and trailers need commercial auto.",
    },
    {
      q: "Are my trailers and the equipment inside covered?",
      a: "Trailers are covered under commercial auto; the equipment inside is best covered by inland-marine (tools & equipment). We coordinate both so nothing falls through the cracks.",
    },
    {
      q: "What if my crews drive their own trucks to a storm?",
      a: "Hired & non-owned auto protects your business from the liability those vehicles create. It's a must for storm operations that scale up fast with employee or rented vehicles.",
    },
    {
      q: "Does the policy follow my fleet across state lines?",
      a: "Yes. We structure commercial auto to stay in force as your fleet crosses state lines chasing the weather.",
    },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
