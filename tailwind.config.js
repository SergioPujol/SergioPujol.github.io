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
        'bg-main': '#1b1b1b',
        'bg-container': '#242424',

        // Custom Text Colors
        't-primary': '#f7f7f7',
        't-secondary': '#bcbcbc',

        // Custom Accent Color
        'accent': '#5afece',
      }
    },
  },
  plugins: [],
}
