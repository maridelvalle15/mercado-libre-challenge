const { OK, PRECONDITION_FAILED } = require("http-status-codes");
const {
  getProductByTerm,
  getProductByID
} = require("../repositories/product.repository");

const serializeProduct = require("../serializers/product.serializer");
const serializeProducts = require("../serializers/products.serializer");

const getByTerm = async (req, res) => {
  try {
    const term = req.query.q;
    const response = await getProductByTerm(term);
    res.status(OK).json(serializeProducts(response));
  } catch (error) {
    res.status(PRECONDITION_FAILED).json({ error: "Server Error" });
  }
};

const getByID = async (req, res) => {
  try {
    const splittedUrl = req.url.split("/");
    const id = splittedUrl[splittedUrl.length - 1];
    console.log("id", id);
    const response = await getProductByID(id);
    res.status(OK).json(serializeProduct(response));
  } catch (error) {
    res.status(PRECONDITION_FAILED).json({ error: "Server Error" });
  }
};

module.exports = { getByTerm, getByID };
