import React from "react";

import ProductCard from "@components/ProductCard/ProductCard";

export default {
  title: "Custom/ProductCard",
  component: ProductCard
};

export const Default = () => (
  <ProductCard
    image="https://picsum.photos/id/180/180/180"
    price="1.980"
    title="Macbook pro retina 2020 casi nuevo completo unico fabuloso!"
    location="Mendoza"
    freeShipping={true}
  />
);
