import React from "react";
import App from "@config/app";
import useQuery from "@hooks/useQuery";
import useFetch from "@hooks/useFetch";
import Logo from "@assets/images/logo.png";
import { useHistory } from "react-router-dom";
import Loader from "@components/Loader/Loader";
import MainLayout from "@layouts/MainLayout/MainLayout";
import ProductCard from "@components/ProductCard/ProductCard";

const ProductList = ({ search }) => {
  const query = useQuery();
  const history = useHistory();
  const termToSearch = query.get("search");
  const { response, error, isLoading } = useFetch(
    App.api.mercadoLibre.searchProduct({ query: termToSearch })
  );
  const navigateToDetail = id => {
    history.push(`/items/${id}`);
  };
  const renderProducts = () => {
    const { items } = response;
    return items.map(({ id, price, picture, title, free_shipping }) => (
      <ProductCard
        id={id}
        key={id}
        image={picture}
        price={price.amount}
        title={title}
        location="Mendoza"
        freeShipping={free_shipping}
        onClick={id => navigateToDetail(id)}
      />
    ));
  };

  return (
    <MainLayout
      categories={response && response.categories}
      defaultTerm={termToSearch}
    >
      {response ? renderProducts() : <Loader />}
    </MainLayout>
  );
};

export default ProductList;
