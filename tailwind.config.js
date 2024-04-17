/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mont-bold': ['Mont-Bold', 'sans-serif'],
        'mont-regular': ['Mont-Regular', 'sans-serif'],
        'mont-semiBold': ['Mont-semiBold', 'sans-serif'],
      },
      colors: {
        primary: '#313237',
        secondary: '#89939A',
        icons: '#B4BDC3',
        elements: '#E2E6E9',
        'hover-bg': '#FAFBFC',
        white: '#FFFFFF',
        green: '#27AE60',
        red: '#EB5757',
      },
    },
  },
  plugins: [],
};
