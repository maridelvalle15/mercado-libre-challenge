const path = require("path");
module.exports = {
  stories: ["../stories/**/*.stories.[tj]s"],
  addons: [
    "storybook-addon-styled-component-theme/dist/register",
    "@storybook/addon-docs"
  ],
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          "@config": path.resolve(__dirname, "../src/config"),
          "@assets": path.resolve(__dirname, "../src/assets"),
          "@components": path.resolve(__dirname, "../src/components")
        }
      }
    };
  }
};
