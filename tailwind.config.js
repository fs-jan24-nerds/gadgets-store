/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '500px',
        tablet: '640px',
        laptop: '970px',
        desktop: '1200px',
      },
      fontFamily: {
        'mont-bold': ['Mont-Bold', 'sans-serif'],
        'mont-regular': ['Mont-Regular', 'sans-serif'],
        'mont-semiBold': ['Mont-semiBold', 'sans-serif'],
        'mont-Bold': ['Mont-Bold', 'sans-serif'],
        'inter-regular': ['Inter-Regular', 'sans-serif'],
        'monrope-regular': ['Manrope-Regular', 'sans-serif'],
      },
      spacing: {
        'max-width': '1136px',
      },
      colors: {
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--color-accent-hover) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'surface-0': 'rgb(var(--color-surface-0) / <alpha-value>)',
        'surface-1': 'rgb(var(--color-surface-1) / <alpha-value>)',
        'surface-2': 'rgb(var(--color-surface-2) / <alpha-value>)',
        icons: 'rgb(var(--color-icons) / <alpha-value>)',
        elements: 'rgb(var(--color-elements) / <alpha-value>)',
        'hover-bg': 'rgb(var(--color-hover-bg) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        green: 'rgb(var(--color-green) / <alpha-value>)',
        red: 'rgb(var(--color-red) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        graphite: '#4C4C4C',
        textMain: 'rgb(var(--color-text-main) / <alpha-value>)',
        textSecondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
      },
      boxShadow: {
        '3xl': '0px 5px 12px -1px rgba(153,153,153,0.34)',
      },
      gridTemplateColumns: {
        mobile: 'repeat(4, 1fr)',
        tablet: 'repeat(12, 1fr)',
        desktop: 'repeat(24, 32px)',
      },
      gridColumn: {
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
      },
    },
  },
  plugins: [],
};
