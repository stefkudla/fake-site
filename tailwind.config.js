/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        reddish: '#EE2D1C',
        blackish: '#4C4C51',
        blueish: '#88939E',
      },
      fontFamily: {
        sans: ['Source Sans Pro', ...fontFamily.sans],
      },
    },
  },
}
