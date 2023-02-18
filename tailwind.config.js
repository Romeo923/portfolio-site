/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo:{
          white: {
            1:'#ffffff',
            2:'#e6e6e6',
            3:'#cccccc'
          },
          black: {
            1:'#000000',
            2:'#111111',
            3:'#2a2a2a'
          }
        },
        primary:{
          light:"#ecf0f3",
          dark:"#1f2937"
        },
        accent: "#5651e5"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
