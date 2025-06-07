/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0d0d0d",             // Main background
        purple: "#c084fc",          // Neon purple
        pink: "#f472b6",            // Neon pink
        cyan: "#22d3ee",            // Cyan accents
        textPrimary: "#e5e5e5",     // Main text
        textSecondary: "#9ca3af",   // Dimmed text
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
