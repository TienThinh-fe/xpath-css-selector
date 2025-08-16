/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        highlight: 'highlight 0.5s ease-in-out',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        highlight: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: '#fbbf24' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
