/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@les-ui/react/dist/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  }
} 