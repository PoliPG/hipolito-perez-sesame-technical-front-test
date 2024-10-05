/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        turquoise: {
          200: '#6C63FF',
          900: '#1F2D52'
        },
        gray: {
          10: '#F8FAFC'
        }
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      }
    }
  },
  plugins: []
}
