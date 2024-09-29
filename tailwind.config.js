/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        sesameBlue: {
          900: '#1F2D52'
        }
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      }
    }
  },
  plugins: []
}
