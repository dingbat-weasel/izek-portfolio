/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "var(--bgColor)",
        textColor1: "var(--textColor1)",
        textColor2: "var(--textColor2)",
        accentColor: "var(--accentColor)",
        highlightColor: "var(--highlightColor)",
      },
    },
  },
  plugins: [],
};
