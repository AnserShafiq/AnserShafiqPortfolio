/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'header-back': '#262626',
      }
    },
  },
  plugins: [],
} 