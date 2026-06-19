import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        storm: {
          navy: "#1B4F72",
          "navy-dark": "#143A56",
          "navy-light": "#2C6A98",
          amber: "#E67E22",
          "amber-dark": "#CA6B17",
          "amber-light": "#F39C4B",
          ink: "#1E293B",
          slate: "#475569",
          mist: "#F8FAFC",
          cloud: "#EEF2F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "diagonal-band": "linear-gradient(135deg, #1B4F72 0%, #143A56 100%)",
        "amber-band": "linear-gradient(135deg, #E67E22 0%, #CA6B17 100%)",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(27, 79, 114, 0.18)",
        "card-hover": "0 16px 48px -12px rgba(27, 79, 114, 0.28)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
