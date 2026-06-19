import type { Metadata } from "next";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for stormrestorationinsurance.com and Contractors Choice Agency. Read before using this site or requesting a quote.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <section className="bg-white pt-32 pb-20 lg:pt-40">
      <div className="container-x max-w-3xl">
        <h1 className="font-heading text-4xl font-extrabold text-storm-navy">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-storm-slate">Last updated: June 2026</p>
        <div className="prose-storm mt-8">
          <p>
            Welcome to stormrestorationinsurance.com, a website operated by{" "}
            {SITE.brand} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            By using this site you agree to these Terms of Service. If you do not
            agree, please do not use the site.
          </p>
          <h2>Use of This Site</h2>
          <p>
            This website is intended for informational purposes and to connect
            contractors with insurance options. You agree to use the site only for
            lawful purposes and in a manner consistent with all applicable laws and
            regulations. You may not use the site to submit false or misleading
            information, attempt unauthorized access, or disrupt the site&apos;s
            operation.
          </p>
          <h2>No Insurance Contract Created</h2>
          <p>
            Completing a quote request or contact form on this site does not create an
            insurance policy or bind coverage. Coverage is effective only upon issuance
            of a policy by a licensed carrier, acceptance of the policy terms, and
            payment of premium. All coverage is subject to the terms, conditions, and
            exclusions of the applicable policy.
          </p>
          <h2>Accuracy of Information</h2>
          <p>
            We strive to keep information on this site accurate and current, but we
            make no warranty that all content is complete, accurate, or up to date.
            Insurance products, rates, and availability vary by state and individual
            risk factors. Always review policy documents carefully before purchasing.
          </p>
          <h2>Intellectual Property</h2>
          <p>
            All content on this site — including text, graphics, logos, and images —
            is the property of {SITE.brand} or its content suppliers and is protected
            by applicable copyright and trademark laws. You may not reproduce, distribute,
            or create derivative works without our written permission.
          </p>
          <h2>Third-Party Links</h2>
          <p>
            This site may contain links to third-party websites. We are not responsible
            for the content, accuracy, or practices of any third-party sites and provide
            these links for convenience only.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE.brand} shall not be liable
            for any indirect, incidental, special, or consequential damages arising out
            of your use of, or inability to use, this site or the information contained
            herein.
          </p>
          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Arizona, without
            regard to its conflict-of-law provisions. Any disputes shall be resolved
            in the courts of Maricopa County, Arizona.
          </p>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms at any time. Continued use of the site after
            changes are posted constitutes your acceptance of the revised Terms.
          </p>
          <h2>Contact Us</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
            <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>. Mailing address:{" "}
            {SITE.address}, {SITE.city}, {SITE.state} {SITE.zip}.
          </p>
        </div>
      </div>
    </section>
  );
}
