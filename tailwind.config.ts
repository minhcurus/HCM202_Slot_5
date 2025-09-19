import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        crimson: ["var(--font-crimson)", "Crimson Text", "serif"],
      },
      colors: {
        // Warm light theme colors - more colorful but harmonious
        primary: {
          50: "#f8fafc",
          100: "#f1f5f9", 
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        accent: {
          50: "#fefcf3",
          100: "#fef7e6",
          200: "#fcecc0",
          300: "#f9db94",
          400: "#f4c466",
          500: "#f0b13e",
          600: "#e39d2a",
          700: "#bc7e21",
          800: "#996520",
          900: "#7d531f",
        },
        warm: {
          50: "#fef7ed",
          100: "#fdf2d9",
          200: "#fae2b3",
          300: "#f6cd82",
          400: "#f1b34f",
          500: "#ed9d2a",
          600: "#de8820",
          700: "#b8701d",
          800: "#925a20",
          900: "#764a1e",
        }
      },
    },
  },
  plugins: [],
};

export default config;