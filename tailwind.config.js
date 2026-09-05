/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#14213D',
        'brand-gold': '#FCA311',
        'brand-light': '#F4F4F2',
        'brand-line': '#E5E5E5',
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
