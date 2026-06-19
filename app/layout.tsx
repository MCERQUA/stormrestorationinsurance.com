import type { Metadata } from "next";
import "./globals.css";
import { sora, jakarta } from "@/lib/fonts";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Storm Restoration Insurance | GL, Workers' Comp 5551 & Bonds for Roofers",
    template: "%s | Storm Restoration Insurance",
  },
  description:
    "Specialty insurance for storm restoration, hail, and multi-state roofing contractors. A-rated general liability, NCCI 5551 workers' comp, commercial auto, bonds & equipment. 15-minute quotes. Licensed in all 50 states.",
  keywords: [
    "storm restoration insurance",
    "roofing contractor insurance",
    "hail damage contractor insurance",
    "NCCI 5551 workers comp",
    "multi-state roofing insurance",
    "storm chaser insurance",
    "general liability roofing",
  ],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: "Storm Restoration Insurance for Contractors Who Chase the Storm",
    description:
      "A-rated GL, workers' comp Class 5551, bonds, and commercial auto for storm restoration and multi-state roofing contractors. 15-minute quotes.",
    siteName: "Storm Restoration Insurance",
    images: [{ url: "/images/og-default.png", width: 1536, height: 864 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Storm Restoration Insurance for Contractors",
    description:
      "A-rated coverage for storm restoration and multi-state roofing contractors. 15-minute quotes.",
    images: ["/images/og-default.png"],
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["InsuranceAgency", "LocalBusiness"],
  name: "Storm Restoration Insurance — Contractors Choice Agency",
  description:
    "Specialty insurance agency for storm restoration, hail, and multi-state roofing contractors.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/images/og-default.png`,
  priceRange: "$$",
  areaServed: "US",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
    addressCountry: "US",
  },
  knowsAbout: [
    "Storm restoration insurance",
    "Roofing contractor general liability",
    "NCCI Class 5551 workers compensation",
    "Commercial auto for contractors",
    "Surety bonds",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
