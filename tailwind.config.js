/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: {
      "dark-alt": "#1A1E1F",
    },
    extend: {
      screens: {
        xxsm: "360px",
        xsm: "446px",
        sm: "640px",
        md: "768px",
        lmd: "924px",
        lg: "1024px",
        xl: "	1280px",
        xxl: "1536px",
      },
      gridTemplateColumns: {
        showcaseLayout: "5% 65% 30%",
      },
    },
  },
  plugins: [],
};
