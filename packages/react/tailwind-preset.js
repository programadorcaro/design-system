/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

module.exports = config;
