/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0095b9', // You can name your color
        'seconday': '#10B981', // Another custom color
        'gradient1': '#08b9d5', 
        'gradient2': '#D1D5DB', 
        'header': '#222223',
        'footer' : '#222223',
        'box' : '#222223',
        'input': '#17181c',
        'purple': '#B96BFC',
      },
      backgroundColor:{
        'purple': '#B96BFC',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(270deg, #0a9c69 3%, rgba(45, 229, 114, 1) 100%)',
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
    require('tailwindcss-animated')
  ],
}