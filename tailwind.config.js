/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mainText-color": "rgba(2, 6, 12, 0.75)",
        "smallText-color": "#8b8d97",
        "border-color": "#e9e9eb",
        "swiggy-color": "#ffa700",
        'shimmer-color': '#d6d8da'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        gothic: ["Dela Gothic One", "cursive"],
      },
    },
  },
  plugins: [],
};
