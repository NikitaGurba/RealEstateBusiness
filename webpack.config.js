const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
require("dotenv").config();

module.exports = {
  entry: {
    main: ["./src/index.ts"],
    contact: ["./src/pages/Contact/index.ts"],
    about: ["./src/pages/About/index.ts"],
    style: ["./src/assets/scss/main.scss", "./src/assets/scss/root.scss"],
  },
  mode: process.env.APP_MODE,
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        exclude: path.resolve(__dirname, 'style.css'),
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
      template: "index.html",
      chunks: ["main", "style"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/pages/Contact/index.html",
      chunks: ["contact", "style"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/pages/About/index.html",
      chunks: ["about", "style"],
    }),
    new MiniCssExtractPlugin({}),
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
