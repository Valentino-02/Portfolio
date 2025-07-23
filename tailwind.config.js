/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-blue": "#00000a",
        "main-pink": "#f0609e",
        "main-blue": "#3b74ba",
        "main-yellow": "#fbad18",
        "deep-blue": "#000010",
        "dark-blue": "#080719",
        "light-blue": "#2a293e",
      },
    },
  },
  plugins: [],
};
