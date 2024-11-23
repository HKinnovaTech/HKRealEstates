/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardgray: {
          95: '#141414',
          60: '#999999',
          10: '#1A1A1A'
        },
        bpurple: {
          60: '#8254F8'
        }
      }
    },
  },
  plugins: [],
};
