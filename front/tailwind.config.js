/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6785B4",
          50: "#545454",
          100: "#757575",
          20: "rgba(103, 133, 180, 0.20)",
        },
        secondary: {
          DEFAULT: "#563189",
          20: "rgba(86, 49, 137, 0.2)",
        },
        danger: {
          DEFAULT: "#D9D9D9",
          50: "#D9D9D9",
        },
        danger: {
          DEFAULT: "#D9D9D9",
          50: "#D9D9D9",
        },
        accent: {
          DEFAULT: "#E94675",
        },
        negromate: {
          DEFAULT: "#020336",
        },
        zinc: {
          DEFAULT: "#F2F2F2",
        },
        darkzinc: {
          DEFAULT: "#D9D9D9",
        },
        inactivo: {
          DEFAULT: "#4F4F4F",
          60: "#4F4F4F99",
        },
      },
    },
  },
  plugins: [],
};
