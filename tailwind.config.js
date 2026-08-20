/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        paper: "#F6F5F3",
        cream: "#ECEAE5",
        silver: "#C4C2BD",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0", transform: "translateY(6px)" }, "100%": { opacity: "1", transform: "none" } },
        reveal: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "none" } },
      },
      animation: {
        fadeIn: "fadeIn .4s ease both",
        reveal: "reveal .8s cubic-bezier(.22,.61,.36,1) both",
      },
    },
  },
  plugins: [],
};
