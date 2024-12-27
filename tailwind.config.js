/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary': '#00D4E9', // You can name your color
        'primary2': '#16349D', // You can name your color
        'seconday': '#10B981', // Another custom color
        'gradient1': '#08b9d5', 
        'gradient2': '#D1D5DB', 
        'header': '#222223',
        'footer' : '#272A2F',
        'footerMenu' : '#1C1F24',
        'box' : '#222223',
        'input': '#17181c',
        'purple': '#B96BFC',
      },
      backgroundColor:{
        'purple': '#B96BFC',
        'dashboard-box': '#262B2F',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(133deg, #16349D 3%, #000420 100%)',
        'blue-green-gradient': 'linear-gradient(90deg, #1E40AF, #10B981)',
        'radial-gradient': 'radial-gradient(circle, #ff5733, #10B981)',
        'custom-radial-gradient': 'radial-gradient(circle, #1E40AF, #ff5733)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        blink: 'blink 1s step-start infinite',
      },
      animationDelay: {
        275: '275ms',
        5000: '5s',
      },
      animationDuration: {
        2000: '2s',
        'long': '10s',
        'very-long': '20s',
      },
    },
  },
  plugins: [
    // require('tailwindcss-animated')
  ],
}