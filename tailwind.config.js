/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Source Serif 4', 'Georgia', 'serif'],
      },
      screens: {
        desktop: '1440px', // Desktop layout from Figma WEB-* frames
      },
    },
  },
  plugins: [],
};
