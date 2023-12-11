/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': 'HindRegular',
        'secondary': 'HindSemiBold'
      },
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    nextui(
    {
      themes: {
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#231F20",
            foreground: "#ffffff",
            primary: "#EFB810",
            secondary: "#9055A2",
            accent: "#BEE3DB",
            crystal: "rgba(255, 255, 255, 0.20)",
          }
        }
      }
    }
  ),
],
}

