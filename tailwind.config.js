const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height'
      },
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '87rem',
      },
      colors: {
        primary: {
          100: "#ff6363",
          200: "#ef4c4c",
          300: "#E04040",
          400: "#E73939",
          500: "#E93535",
          600: "#e72c2c",
          700: "#d22525",
          800: "#a21e1e",
          900: "#751414",
        },
        dark: "#202023",
        darkSecondary: "#313131",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
