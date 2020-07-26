import React from "react";
import PropTypes from "prop-types";
import Typography from "@components/Typography/Typography";
import {
  StyledImage,
  StyledProductCard,
  StyledProductShipping,
  StyledProductLocation,
  StyledProductDescription,
  StyledProductInformation,
  StyledProductImageContainer
} from "./ProductCard.styled.js";

const ProductCard = ({
  id,
  image,
  price,
  title,
  location,
  freeShipping,
  onClick
}) => {
  const renderPrice = () =>
    freeShipping ? (
      <>
        ${price}
        <StyledProductShipping />
      </>
    ) : (
      `$ ${price}`
    );

  return (
    <StyledProductCard onClick={() => onClick(id)}>
      <StyledProductImageContainer>
        <StyledImage src={image} />
      </StyledProductImageContainer>
      <StyledProductInformation>
        <StyledProductDescription>
          <Typography type="h3">{renderPrice()}</Typography>
          <Typography type="medium">{title}</Typography>
        </StyledProductDescription>
        <StyledProductLocation>
          <Typography type="small" textAlign="center">
            {location}
          </Typography>
        </StyledProductLocation>
      </StyledProductInformation>
    </StyledProductCard>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  freeShipping: PropTypes.bool,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

ProductCard.defaultProps = {
  freeShipping: false,
  background: "transparent"
};
export default ProductCard;
