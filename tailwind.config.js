/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['cairo', 'sans-serif'],
      },
      colors: {
        primary: "#E3001B",
        secondary: "#00338D"
      }
    },
  },
  plugins: [],
}
