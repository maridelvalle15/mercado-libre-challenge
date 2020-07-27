module.exports = {
  apis: {
    mercadoLibre: {
      baseURL: "https://api.mercadolibre.com",
      endpoints: {
        searchProduct: {
          method: "get",
          uri: "/sites/MLA/search?q=query&limit=4"
        },
        productDetail: {
          method: "get",
          uri: "/items/id"
        },
        productDescription: {
          method: "get",
          uri: "/items/id/description"
        },
        user: {
          method: "get",
          uri: "/users/id"
        }
      }
    }
  }
};
