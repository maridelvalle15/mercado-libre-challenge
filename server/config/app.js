const bootExpress = require("./boot-loaders/express.loader");
const bootApi = require("./boot-loaders/api.loader");
const config = require("./config");

const bootFunctions = [bootExpress, bootApi];

const App = {
  express: undefined,
  api: undefined,
  boot() {
    this.config = config;
    bootFunctions.forEach(boot => boot(this));
  }
};

module.exports = App;
