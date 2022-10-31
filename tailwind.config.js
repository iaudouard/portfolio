const { readBuilderProgram } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "4ch": "4ch",
      },
      colors: {
        theme: {
          bg: "rgb(0,0,0)",
          main: "rgb(0,0,0)",
          accent: "#fff",
        },
      },
    },
  },
  plugins: [],
};
