const categoriesHelper = filters => {
  if (filters && filters.values[0].path_from_root) {
    return filters.values[0].path_from_root.map(category => category.name);
  }
  return [];
};

module.exports = response => {
  const items = response.results.map(
    ({
      id,
      title,
      currency_id,
      price,
      thumbnail,
      condition,
      shipping,
      address
    }) => ({
      id,
      title,
      price: {
        currency: currency_id,
        amount: price
      },
      location: address.state_name,
      picture: thumbnail,
      condition: condition,
      free_shipping: shipping.free_shipping
    })
  );
  const categories = categoriesHelper(response.filters[0]);
  return {
    categories,
    items
  };
};
