import React from "react";
import PropTypes from "prop-types";
import {
  StyledParagraph,
  StyledH1,
  StyledH2,
  StyledH3
} from "./Typography.styled";

const renderTypography = props => {
  switch (props.type) {
    case "h1":
      return <StyledH1 {...props} />;
    case "h2":
      return <StyledH2 {...props} />;
    case "h3":
      return <StyledH3 {...props} />;
    default:
      return <StyledParagraph {...props} />;
  }
};

const Typography = props => {
  return renderTypography(props);
};

Typography.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "paragraph"])
};

Typography.defaultProps = {
  color: "primary",
  fontWeight: "normal",
  textAlign: "left",
  type: "paragraph"
};

export default Typography;
