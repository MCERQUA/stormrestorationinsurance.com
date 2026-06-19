import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Storm Restoration Insurance",
  brand: "Contractors Choice Agency",
  url: "https://stormrestorationinsurance.com",
  phone: "844-967-5247",
  phoneRaw: "8449675247",
  phonePretty: "844-WORK-5247",
  email: "josh@contractorschoiceagency.com",
  address: "12220 E Riggs Road Suite #105",
  city: "Chandler",
  state: "AZ",
  zip: "85249",
  npn: "8608479",
  owner: "Josh Cotner",
} as const;
