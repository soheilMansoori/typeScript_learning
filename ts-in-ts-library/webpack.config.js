const path = require("path");

module.exports = {
  entry: "./src/app.js",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    clean: false,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  devServer: {
    static: path.join(__dirname, "dist"),
    open: true,
    compress: true,
    port: 3000,
  },
};
