/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#3232E5",
        borderColor: "#CCD0D7",
        iconsBg: "#B5B5FF",
        footerBg: "#11114D",
        darkPurple: "#2C2CCC",
        lightGray: "#CCD0D7",
      },
      fontSize: {
        xs: "12px",
        sm: "16px",
        md: "22px",
        lg: "32px",
        xl: "48px",
      },
      gradientColorStops: "#9747FF,#7B61FF,#7B61FF,#0035FF",
    },
  },
  plugins: [],
};
