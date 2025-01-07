/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add paths to any component files in other projects that need these styles
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  // This is important - it allows Tailwind classes to be used in other projects
  corePlugins: {
    preflight: false,
  },
}
