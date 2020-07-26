const cors = require("cors");
const express = require("express");
const routes = require("../../routes");
const bodyParser = require("body-parser");
const swaggerOptions = require("../swagger");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const createExpressApplication = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  routes.forEach(route => {
    const [method, routePath, resolver] = route;
    app[method](routePath, resolver);
  });
  return app;
};

module.exports = App => {
  App.express = createExpressApplication();
};
