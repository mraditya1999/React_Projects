/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#4DC39E',
          500: '#20B486',
          600: '#1A906B',
          900: '#06241B',
          1000: '#21212F',
        },

        secondary: {
          50: '#FFFAF5',
          500: '#FFC27A',
        },
        grey: {
          500: '#6D737A',
          600: '#52565C',
        },
        tertiary: {
          500: '#536E96',
        },
      },
    },
  },
  plugins: [],
};
