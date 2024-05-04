/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#3232E5",
        borderColor: "#CCD0D7",
        iconsBg: "#B5B5FF",
      },
      fontSize: {
        lg: "32px",
        xl: "48px",
      },
    },
  },
  plugins: [],
};
