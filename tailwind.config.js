/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F97316",
        purple: "#C084FC",
        dark: "#0B1120",
        card: "#111827",
        muted: "#94A3B8",
      },
    },
  },
  plugins: [],
};