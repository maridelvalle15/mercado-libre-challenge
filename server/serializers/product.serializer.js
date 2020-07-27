module.exports = ({
  id,
  title,
  price,
  currency_id,
  pictures,
  condition,
  sold_quantity,
  shipping,
  description,
  nickname,
  plain_text
}) => {
  return {
    author: nickname,
    item: {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price
      },
      picture: pictures[0] && pictures[0].url,
      condition,
      free_shipping: shipping.free_shipping,
      sold_quantity,
      description: plain_text
    }
  };
};
