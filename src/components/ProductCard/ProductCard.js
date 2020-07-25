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

const ProductCard = ({ image, price, title, location, freeShipping }) => {
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
    <StyledProductCard>
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
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

ProductCard.defaultProps = {
  freeShipping: false,
  background: "transparent"
};
export default ProductCard;
