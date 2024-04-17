/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '640px',
        md: '768px',
        lg: '1200px',
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
