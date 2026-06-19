import type { Metadata } from "next";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Storm Restoration Insurance and Contractors Choice Agency collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <section className="bg-white pt-32 pb-20 lg:pt-40">
      <div className="container-x max-w-3xl">
        <h1 className="font-heading text-4xl font-extrabold text-storm-navy">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-storm-slate">Last updated: June 2026</p>
        <div className="prose-storm mt-8">
          <p>
            This Privacy Policy describes how {SITE.brand} (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operating
            stormrestorationinsurance.com, collects, uses, and protects information you
            provide through this website.
          </p>
          <h2>Information We Collect</h2>
          <p>
            When you request a quote or contact us, we collect the information you
            submit — such as your name, business name, phone number, email, state,
            trade type, number of employees, estimated revenue, current insurer, and
            any notes. We may also collect basic technical data such as your IP address
            and browser type for security and analytics.
          </p>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To prepare and deliver insurance quotes and recommendations</li>
            <li>To contact you about your request and your coverage</li>
            <li>To service your policy and respond to claims</li>
            <li>To comply with legal and regulatory obligations</li>
            <li>To improve our website and services</li>
          </ul>
          <h2>How We Share Information</h2>
          <p>
            We share your information only as needed to obtain quotes and place
            coverage — for example, with insurance carriers and underwriters — and as
            required by law. We do not sell your personal information.
          </p>
          <h2>Data Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to
            protect your information. No method of transmission over the internet is
            100% secure, but we work to protect your data.
          </p>
          <h2>Your Choices</h2>
          <p>
            You may request access to, correction of, or deletion of your personal
            information by contacting us. You may also opt out of marketing
            communications at any time.
          </p>
          <h2>Contact Us</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>. Mailing address:{" "}
            {SITE.address}, {SITE.city}, {SITE.state} {SITE.zip}.
          </p>
        </div>
      </div>
    </section>
  );
}
