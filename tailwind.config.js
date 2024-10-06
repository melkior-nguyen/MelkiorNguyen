/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        appWhite: "#f0f3fa",
        appBlack: "#0B1215",

        appGray: "#9fa2a8",
        appGrayFocus: "#D4D6D8",

        content: "#3A3B3C",

        primary: "blue"
      },
      boxShadow: {
        app: "0 1px 3px 0 #0B1215, 0 1px 2px -1px #0B1215;"
      }
    },
  },
  plugins: [],
}

