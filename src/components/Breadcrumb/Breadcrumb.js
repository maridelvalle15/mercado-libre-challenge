import React from "react";
import PropTypes from "prop-types";

import Typography from "@components/Typography/Typography";
import { StyledBreadcrumb, StyledCategory } from "./Breadcrumb.styled";

const Breadcrumb = ({ categories }) => {
  const renderCategories = () =>
    categories.map(category => (
      <StyledCategory>
        <Typography type="caption"> {category} </Typography>
      </StyledCategory>
    ));
  return <StyledBreadcrumb>{renderCategories()}</StyledBreadcrumb>;
};

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Breadcrumb;
