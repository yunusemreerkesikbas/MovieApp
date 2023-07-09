/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      padding: {
        default: "1rem",
        xs: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "5rem",
      },
      screens: {
        xs: { max: "500px" },
      },
    },
  },
  variants: {},
  plugins: [],
};
