/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx}",
    // "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#__next", //#root
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        90: "22.5rem",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
      },
      fontFamily: {
        galaxyoutline: "'SfDistantGalaxyOutline-xoeO'",
        galaxyregular: "'SfDistantGalaxy-0l3d'",
        galaxyitalic: "'SfDistantGalaxyAltoutlineItalic-ZJDZ'",
        deathstar: "'DeathStar-VmWB'",
      },
      backgroundImage: {
        global: "url('/star-wars-background.png')",
      },
      colors: {
        // "#FFE81F",
        yellow: "#EEDB00",
        black: "#000000",
        gray: "#C7C7C7",
        dwhite: "#D3D3D3",
        dgray: "#303030",
        red: "#AB1822",
        zinc: "#52525b",
      },
      fontSize: {
        title: "clamp(1rem, 7.2vw, 4rem)",
        subtitle: "clamp(0.7rem, 5.9vw, 3rem)",
      },
      zIndex: {
        loader: `(theme) => theme.zIndex.drawer + 1`,
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
