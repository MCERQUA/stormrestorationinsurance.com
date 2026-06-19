import type { Metadata } from "next";
import ServicePage, { type ServiceContent } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Tools & Equipment Insurance for Roofing & Storm Restoration",
  description:
    "Inland-marine tools & equipment coverage for storm restoration contractors — ladders, nail guns, lifts, and trailer-mounted gear protected on the job, in transit, and in storage.",
  alternates: { canonical: "/services/equipment-insurance" },
};

const content: ServiceContent = {
  eyebrow: "Tools & Equipment",
  title: "Tools & Equipment Insurance for Storm Restoration",
  intro:
    "Your tools are your business. Ladders, nail guns, compressors, lifts, and trailer-mounted equipment represent tens of thousands of dollars — and they travel constantly between jobsites, states, and storage. Inland-marine coverage protects that gear wherever it goes, so a theft or loss doesn't shut down your crews mid-season.",
  image: "/images/equipment.png",
  imageAlt: "Roofing tools and equipment stacked on a roof",
  whatCovered: [
    {
      heading: "Tools on the Jobsite",
      body: "Covers theft, damage, and loss of your tools and equipment while at the jobsite — including the high-value gear that storm crews leave staged on a roof or in a yard overnight.",
    },
    {
      heading: "Equipment in Transit",
      body: "Your gear spends hours on the road between storms. Inland-marine follows it in transit, so a trailer break-in on the interstate or damage in a tow is covered.",
    },
    {
      heading: "Equipment in Storage",
      body: "Between jobs, equipment sits in a shop, yard, or storage unit. We make sure it's protected there too — theft from storage is one of the most common contractor losses.",
    },
    {
      heading: "Rented & Borrowed Equipment",
      body: "Storm work often means renting lifts or specialty gear on short notice. We can extend coverage to rented and borrowed equipment so you're protected on jobs that scale up fast.",
    },
    {
      heading: "Scheduled & Unscheduled Tools",
      body: "We schedule your high-value items (lifts, large equipment) for full protection and provide blanket coverage for the small-tools that turn over constantly — so nothing is left exposed.",
    },
    {
      heading: "Fast Replacement",
      body: "A stalled crew is lost revenue. We place coverage with carriers that settle quickly so you can replace stolen or damaged gear and get back on the roof.",
    },
  ],
  whoNeeds: [
    "Storm restoration contractors with valuable tools and equipment that travel",
    "Crews that leave gear staged on jobsites or in trailers overnight",
    "Companies hauling equipment across multiple states during hail season",
    "Contractors who rent lifts or specialty equipment for larger jobs",
    "Businesses storing equipment in shops, yards, or storage units",
    "Anyone who would lose days of work if key equipment were stolen",
  ],
  whyCca: [
    {
      heading: "Built for Mobile Gear",
      body: "Inland-marine is designed for equipment that moves — exactly how storm restoration tools live. We structure it right.",
    },
    {
      heading: "Coordinated With Auto",
      body: "We align your equipment and commercial-auto coverage so the trailer and the tools inside are both protected on the road.",
    },
    {
      heading: "Quick Settlements",
      body: "Carriers that pay fast so a theft doesn't stall your crews mid-season.",
    },
  ],
  faqs: [
    {
      q: "Doesn't my general liability cover my tools?",
      a: "No. GL covers third-party injury and property damage — not your own tools and equipment. Inland-marine (tools & equipment) is the coverage that protects your gear from theft, damage, and loss.",
    },
    {
      q: "Are my tools covered when they're in transit or in storage?",
      a: "Yes — that's the advantage of inland-marine. It follows your equipment to the jobsite, on the road, and into storage, which is where many contractor losses actually happen.",
    },
    {
      q: "What about rented or borrowed equipment?",
      a: "We can extend coverage to rented and borrowed equipment, which is common on larger storm jobs where you bring in lifts or specialty gear on short notice.",
    },
    {
      q: "How are high-value items handled?",
      a: "We schedule big-ticket equipment for full protection and provide blanket coverage for the small tools that constantly turn over, so your whole inventory is covered appropriately.",
    },
  ],
};

export default function Page() {
  return <ServicePage c={content} />;
}
