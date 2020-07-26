import React from "react";
import Logo from "@assets/images/logo.png";
import MainLayout from "@layouts/MainLayout/MainLayout";
import ProductCard from "@components/ProductCard/ProductCard";

const ProductList = () => {
  const navigateToDetail = id => {
    // TODO: navigate to product detail
    console.log(id);
  };
  return (
    <MainLayout>
      <ProductCard
        id="mel213i"
        image="https://picsum.photos/id/180/180/180"
        price="1.980"
        title="Macbook pro retina 2020 casi nuevo completo unico fabuloso! casi nuevo completo unico fabuloso!"
        location="Mendoza"
        freeShipping={true}
        onClick={id => navigateToDetail(id)}
      />
      <ProductCard
        id="mel212i"
        image="https://picsum.photos/id/180/180/180"
        price="1.980"
        title="Macbook pro retina 2020 casi nuevo completo unico fabuloso! casi nuevo completo unico fabuloso!"
        location="Mendoza"
        freeShipping={true}
        onClick={id => navigateToDetail(id)}
      />
      <ProductCard
        id="mel243i"
        image="https://picsum.photos/id/180/180/180"
        price="1.980"
        title="Macbook pro retina 2020 casi nuevo completo unico fabuloso! casi nuevo completo unico fabuloso!"
        location="Mendoza"
        freeShipping={true}
        onClick={id => navigateToDetail(id)}
      />
      <ProductCard
        id="mel113i"
        image="https://picsum.photos/id/180/180/180"
        price="1.980"
        title="Macbook pro retina 2020 casi nuevo completo unico fabuloso! casi nuevo completo unico fabuloso!"
        location="Mendoza"
        freeShipping={true}
        onClick={id => navigateToDetail(id)}
      />
    </MainLayout>
  );
};

export default ProductList;
