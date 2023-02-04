const base = require("tailwind-config/tailwind.config.js");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  ...base,
  content: [...base.content, "./components/**/*.{ts,tsx}"],
};
