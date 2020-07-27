const getProductByTerm = async term => {
  const response = await app.api.mercadoLibre.searchProduct({
    query: term
  });
  return await response.json();
};

const getProductByID = async id => {
  const { api } = app;
  const product = await api.mercadoLibre.productDetail({
    id
  });
  const productJSON = await product.json();
  const description = await api.mercadoLibre.productDescription({
    id
  });
  const descriptionJSON = await description.json();
  const user = await api.mercadoLibre.user({
    id: productJSON.seller_id
  });
  const userJSON = await user.json();
  return {
    ...productJSON,
    ...descriptionJSON,
    ...userJSON
  };
};

module.exports = { getProductByTerm, getProductByID };
