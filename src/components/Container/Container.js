import React from "react";
import PropTypes from "prop-types";

import StyledContainer from "./Container.styled";

const Container = ({ children, direction }) => {
  return <StyledContainer direction={direction}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["row", "column"])
};

Container.defaultProps = {
  direction: "column"
};

export default Container;
