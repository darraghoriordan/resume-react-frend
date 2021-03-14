module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "20rem",
          lg: "20rem",
          xl: "20rem",
        },
      },
    },
    colors: (theme) => ({
      //...theme("colors"),
      bgGreen: "#e1ffed",
      darkGreen: "#26a383",
      mediumGreen: "#66b59d",
      lineGrey: "#9b9b9b",
      lightLineGrey: "#ccc",
      itemDarkGrey: "#222222",
      lightestGreen: "#ECFDF5",
    }),
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
    extend: {},
  },
  plugins: [],
};
