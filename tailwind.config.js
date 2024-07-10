/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "232f3e",

          secondary: "#007955",

          accent: "#E47732",

          neutral: "#002926",

          "base-100": "#FFFFFF",

          info: "#008ace",

          success: "#009b6d",

          warning: "#d96d00",

          error: "#ff3c4f",
        },
      },
    ],
  },
};
