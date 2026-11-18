import localFont from "next/font/local";

export const sora = localFont({
  src: [
    { path: "./fonts/Sora-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Sora-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Sora-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Sora-variable.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-sora",
  display: "swap",
});

export const jakarta = localFont({
  src: [
    { path: "./fonts/PlusJakartaSans-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PlusJakartaSans-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/PlusJakartaSans-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/PlusJakartaSans-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});
