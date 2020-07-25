import React from "react";
import PropTypes from "prop-types";

import StyledContainer from "./Container.styled";

const Container = ({ background, children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  background: "transparent"
};

export default Container;
