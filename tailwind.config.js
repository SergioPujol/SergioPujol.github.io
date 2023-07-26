/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Custom Background Colors
        'bg-primary': '#1b2024',
        'bg-secondary': '#242b35',

        // Custom Text Colors
        't-primary': '#ffffff',
        't-secondary': '#9299a0',

        // Custom Accent Color
        'accent': '#1064f5'//'#5afece',
      }
    },
  },
  plugins: [],
}
