const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Nunito, Open Sans"],
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      blueGray: colors.blueGray,
      lightBlue: colors.lightBlue,
    },
    extend: {
      spacing: {
        100: "28.125rem",
        110: "40.063rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
