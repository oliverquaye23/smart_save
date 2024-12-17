/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mont: ["Montserrat", "sans-serif"],
        Mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        blu: '#0070ff', 
      },
    },
  },
  plugins: [],
};
