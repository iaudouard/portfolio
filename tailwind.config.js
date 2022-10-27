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
          bg: "#fff9f2",
          main: "#1e107a",
          accent: "#1e107a",
        },
      },
    },
  },
  plugins: [],
};
