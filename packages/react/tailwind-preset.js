/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
      },
      colors: {
        pink: "#F231A5",
        blue: {
          100: "#090b1d",
          200: "#000010",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

module.exports = config;
