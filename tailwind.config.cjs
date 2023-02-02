/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require("tailwind-heropatterns")({
      variants: [],
      patterns: ["plus"],
      colors: {
        default: "#FFF"
      },
      opacity: {
        default: "0.05"
      }
    })
  ]
};
