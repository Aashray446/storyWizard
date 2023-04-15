/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poiret_one: ["Poiret One", "sans-serif"],
      signika: ["Signika", "sans-serif"],
    },
    mytheme: {
      primary: "#5d52f2",
      secondary: "#d1d100",
      accent: "#f9c2eb",
      neutral: "#26212B",
      "base-100": "#2B2749",
      info: "#7AC7F0",
      success: "#14A990",
      warning: "#FAD54C",
      error: "#F12760",
    },
    extend: {
      colors: {
        martinique: "#2e2b49",
        "brilliant-rose": "#ee5599",
        "caribbean-green": "#0cc2ac",
        "energy-yellow": "#f9d561",
        "royal-blue": "#3b66f4",
        cosmic: "#633457",
        comet: "#535580",
        "japanese-laurel": "#047b0d",
        armadillo: "#433a34",
      },
    },
  },
  plugins: [require("daisyui")],
};
