import React from "react";
import PropTypes from "prop-types";
import {StyledLoader, StyledLoaderContainer}from "./Loader.styled.js";

const Loader = ({ color }) => {
  return (
    <StyledLoaderContainer>
      <StyledLoader color={color} />
    </StyledLoaderContainer>
  );
};

Loader.propTypes = {
  color: PropTypes.string
};

Loader.defaultProps = {
  color: "secondary"
};

export default Loader;
