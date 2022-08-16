/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.imgur.com/y6allgB.jpg')"    
    },
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4"),
    }),
  },
  plugins: [],
}}
