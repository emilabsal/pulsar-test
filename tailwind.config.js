module.exports = {
  theme: {
    container: {
      padding: "12px",
    },
    // screens: {
    //   xs: "360px",
    //   sm: "576px",
    //   md: "768px",
    //   lg: "1464px",
    // },
    colors: {
      black: "#343434",
      darkgray: "#111111",
      gray: {
        DEFAULT: "#666666",
        bg: "#F8F8F8",
        border: "#DFDFDF",
        list: "#404456",
      },
      blue: {
        DEFAULT: "#0F4471",
        background: "#DFE1F0",
        light: "#A0A3BD",
        dark: "#2C3A4B",
      },
      red: "#E02025",
    },
  },
  content: [`components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`],
};
