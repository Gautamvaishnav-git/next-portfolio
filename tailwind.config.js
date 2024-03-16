const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        text1: colors.teal[300],
        primary1: colors.gray[900],
        text2: colors.gray[400],
        primary2: colors.gray[800],
      },
      fontFamily: {
        sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
      },
    },

  },
  plugins: [require('@tailwindcss/typography')],
}

