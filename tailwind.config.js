module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
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
