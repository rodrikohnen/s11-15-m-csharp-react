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
<<<<<<< HEAD
<<<<<<< HEAD
          DEFAULT: "#6785B4",
<<<<<<< HEAD
=======
          50: '#545454',
          100: '#757575'
>>>>>>> 17ab650 (fix: custom colors for the tailwind)
        },
        secondary: {
          DEFAULT: "#563189",
        },
<<<<<<< HEAD
=======
        danger: {
          DEFAULT: '#D9D9D9',
          50: '#D9D9D9'
        },
>>>>>>> 17ab650 (fix: custom colors for the tailwind)
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
      },
=======
          DEFAULT: '#545454',
          50: '#545454',
          100: '#757575'
        },
        danger: {
          DEFAULT: '#D9D9D9',
          50: '#D9D9D9'
        }
      }
>>>>>>> 775c524 (Update tailwind.config.js)
=======
          DEFAULT: "#6785B4",
          50: "#545454",
          100: "#757575",
        },
        secondary: {
          DEFAULT: "#563189",
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
      },
>>>>>>> 6e7b7ec (Change: Tailwind config)
    },
  },
  plugins: [],
};
