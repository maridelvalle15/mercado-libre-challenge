import React from "react";
import Button from "@components/Button/Button";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Typography from "@components/Typography/Typography";
import {
  StyledHead,
  StyledImage,
  StyledInformation,
  StyledDescription,
  StyledImageContainer
} from "./ProductDetail.styled";
const ProductDetail = () => {
  const product = {
    title: "Deco master test Oxford magic",
    price: "1.900",
    condition: "Nuevo",
    sold_quantity: "200",
    image: "https://picsum.photos/id/180/680/680",
    description:
      "Elit aliquip aliquip in ullamco consequat voluptate. Ea ipsum excepteur nostrud proident. Fugiat irure aliqua ad culpa quis Lorem eiusmod in veniam Lorem. Elit aliquip aliquip in ullamco consequat voluptate. Ea ipsum excepteur nostrud proident. Fugiat irure aliqua ad culpa quis Lorem eiusmod in veniam Lorem."
  };
  return (
    <MainLayout>
      <StyledHead>
        <StyledImageContainer>
          <StyledImage src={product.image} />
        </StyledImageContainer>
        <StyledInformation>
          <Typography type="caption">
            {`${product.condition} - ${product.sold_quantity} vendidos`}
          </Typography>
          <Typography type="h3" fontWeight="800">
            {product.title}
          </Typography>
          <Typography type="h1">$ {product.price}</Typography>
          <Button onClick={() => console.log("Coming soon")}>Comprar</Button>
        </StyledInformation>
      </StyledHead>
      <StyledDescription>
        <Typography type="h2">Descripcion del product</Typography>
        <Typography>{product.description}</Typography>
      </StyledDescription>
    </MainLayout>
  );
};

export default ProductDetail;
