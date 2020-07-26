module.exports = {
  apis: {
    mercadoLibre: {
      baseURL: "https://api.mercadolibre.com",
      endpoints: {
        searchProduct: {
          method: "get",
          uri: "/sites/MLA/search?q=query"
        },
        productDetail: {
          method: "get",
          uri: "/items/id"
        }
      }
    }
  }
};
