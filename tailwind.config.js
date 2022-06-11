/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: 'Source Sans Pro, sans-serif',
      },
      fontSize: {
        'display-2xl': ['4.5rem', 1],
        'display-xl': ['3.75rem', 1],
        'display-lg': ['3rem', 1],
        'display-md': ['2.25rem', '2.5rem'],
        'display-sm': ['1.875rem', '2.25rem'],
        'display-xs': ['1.5rem', '2rem'],
        'xl': ['1.25rem', '1.875rem'],
        'lg': ['1.125rem', '1.75rem'],
        'md': ['1rem', '1.5rem'],
        'sm': ['0.875rem', '1.25rem'],
        'xs': [' 0.75rem', '1.125rem'],
      },
      colors: {
        primary: '#2C0B61',
        secondary: '#D04579',

        info: '#1D71F2',
        success: '#12B76A',
        warning: '#F79009',
        error: '#F04438',

        neutral: {
          50: '#F8FAFC',
          100: '#EEF2F6',
          200: '#E3E8EF',
          300: '#CDD5DF',
          400: '#9AA3B2',
          500: '#697586',
          600: '#4B5565',
          700: '#364152',
          800: '#202939',
          900: '#121926',
        },
      },
    },
  },
  plugins: [],
};
