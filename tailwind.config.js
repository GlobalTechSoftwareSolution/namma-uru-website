/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Optional (for Next.js 13+ App Router)
    './src/**/*.{js,ts,jsx,tsx}', // Optional (if using a `src` directory)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}