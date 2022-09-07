/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans"],
        alata: ["Alata"]
      },
      letterSpacing: {
        widest: ".3em"
      }
    }
  },
  plugins: []
}
