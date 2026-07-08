import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SuccessSwitch from "@/components/SuccessSwitch";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Storm Restoration Insurance",
  description:
    "Get in touch with Contractors Choice Agency for storm restoration and roofing contractor insurance. Call, email, or send a message. 2-hour claims response.",
  alternates: { canonical: "/contact" },
};

const labelCls = "block text-sm font-semibold text-storm-navy";
const inputCls =
  "mt-1.5 w-full rounded-lg border border-storm-cloud bg-white px-4 py-3 text-storm-ink outline-none transition focus:border-storm-navy focus:ring-2 focus:ring-storm-navy/15";

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-storm-navy pt-32 pb-20 text-white lg:pt-40">
        <div className="absolute inset-0 dot-pattern-light opacity-50" />
        <div className="container-x relative max-w-3xl">
          <FadeIn>
            <span className="text-sm font-bold uppercase tracking-wider text-storm-amber-light">
              Contact
            </span>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
              Let&apos;s Talk Coverage
            </h1>
            <p className="mt-4 text-lg text-blue-100/85">
              Questions, quotes, or claims — reach a real person who knows storm
              restoration. We respond fast.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <h2 className="font-heading text-2xl font-extrabold text-storm-navy">
              Get in Touch
            </h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-storm-navy text-white"><Phone className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-storm-navy">Phone</p>
                  <a href={`tel:${SITE.phoneRaw}`} className="text-storm-slate hover:text-storm-amber">{SITE.phone} ({SITE.phonePretty})</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-storm-navy text-white"><Mail className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-storm-navy">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-storm-slate hover:text-storm-amber">{SITE.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-storm-navy text-white"><MapPin className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-storm-navy">Office</p>
                  <p className="text-storm-slate">{SITE.address}<br />{SITE.city}, {SITE.state} {SITE.zip}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-storm-amber text-white"><Clock className="h-5 w-5" /></span>
                <div>
                  <p className="text-sm font-semibold text-storm-navy">Claims</p>
                  <p className="text-storm-slate">24/7 reporting · 2-hour response guarantee</p>
                </div>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.12}>
            <SuccessSwitch
              success={
                <div className="rounded-2xl border border-storm-cloud bg-storm-mist p-10 text-center shadow-card">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-storm-amber text-white"><Send className="h-8 w-8" /></span>
                  <h2 className="mt-5 font-heading text-2xl font-extrabold text-storm-navy">Message Sent</h2>
                  <p className="mt-3 text-storm-slate">Thanks for reaching out — we&apos;ll be in touch shortly.</p>
                </div>
              }
              form={
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/contact?success=1"
                  className="rounded-2xl border border-storm-cloud bg-storm-mist p-6 shadow-card sm:p-9"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelCls} htmlFor="cname">Name</label>
                      <input id="cname" name="name" required className={inputCls} placeholder="Your name" />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="cphone">Phone</label>
                      <input id="cphone" name="phone" type="tel" className={inputCls} placeholder="(480) 555-0134" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="cemail">Email</label>
                      <input id="cemail" name="email" type="email" required className={inputCls} placeholder="you@company.com" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="ccompany">Company</label>
                      <input id="ccompany" name="company" className={inputCls} placeholder="Your business" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="cmessage">Message</label>
                      <textarea id="cmessage" name="message" rows={4} required className={inputCls} placeholder="How can we help?" />
                    </div>
                  </div>
                  <button type="submit" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-storm-amber px-7 py-3 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(230,126,34,0.5)] transition hover:bg-storm-amber-dark">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              }
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
