/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        app: 'url(/cruzeiro.png)'
      }
    },
  },
  plugins: [],
}