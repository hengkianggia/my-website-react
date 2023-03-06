/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#0B0B0D",
        abu: "#CEC9C9",
      },
      fontSize: {
        sm: ["16px", "22px"],
        md: ["24px", "30px"],
        lg: ["64px", "64px"],
        xl: ["104px", "96px"],
      },
      fontFamily: {
        Fabulous: ["Fabulous", "sans-serif"],
        Runs: ["Runs", "sans-serif"],
      },
    },
  },
  plugins: [],
};
