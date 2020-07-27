module.exports = response => {
  const items = response.results.map(
    ({ id, title, currency_id, price, thumbnail, condition, shipping }) => ({
      id,
      title,
      price: {
        currency: currency_id,
        amount: price
      },
      picture: thumbnail,
      condition: condition,
      free_shipping: shipping.free_shipping
    })
  );
  const categories = response.filters[0]
    ? response.filters[0].values[0].path_from_root.map(
        category => category.name
      )
    : [];
  return {
    categories,
    items
  };
};
