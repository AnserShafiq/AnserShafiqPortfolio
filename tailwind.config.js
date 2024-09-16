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
        'underline-black':'#000',
        'header-back': '#262626',
      },
      height:{
        'underline-thinkness': '2px',
      },
      transitionDuration:{
        'underline': '1000ms'
      }


    },
  },
  plugins: [
  ],
} 