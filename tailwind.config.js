module.exports = {
  theme: {
    mode: "jit",
    container: {
      padding: "12px",
    },
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1280px",
      xl: "1464px",
    },
    fontFamily: {
      main: ["Roboto", "sans-serif"],
    },
    colors: {
      black: "#343434",
      list: "#1C1C1C",
      darkgray: "#111111",
      gray: {
        DEFAULT: "#666666",
        background: "#F8F8F8",
        border: "#DFDFDF",
        list: "#404456",
      },
      blue: {
        DEFAULT: "#0F4471",
        background: "#EEF5FF",
        light: "#A0A3BD",
        dark: "#2C3A4B",
      },
      red: "#E02025",
    },
    boxShadow: {
      card: "0px 2px 10px rgba(0, 0, 0, 0.15)",
    },
  },
  content: [`components/**/*.{vue,js}`, `layouts/**/*.vue`, `pages/**/*.vue`],
};
