/** @type {import('tailwindcss').Config} */

export default {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: ['class'],
  variableName: ['Pixelify Sans', 'serif'],
  theme: {
    extend: {
      fontFamily:{
      "pixel": ['Pixelify Sans', 'serif']
      }
    },
  },
  plugins: [],
}

