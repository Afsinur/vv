import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  safelist: [
    // grid column counts
    { pattern: /^grid-cols-[1-9]$/ },
    { pattern: /^grid-cols-1[0-2]$/ },
    { pattern: /^sm:grid-cols-[1-9]$/ },
    { pattern: /^md:grid-cols-[1-9]$/ },
    { pattern: /^lg:grid-cols-[1-9]$/ },

    // column spans
    { pattern: /^col-span-[1-9]$/ },
    { pattern: /^sm:col-span-[1-9]$/ },
    { pattern: /^md:col-span-[1-9]$/ },
    { pattern: /^lg:col-span-[1-9]$/ },

    // row spans
    { pattern: /^row-span-[1-9]$/ },
    { pattern: /^sm:row-span-[1-9]$/ },
    { pattern: /^md:row-span-[1-9]$/ },
    { pattern: /^lg:row-span-[1-9]$/ },

    // auto rows (arbitrary values)
    { pattern: /^auto-rows-\[\d+px\]$/ },
    { pattern: /^md:auto-rows-\[\d+px\]$/ },
    { pattern: /^lg:auto-rows-\[\d+px\]$/ },
  ],
  theme: {
    extend: {
      gridAutoRows: {
        base: "200px", // ↓ base height for row-span 1
        lg: "260px",
      },
      clipPath: {
        "hide-bottom": "inset(0 0 20px 0)",
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#0A0A0A",
        muted: "#F2F3F5",
        border: "#E5E7EB",
        primary: {
          DEFAULT: "#Dc111e",
          foreground: "#FFFFFF",
          600: "#C91522",
          700: "#B0131E",
        },
        navy: {
          DEFAULT: "#0E2A52",
          2: "#123566",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0A0A0A",
        },
        "muted-foreground": "#6B7280",
        highlight: "#FF6F75", // scribble stroke color (soft red/pink)
        pill: {
          bg: "#E21C2A",
          text: "#FFFFFF",
        },
        campaign: {
          pillBg: "#E21C2A",
          pillFg: "#FFFFFF",
          meta: "#6B7280",
        },
      },
      borderColor: {
        subtle: "#E6E6E6",
      },
      borderRadius: {
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)",
        lift: "0 10px 24px rgba(0,0,0,0.12)",
        media: "0 14px 40px rgba(0,0,0,0.14)",
        campaign: "0 12px 28px rgba(0,0,0,0.12)",
        overlay: "0 18px 40px rgba(0,0,0,.18)",
        tcard: "0 18px 40px rgba(0,0,0,.16)",
        blog: "0 16px 38px rgba(0,0,0,.14)",
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
