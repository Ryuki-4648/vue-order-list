/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        'shadow01': '3px 3px 8px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}