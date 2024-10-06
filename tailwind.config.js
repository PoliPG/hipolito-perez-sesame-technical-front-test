/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'blue-marguerite': {
          50: '#ecf0ff',
          100: '#dde2ff',
          200: '#c2caff',
          300: '#9ca6ff',
          400: '#7577ff',
          500: '#6c63ff',
          600: '#5036f5',
          700: '#452ad8',
          800: '#3825ae',
          900: '#312689',
          950: '#1F2D52'
        },
        gray: {
          10: '#F8FAFC'
        }
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      },
      maxWidth: {
        '8xl': '1440px'
      }
    }
  },
  plugins: []
}
