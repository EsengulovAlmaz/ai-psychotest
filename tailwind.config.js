/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      mobile: '380px',
      tablet: '640px',
      desktop: '1200px',
    },
  },
  plugins: [],
}