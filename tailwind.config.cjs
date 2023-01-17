/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        wigglexr: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        wigglexl: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        wigglescale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(100%)" },
        },
        wiggle2: {
          "0%": { opacity: ".1" },
          "50%": { opacity: ".5" },
          "100%": { opacity: "1" },
        },
        wiggle3: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
