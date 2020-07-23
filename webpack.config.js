const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|ico)$/,
        loader: "url-loader?limit=100000&name=fonts/[name].[ext]"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@config": path.resolve(__dirname, "src/config"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@views": path.resolve(__dirname, "src/views"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks")
    }
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./src",
    historyApiFallback: true
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
