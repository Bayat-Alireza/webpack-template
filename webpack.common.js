const path = require("path");
module.exports = {
  entry: {
    main: path.resolve("src", "index.js"),
    vendor: path.resolve("src", "vendor.js")
  },
  module: {
    rules: [
      { test: /\.html$/, use: ["html-loader"] },
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
