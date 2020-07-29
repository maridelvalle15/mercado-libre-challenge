import React from "react";
import PropTypes from "prop-types";
import Typography from "@components/Typography/Typography";
import Container from "@components/Container/Container";

import { StyledFooter, StyledAction } from "./Footer.styled";
const Footer = ({ copy, onClick }) => {
  return (
    <StyledFooter>
      <Container direction="row">
        <Typography type="small">{`${copy} /`}</Typography>
        <StyledAction onClick={() => onClick()}>
          <Typography type="small">Cambiar tema</Typography>
        </StyledAction>
      </Container>
    </StyledFooter>
  );
};

Footer.propTypes = {
  copy: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Footer.defaultProps = {
  copy: ""
};

export default Footer;
