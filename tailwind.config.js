/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        darkgray: "#4F5D75"
      },
      boxShadow : {
        '3xl' :'0px 0px 4px #474b4b',
      }
    },
  },
}
