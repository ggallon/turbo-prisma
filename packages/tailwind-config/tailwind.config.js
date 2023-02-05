/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // app content
    "./pages/**/*.{ts,tsx}",
    // packages content
    "../../packages/ui/src/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          light: "#f5f5f7",
          dark: "#1d1d1f",
          link: "#2997ff",
        },
      },
      keyframes: {
        blink: {
          "0%": { opacity: 0.2 },
          "20%": { opacity: 1 },
          "100%": { opacity: 0.2 },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
