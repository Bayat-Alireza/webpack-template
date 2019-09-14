const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: path.resolve("src", "index.js")
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      { test: /\.html$/, use: ["html-loader"] },

      // 1- sass-loader: Turns scss into css
      // 2- css-loader: Turns css into commonJs
      // 3- style-loader: Injects style into DOM
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[hash].[ext]", outputPath: "assets" }
        }
      }
    ]
  }
};
