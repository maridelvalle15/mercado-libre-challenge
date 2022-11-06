import React from "react";
import App from "@config/app";
import useFetch from "@hooks/useFetch";
import { useParams } from "react-router-dom";
import Loader from "@components/Loader/Loader";
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
  let { id } = useParams();
  const { response } = useFetch(
    App.api.mercadoLibre.productDetail({ id })
  );
  const conditionFormatter = () => {
    switch (response.item.condition) {
      case "new":
        return "Nuevo";
      case "used":
        return "Usado";
      default:
        return "No lo sabemos";
    }
  };
  return (
    <MainLayout>
      {response ? (
        <>
          <StyledHead>
            <StyledImageContainer>
              <StyledImage
                src={response.item.picture}
                alt={response.item.title}
              />
            </StyledImageContainer>
            <StyledInformation>
              <Typography type="caption">
                {`${conditionFormatter()} - ${
                  response.item.sold_quantity
                } vendidos`}
              </Typography>
              <Typography type="h3" fontWeight="800">
                {response.item.title}
              </Typography>
              <Typography type="h1">$ {response.item.price.amount}</Typography>
              <Button onClick={() => console.log("Coming soon")}>
                Comprar
              </Button>
            </StyledInformation>
          </StyledHead>
          <StyledDescription>
            <Typography type="h2">Descripcion del producto</Typography>
            <Typography>{response.item.description}</Typography>
          </StyledDescription>
        </>
      ) : (
        <Loader />
      )}
    </MainLayout>
  );
};

export default ProductDetail;
