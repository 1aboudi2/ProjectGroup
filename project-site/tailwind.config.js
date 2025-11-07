/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'collage-overlay':
          'linear-gradient(rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.7))',
      },
    },
  },
  plugins: [],
}

