const app = require("./config/app");

app.boot();

global.app = app;

const startApp = async () => {
  const port = process.env.APP_PORT || 8080;
  app.express.listen(port, () => {
    console.log(`MercadoLibre API listening at http://127.0.0.1:${port}`);
  });
};

startApp();
