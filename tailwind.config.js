/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        outfit : '"Outfit", serif',
      },
      colors : {
        coffee : '#7f5539',
      }
    },
  },
  plugins: [],
  mode: 'jit',
}

