/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-600': '#2563eb',
        'yellow-100': '#fef9c3',
      }
    },
  },
  plugins: [],
}
