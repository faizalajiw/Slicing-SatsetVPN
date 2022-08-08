/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B132A',
      },
      dropShadow: {
        'xl': '0 20px 13px rgba(245, 56, 56, 0.35)',
      },
    },
  },
  plugins: [],
}
