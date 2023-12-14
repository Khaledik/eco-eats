/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

