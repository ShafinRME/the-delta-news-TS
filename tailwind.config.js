/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        right: "right",
        left: "left",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        display: ["Aclonica", "sans-serif"],
        title: ["Source Serif Pro", "serif"],
        heading: ["Merriweather", "serif"],
        description: ["Tinos", "serif"],
      },
      boxShadow: {
        "3xl": "rgb(113 122 131 / 11%) 0px 7px 30px 0px",
        "4xl": "0px 3px 10px 0px rgb(248 96 77 / 19%)",
        "5xl": "0px 6px 30px rgba(38, 78, 118, 0.1)",
        "6xl": "0px 4px 16px 0px rgb(248 96 77 / 11%)",
        "7xl": "0px 3px 15px 0px rgb(248 96 77 / 19%)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F6621E",
          "primary-content": "#F6621E", ///bg colors
          secondary: "#121212", ///p color
          "secondary-content": "rgb(51 65 85 /1)",
          accent: "#000000",
          "accent-content": "#303030",
          neutral: "#5A5A5A",
          "neutral-content": "rgb(15 23 42 /1)", ///h1 color
          "base-100": "#FFFFFF", ///bg main and button text color
          info: "#ebebeb",
          "info-content": "#ebebeb",
          success: "#f3f3f3",
          "success-content": "#f8f8f8",
          warning: "rgb(226, 226, 226)",
          "warning-content": "#e2e2e2", ///border colors
          // error: "#176f6b",
          error: "#111111",
          "error-content": "#007a70",
          "error-content1": "#c7c7c7",
        },
      },
      {
        dark: {
          primary: "#539bf5",
          "primary-content": "#18BB70",
          secondary: "#A6ADBA",
          "secondary-content": "#A6ADBA",
          accent: "#F6621E",
          "accent-content": "#e5e7eb",
          neutral: "#cdd9e5",
          "neutral-content": "#adbac7",
          "base-100": "#22272E",
          info: "#ebebeb",
          "info-content": "#A6ADBA",
          success: "#F3F4F6",
          "success-content": "#2d333b",
          warning: "#444c56",
          "warning-content": "#444c56", ///border colors
          error: "#347d39",
          "error-content": "#347d39",
          "error-content1": "#444c56",
        },
      },
    ],
  },
  plugins: [require("daisyui", "@tailwindcss/typography")],
};
