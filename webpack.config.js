const path = require("path");
const HTMLWebpackPlugins = require("html-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        modules: ["node_modules"],
    },
    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devtool: "source-map",
    plugins: [
        new HTMLWebpackPlugins({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
};