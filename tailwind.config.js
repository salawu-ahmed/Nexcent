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
        "dark-grey": "var(--dark-grey)",
        "light-grey": "var(--light-grey)",
        "success": "var(--success)",
        "info": "var(--info)",
        "silver": "var(--silver)"
      }
    },
  },
  plugins: [],
}

