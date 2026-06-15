import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7ee",
          100: "#e0ecda",
          200: "#c3dab8",
          300: "#9ac290",
          400: "#71a769",
          500: "#508c47",
          600: "#3a6b35",
          700: "#2d5016",
          800: "#263f1f",
          900: "#1e3319",
          950: "#0f1f0a",
        },
        gold: {
          50: "#fdf9ee",
          100: "#f9f0d3",
          200: "#f2dea1",
          300: "#e9c665",
          400: "#e2af3b",
          500: "#c9a84c",
          600: "#b08c38",
          700: "#8d6d2c",
          800: "#74572a",
          900: "#614827",
        },
        warm: {
          50: "#fafaf5",
          100: "#f5f5ec",
          200: "#ebebd9",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
