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
          // 100: "#6BFFA5",
          // 200: "#5AFB92",
          // 300: "#49E97F",
          // 400: "#38D76C",
          // 500: "#22C55E",
          // 600: "#11B34B",
          // 700: "#00A138",
          // 800: "#008F25",
          // 900: "#007D12",
          100: "#ff6363",
          200: "#ef4c4c",
          300: "#E04040",
          400: "#E73939",
          500: "#E93535",
          600: "#e72c2c",
          700: "#c42424",
          800: "#981c1c",
          900: "#600f0f",
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
