const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mercado Libre API",
      version: "1.0.0"
    }
  },
  apis: [path.resolve(__dirname, "../routes.js")]
};

module.exports = options;
