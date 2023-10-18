/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#545454',
          50: '#545454',
          100: '#757575'
        },
        danger: {
          DEFAULT: '#D9D9D9',
          50: '#D9D9D9'
        }
      }
    },
  },
  plugins: [],
}
