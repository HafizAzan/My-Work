/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        custom: "all",
      },
      transitionDuration: {
        custom: "0.5s",
      },
      transitionTimingFunction: {
        custom: "ease",
      },
      transitionDelay: {
        custom: "0s",
      },
      backgroundColor: {
        "custom-black": "#080808",
        "custom-light-black": "#131313",
        "custom-purple": "#260821",
        "custom-light-purple": "#2A2E34",
      },
      boxShadow: {
        "custom-box-shadow": "0px 0px 15px #2196f3, 0px 1px 20px #2196f3",
      },
    },
  },
  plugins: [],
};
