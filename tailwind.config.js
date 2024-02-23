/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "grey": "var(--grey)",
        "light-grey": "var(--light-grey)",
        "dark-grey": "var(--dark-grey)",
        "success": "var(--success)",
        "info": "var(--info)",
        "silver": "var(--silver)"
      },
      dropShadow: {
        "card": "0 2px 4px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
}

