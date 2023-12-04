/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "DM Sans, sans-serif",
    },

    extend: {
      gridTemplateColumns: {
        layout: "15rem, 1fr",
      },
      gridTemplateRows: {
        layout: "auto, 1fr",
      },
      height: {
        screen: "100svh",
      },
    },
  },
  plugins: [],
};
