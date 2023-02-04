module.exports = {
  content: [
    // app content
    "./pages/**/*.{ts,tsx}",
    // packages content
    "../../packages/ui/src/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%": { opacity: 0.2 },
          "20%": { opacity: 1 },
          "100%": { opacity: 0.2 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
