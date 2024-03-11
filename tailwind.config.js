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
      },
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
