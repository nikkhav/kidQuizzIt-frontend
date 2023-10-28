/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1300px",
        "2xl": "1496px",
      },
    },
    screens: {
      vsm: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      green: "#009900",
      yellow: "#f9c126",
      black: "#1d1d1b",
      white: "#fff",
      error: "#FF0000",
      warning: "#FFFF00",
      success: "#00FF00",
    },
    extend: {
      fontFamily: {
        main: "Fira Sans, sans-serif",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
    plugins: [],
  },
};
