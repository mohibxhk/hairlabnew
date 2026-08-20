/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f3ef',
        ink: '#0d0d0d',
        silver: '#a3a3a3',
        cream: '#eae8e1',
      },
    },
  },
  plugins: [],
}
