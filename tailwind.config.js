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
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
