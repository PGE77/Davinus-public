/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx, css}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#333333",
      orange: "#FEF5E4",
      orangeLight: "#FFE3C1",
      orangeDark:"#C57847",

    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "13px",
      md: "14px",
      base: "15px",
      "xl0":"16px",
      "0xl": "17px",
      "1xl": "18px",
      "xl": "20px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "38px",
      "5xl": "43px",
      "5xl5":"50px",
      "6xl": "59px",
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      height: {
        coverHeight: "655px",
      },
      backgroundImage: {
        'coverGradient': 'linear-gradient(360deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 100%)', // Dolní gradient
        'coverGradientTop': 'linear-gradient(180deg, rgba(0, 0, 0, 0.79) 0%, rgba(0, 0, 0, 0) 100%)', // Horní gradient
      },

      boxShadow: {},
      fontFamily: {
        sans: ["Poppins"],
        serif: ["IvyMode"],
      },
    },
  },
  plugins: [],
};
