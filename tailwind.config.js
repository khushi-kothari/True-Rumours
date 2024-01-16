/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      beige: "rgb(240, 237, 231)",
      lightBeige: "rgb(243, 240, 234)",
      darkBeige: "rgb(230, 225, 219)",
    },
    // screens: {
    //   "2xl": "1440px", // or any value you prefer
    // },
  },
  plugins: [require("flowbite/plugin")],
};
