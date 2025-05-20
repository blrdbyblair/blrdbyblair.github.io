/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bone': '#f8f7f3',
        'taupe': '#c8c0b8',
        'black': '#0a0a0a',
        'gold': '#d4af37',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Canela', 'Georgia', 'serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'glossy': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      },
    },
  },
  plugins: [],
}
