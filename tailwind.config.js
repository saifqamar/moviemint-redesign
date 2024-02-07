/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'm-Primary': '#b0d357',
        'm-background': '#121212',
        'mtext': '#ffffff',
        'mgray': '#1E2329',
        'crdGray': '#1D1C1C',
        'grayText': '#938E8E'
      }
    },
  },
  plugins: [],
}