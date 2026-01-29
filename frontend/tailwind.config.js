/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFD700',
          dark: '#FFA500',
          light: '#FFED4E',
        },
      },
    },
  },
  plugins: [],
}
