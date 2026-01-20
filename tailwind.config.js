/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#F97316',
        purple: '#C084FC',
        dark: '#0B1120',
        card: '#111827',
        muted: '#94A3B8',
        accent: '#FFEDD5'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        'glow-lg': '0 8px 40px rgba(249,115,22,0.12), 0 2px 12px rgba(0,0,0,0.35)'
      }
    },
  },
  plugins: [],
};
