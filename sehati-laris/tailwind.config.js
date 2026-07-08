/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8b6b4a',
        'primary-dark': '#6c5644',
        'accent': '#a9914a',
        'cream': '#e9d8ae',
        'text-dark': '#77614f',
        'bg-light': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}