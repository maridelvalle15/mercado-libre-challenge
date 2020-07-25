import breakpoints from "./breakpoints";

export default {
  fontSize: {
    h1: "2rem",
    h2: "1.5rem",
    h3: "1.125rem",
    paragraph: "1rem"
  },
  borderRadius: {
    none: "none",
    normal: "4px",
    total: "50%"
  },
  spacing: multiplier => `${multiplier * 8}px`,
  breakpoints
};
