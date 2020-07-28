import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./Button.styled.js";

const Button = ({ onClick, color, children }) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  color: "secondary"
};

export default Button;
