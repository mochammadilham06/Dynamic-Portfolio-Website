/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#08141E",
        secondary: "#49FFEF",
        third: "#0AC1B1",
        fourth: "#75807D",
        fifth: "#F8F8F8",
      },
      fontFamily: {
        montserrat: ["montserrat"],
      },
      boxShadow: {
        light: "12px 9px 16px rgba(255, 255, 255, 0.34);",
        dark: "4px 8px 25px 6px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
