"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const TRADES = [
  "Storm Restoration",
  "Hail Damage Repair",
  "Roofing (Residential)",
  "Roofing (Commercial)",
  "Exterior Restoration",
  "Multi-Trade Restoration",
];

const labelCls = "block text-sm font-semibold text-storm-navy";
const inputCls =
  "mt-1.5 w-full rounded-lg border border-storm-cloud bg-white px-4 py-3 text-storm-ink outline-none transition focus:border-storm-navy focus:ring-2 focus:ring-storm-navy/15";

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const steps = ["Your Business", "Coverage Needs", "Contact & Submit"];

  const next = () => setStep((s) => Math.min(s + 1, 2));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <form
      name="quote"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/quote?success=1"
      onSubmit={() => setSubmitting(true)}
      className="rounded-2xl border border-storm-cloud bg-white p-6 shadow-card sm:p-9"
    >
      <input type="hidden" name="form-name" value="quote" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* progress */}
      <div className="mb-8 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <span
              className={
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition " +
                (i < step
                  ? "bg-storm-amber text-white"
                  : i === step
                  ? "bg-storm-navy text-white"
                  : "bg-storm-cloud text-storm-slate")
              }
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span
              className={
                "hidden text-xs font-semibold sm:block " +
                (i <= step ? "text-storm-navy" : "text-storm-slate")
              }
            >
              {label}
            </span>
            {i < steps.length - 1 && (
              <span className="mx-1 hidden h-px flex-1 bg-storm-cloud sm:block" />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          {/* Step 1 */}
          <div className={step === 0 ? "grid gap-5 sm:grid-cols-2" : "hidden"}>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="company">Company Name</label>
              <input id="company" name="company" className={inputCls} placeholder="Summit Storm Roofing LLC" />
            </div>
            <div>
              <label className={labelCls} htmlFor="state">Primary State</label>
              <select id="state" name="state" className={inputCls} defaultValue="">
                <option value="" disabled>Select state</option>
                {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="trade">Trade Type</label>
              <select id="trade" name="trade" className={inputCls} defaultValue="">
                <option value="" disabled>Select trade</option>
                {TRADES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="employees">Number of Employees</label>
              <input id="employees" name="employees" type="number" min="0" className={inputCls} placeholder="12" />
            </div>
            <div>
              <label className={labelCls} htmlFor="revenue">Annual Revenue</label>
              <select id="revenue" name="revenue" className={inputCls} defaultValue="">
                <option value="" disabled>Select range</option>
                <option>Under $250K</option>
                <option>$250K – $500K</option>
                <option>$500K – $1M</option>
                <option>$1M – $3M</option>
                <option>$3M – $5M</option>
                <option>Over $5M</option>
              </select>
            </div>
          </div>

          {/* Step 2 */}
          <div className={step === 1 ? "grid gap-5 sm:grid-cols-2" : "hidden"}>
            <div className="sm:col-span-2">
              <label className={labelCls}>Coverage Interested In</label>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {[
                  "General Liability",
                  "Workers' Compensation",
                  "Commercial Auto",
                  "Surety Bonds",
                  "Tools & Equipment",
                  "Umbrella Coverage",
                ].map((c) => (
                  <label key={c} className="flex items-center gap-2.5 rounded-lg border border-storm-cloud px-3 py-2.5 text-sm font-medium text-storm-ink">
                    <input type="checkbox" name="coverage" value={c} className="h-4 w-4 accent-storm-amber" />
                    {c}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={labelCls} htmlFor="states_worked">States You Work In</label>
              <input id="states_worked" name="states_worked" className={inputCls} placeholder="TX, OK, KS, CO" />
            </div>
            <div>
              <label className={labelCls} htmlFor="current_insurer">Current Insurer (if any)</label>
              <input id="current_insurer" name="current_insurer" className={inputCls} placeholder="e.g. None / Carrier name" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="notes">Anything Else We Should Know?</label>
              <textarea id="notes" name="notes" rows={3} className={inputCls} placeholder="Claims history, contract requirements, renewal date..." />
            </div>
          </div>

          {/* Step 3 */}
          <div className={step === 2 ? "grid gap-5 sm:grid-cols-2" : "hidden"}>
            <div>
              <label className={labelCls} htmlFor="name">Full Name</label>
              <input id="name" name="name" required className={inputCls} placeholder="Derek Martinez" />
            </div>
            <div>
              <label className={labelCls} htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" required className={inputCls} placeholder="(480) 555-0134" />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className={inputCls} placeholder="derek@summitstorm.com" />
            </div>
            <p className="sm:col-span-2 text-xs leading-relaxed text-storm-slate">
              By submitting, you agree to be contacted about your insurance quote.
              We respect your privacy and never sell your information.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button type="button" onClick={back} className="inline-flex items-center gap-2 rounded-lg border-2 border-storm-navy px-5 py-2.5 text-sm font-bold text-storm-navy transition hover:bg-storm-navy hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        ) : <span />}

        {step < 2 ? (
          <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-lg bg-storm-navy px-6 py-2.5 text-sm font-bold text-white transition hover:bg-storm-navy-dark">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-storm-amber px-7 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(230,126,34,0.5)] transition hover:bg-storm-amber-dark disabled:opacity-70">
            {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</> : <>Get My Quote <ArrowRight className="h-4 w-4" /></>}
          </button>
        )}
      </div>
    </form>
  );
}
