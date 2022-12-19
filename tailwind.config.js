/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        layout: ["header header", "nav nav", "sidebar content"],
      },
      gridTemplateColumns: {
        layout: "180px 1fr",
      },
      gridTemplateRows: {
        layout: "min-content min-content 1fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
