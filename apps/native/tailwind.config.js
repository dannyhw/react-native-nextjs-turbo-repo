const base = require("tailwind-config/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: ["./src/**/*", "../../packages/ui/src/**/*.{js,jsx,ts,tsx,mjs}"],
};
