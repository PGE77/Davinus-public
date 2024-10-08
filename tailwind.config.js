/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx, css}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#333333",
      orange:"#FEF5E4",
      orangeLight:"#FFE3C1",


    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "13px",
      md: "14px",
      base: "15px",
      "0xl":"17px",
      "1xl": "18px",
      "xl":"20px",
      "2xl": "24px",
      "3xl":"30px",
      "4xl": "38px",
      "5xl": "43px",
      "6xl": "117px",
    },
    extend: {
     backgroundImage: {

      },
      boxShadow: {

      },
      fontFamily: {
        sans: [""],
        serif: [""],
      },
    },
  },
  plugins: [],
};

