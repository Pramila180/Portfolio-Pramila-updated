import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   "#080810",
          secondary: "#0d0d1a",
          tertiary:  "#111120",
        },
        surface: {
          DEFAULT: "#13131f",
          2:        "#18182a",
          3:        "#1c1c30",
        },
        violet: {
          50:  "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        cyan: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
        },
        "obsidian": {
          950: "#05050a",
          900: "#0a0a12",
          800: "#10101e",
          700: "#16162a",
          600: "#1e1e38",
          500: "#272744",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      boxShadow: {
        "violet-sm": "0 0 0 1px rgba(139,92,246,0.3), 0 2px 8px rgba(139,92,246,0.15)",
        "violet-md": "0 0 0 1px rgba(139,92,246,0.4), 0 4px 24px rgba(139,92,246,0.2)",
        "violet-lg": "0 0 0 1px rgba(139,92,246,0.5), 0 8px 48px rgba(139,92,246,0.3)",
        "surface":   "0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.2)",
        "deep":      "0 4px 6px rgba(0,0,0,0.5), 0 12px 40px rgba(0,0,0,0.35)",
      },
      transitionTimingFunction: {
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up":    "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":    "fade-in 0.4s ease both",
        "float":      "float 7s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "shimmer":    "shimmer 4s linear infinite",
        "scan":       "scan 5s linear infinite",
        "spin-slow":  "spin 12s linear infinite",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":     { transform: "translateY(-10px) rotate(1deg)" },
          "66%":     { transform: "translateY(-5px) rotate(-1deg)" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(0.95)", opacity: "1" },
          "100%": { transform: "scale(1.4)",  opacity: "0" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
