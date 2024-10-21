/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--blue)",
        yellow: "var(--yellow)",
        accent: "var(--light-red)",
        green: "var(--light-green)",
        grey: "var(--light-grey)",
      },
      backgroundColor: {
        background: "var(--background)",
        primary: "var(--blue)",
        yellow: "var(--yellow)",
        accent: "var(--light-red)",
        green: "var(--light-green)",
        grey: "var(--light-grey)",
      },
    },
  },
  plugins: [],
};
