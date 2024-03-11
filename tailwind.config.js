import { slate, iris, ruby, indigo } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        ...slate,
        ...iris,
        ...ruby,
        ...indigo,
        'primary-dark': '#1c1c1c', // Background color for dark mode
        light: '#ffffff', // Background color for light mode
      },
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
