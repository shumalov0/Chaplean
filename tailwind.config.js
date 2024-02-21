/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mainColor": "#141526",
       " blueColor": "#1D9BF0",
        "blueSecond": "#292C3D",
        "whiteColor": "#EEEEEE",
        "grayColor": "#828282",
        "darkColor": "#828282",
      },
      fontFamily: {
        "pop":["Poppins"]
      },
      fontSize:{
        "61":"3.813rem",
        "49":"3.063rem",
        "39":"2.438rem",
        "31":"1.938rem",
        "25":"1.563rem",
        "20":"1.25rem",
        "16":"1rem",
        "13":"0.813rem",
      }
    },
  },
  plugins: [],
};
