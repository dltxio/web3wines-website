/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/images/HeroBackground.png')",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'navbar': '#987654',
        'page': '#722F37', //bordeaux
      },
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
    }),
  ]
};
