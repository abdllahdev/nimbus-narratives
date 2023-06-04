/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.blue["400"],
        secondary: colors.indigo["400"],
        accent: colors.pink["400"],
        neutral: colors.neutral["900"],
        "neutral-content": colors.neutral["100"],
        base: colors.slate["900"],
        "base-content": colors.slate["100"],
        info: colors.blue["400"],
        success: colors.green["400"],
        warning: colors.yellow["400"],
        error: colors.red["400"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
