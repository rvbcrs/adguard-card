const path = require("path");

module.exports = {
  entry: "./src/adguard-card.js",
  output: {
    filename: "adguard-card.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
