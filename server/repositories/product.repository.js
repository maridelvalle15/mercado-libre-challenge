const getProductByTerm = async term => {
  const response = await app.api.mercadoLibre.searchProduct({
    query: term
  });
  return await response.json();
};

const getProductByID = async id => {
  const response = await app.api.mercadoLibre.productDetail({
    id
  });
  return await response.json();
};

module.exports = { getProductByTerm, getProductByID };
