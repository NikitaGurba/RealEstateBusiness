const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
require("dotenv").config();

module.exports = {
  entry: [
    "./src/index.ts",
    "./src/assets/scss/main.scss",
    "./src/assets/scss/root.scss",
  ],
  mode: process.env.APP_MODE,
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // inject: true,
      // scriptLoading: 'systemjs-module',
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/svg", to: "assets" }],
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css", ".scss"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};
