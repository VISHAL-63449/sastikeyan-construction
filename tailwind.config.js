/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4C81",
        secondary: "#F59E0B",
        white: "#FFFFFF",
        background: "#F8FAFC",
        text: "#1F2937"
      },
      fontFamily: {
        headings: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
