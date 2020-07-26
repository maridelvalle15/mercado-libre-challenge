const { OK } = require("http-status-codes");

const getItemsByTerm = async (req, res) => {
  res.status(OK).json({});
};

const getItemByID = async (req, res) => {
  res.status(OK).json({});
};

module.exports = { getItemsByTerm, getItemByID };
