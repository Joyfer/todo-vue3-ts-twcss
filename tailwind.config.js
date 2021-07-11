const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: { light: "#2489cc", DEFAULT: "#007acc"},
        secondary: { light: colors.red[500], DEFAULT: colors.red[600] },
        success: {light: "#64e2a9" , DEFAULT: "#41B883"}
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
