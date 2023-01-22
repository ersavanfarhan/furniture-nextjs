/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        carousel: 'scroll 33s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0rem)' },
          '10%': { transform: 'translateX(0rem)' },
          '20%': { transform: 'translateX(-20rem)' },
          '30%': { transform: 'translateX(-20rem)' },
          '40%': { transform: 'translateX(-40rem)' },
          '50%': { transform: 'translateX(-40rem)' },
          '60%': { transform: 'translateX(-60rem)' },
          '70%': { transform: 'translateX(-60rem)' },
          '80%': { transform: 'translateX(-80rem)' },
          '90%': { transform: 'translateX(-80rem)' },
          '100%': { transform: 'translateX(-105rem)' },
        },
      },
    },
    screens: {
      'xs': {'max': '576px'},
      'sm': {'min': '576px', 'max': '768px'},
      'md': {'min': '768px', 'max': '992px'},
      'lg': {'min': '992px', 'max': '1200px'},
      'xl': {'min': '1200px'},
    }
  },
  plugins: [],
}
