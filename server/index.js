const app = require("./config/app");
const fetch = require("node-fetch");
app.boot();

global.app = app;
global.fetch = fetch;

const startApp = async () => {
  const port = process.env.APP_PORT || 8080;
  app.express.listen(port, () => {
    console.log(`MercadoLibre API listening at http://127.0.0.1:${port}`);
  });
};

startApp();
