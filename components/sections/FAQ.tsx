"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HOME_FAQS, type FAQItem } from "@/lib/faqs";

export default function FAQ({
  faqs = HOME_FAQS,
  title = "Storm Restoration Insurance — Common Questions",
  subtitle,
}: {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-storm-amber">
            Answers
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-storm-navy sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-lg text-storm-slate">{subtitle}</p>}
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-storm-cloud bg-storm-mist"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base font-bold text-storm-navy">
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-storm-navy text-white">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-storm-slate">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
