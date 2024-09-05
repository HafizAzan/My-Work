/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#080808",
        "custom-light-black": "#131313",
      },
      borderRadius: {
        "custom-border-radius": "50%",
      },
      transformOrigin: {
        "custom-transition": "all ease 0.5s",
      },
    },
  },
  plugins: [],
};
