/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",
  "./*.{html,js}",
"./pages**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/assets/clouds.png')",
      },
      fontFamily:
      {
        'Jim' : ['Jim Nightshade'],
      }
    }
  },
  plugins: [],
}

