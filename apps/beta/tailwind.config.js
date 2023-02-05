const base = require("tailwind-config/tailwind.config.js");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  ...base,
  content: [
    ...base.content,
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
};
