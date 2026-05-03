/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B6D',
        'secondary': '#F8F4DB',
        'accent': '#455A64',
        'neutral': {
          50: '#F8F4DB',
          100: '#E9E0DD',
          200: '#C5B583',
          300: '#93886A',
          400: '#6D6146',
          500: '#455A64',
          600: '#303F47',
          700: '#19222C',
          800: '#151920',
          900: '#090E15',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}