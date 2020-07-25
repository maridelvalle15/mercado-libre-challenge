import breakpoints from "./breakpoints";

export default {
  fontSize: {
    h1: "46px",
    h2: "28px",
    h3: "24px",
    medium: "18px",
    paragraph: "16px",
    caption: "14px",
    small: "12px"
  },
  borderRadius: {
    none: "none",
    normal: "4px",
    total: "50%"
  },
  spacing: multiplier => `${multiplier * 8}px`,
  breakpoints
};
