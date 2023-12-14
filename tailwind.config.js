/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '319px',  // Adjusted to 530 pixels
        'md': '760px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

