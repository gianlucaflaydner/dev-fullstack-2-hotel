/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primaryColor': '#570113',
      'secondaryColor': '#DACBB3',
      slate: colors.slate,
      white: colors.white,
      black: colors.black
      
    }
  },
  plugins: [],
}
