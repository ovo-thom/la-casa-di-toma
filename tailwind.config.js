/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      sauge: "#81B29A",
    },
    fontFamily: {
      italianno: ['Italianno', 'cursive'],
      lato: ['Lato', 'sans-serif'],
    },
  },
},
  plugins: [],
}