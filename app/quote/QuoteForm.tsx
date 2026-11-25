"use client";

import { QuoteForm as SharedQuoteForm, type LegacyQuestion } from "@/components/quote/QuoteForm";

const TRADES = [
  "Storm Restoration",
  "Hail Damage Repair",
  "Roofing (Residential)",
  "Roofing (Commercial)",
  "Exterior Restoration",
  "Multi-Trade Restoration",
];

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: "revenue", label: "Annual Revenue", type: "select", options: ["Under $250K", "$250K – $500K", "$500K – $1M", "$1M – $3M", "$3M – $5M", "Over $5M"] },
  { name: "prior_year_employee_count", label: "Employees, last year", type: "number" },
  { name: "prior_year_employee_payroll", label: "Employee payroll, last year" },
  { name: "estimated_gross_sales", label: "Estimated gross sales, next 12 months" },
  { name: "estimated_subcontractor_expenses", label: "Estimated subcontractor expenses, next 12 months" },
  { name: "estimated_employee_count", label: "Estimated employees, next 12 months", type: "number" },
  { name: "estimated_employee_payroll", label: "Estimated employee payroll, next 12 months" },
  { name: "estimated_material_costs", label: "Estimated material costs, next 12 months" },
  { name: "percent_subcontractors_insured", label: "Percent of subcontractors insured", type: "number" },
  { name: "coverage_for_uninsured_subcontractors", label: "Need coverage for uninsured subcontractors?", type: "select", options: ["Yes", "No"] },
  { name: "class_code_1", label: "Class code 1" },
  { name: "class_code_2", label: "Class code 2" },
  { name: "class_code_3", label: "Class code 3" },
  { name: "class_code_4", label: "Class code 4" },
  { name: "class_code_5", label: "Class code 5" },
  { name: "residential_vs_commercial", label: "Residential vs commercial mix" },
  { name: "new_vs_existing_construction", label: "New vs existing construction mix" },
  { name: "largest_projects", label: "Largest projects (description + dollar amount)", type: "textarea" },
];

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  company: d.businessName ?? "",
  trade: d.tradeType ?? "",
  employees: d.fullTimeEmployees ?? "",
  coverage: d.coverageTypes ?? "",
  states_worked: d.statesOfOperation ?? "",
  current_insurer: d.currentCarrier ?? "",
  street_address: d.address ?? "",
  prior_year_gross_sales: d.lastGrossSales ?? "",
  prior_year_subcontractor_expenses: d.lastSubcontractingCosts ?? "",
  subcontractors_have_insurance: d.subsCarryInsurance ?? "",
  annual_gross_sales: d.lastGrossSales ?? "",
  year_business_started: d.yearBusinessStarted ?? "",
  business_description: d.businessDescription ?? "",
  prior_carrier_name: d.currentCarrier ?? "",
  prior_policy_expiration: d.currentPolicyExpiration ?? "",
});

export default function QuoteForm() {
  return (
    <div className="rounded-2xl border border-storm-cloud bg-white p-6 shadow-card sm:p-9">
      <SharedQuoteForm
        formName="quote"
        tradeName="Storm Restoration"
        endpoint="/"
        options={{ yn: true, feinRequired: false }}
        tradeTypeOptions={TRADES}
        legacyQuestions={LEGACY}
        deriveLegacy={deriveLegacy}
        onSuccess={() => { window.location.href = "/quote?success=1"; }}
        classes={{
          input: "mt-1.5 w-full rounded-lg border border-storm-cloud bg-white px-4 py-3 text-storm-ink outline-none transition focus:border-storm-navy focus:ring-2 focus:ring-storm-navy/15",
          label: "block text-sm font-semibold text-storm-navy",
          legend: "block text-sm font-semibold text-storm-navy",
          heading: "font-heading text-sm font-bold uppercase tracking-wider text-storm-amber",
          button: "rounded-lg bg-storm-amber px-7 py-3 text-sm font-bold text-white disabled:opacity-60",
        }}
      />
    </div>
  );
}
