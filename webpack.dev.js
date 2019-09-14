const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
const merge = require("webpack-merge");
module.exports = merge(common, {
  mode: "development",
  devtool: "none",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    host: "localHost",
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      // 1- sass-loader: Turns scss into css
      // 2- css-loader: Turns css into commonJs
      // 3- style-loader: Injects style into DOM (used in dev because no need to have a separate css file)
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
    ]
  }
});
