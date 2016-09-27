import path = require("path");
import webpack = require("webpack");
import HtmlWebpackPlugin = require("html-webpack-plugin");

let webpackConfig: bc.IWebpackConfig = {
    entry: {
        vendor: "angular",
        app: "./src/app/app.ts",
    },

    stats: {
        colors: true,
        reasons: true
    },

    devtool: "inline-source-map",

    output: {
        path: path.resolve(__dirname, "src", "__build"),
        filename: "[name].[hash].bundle.js",
        publicPath: "/"
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: ["app", "vendor"]}),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            minify: false
        })
    ],

    resolve: {
        extensions: [".ts", ".js", ".json"]
    },

    module: {
        rules: [
            {enforce: "pre", test: /\.ts$/, exclude: /node_modules/, loader: "tslint"},
            {test: /\.ts$/, exclude: /node_modules/, loader: "awesome-typescript"},
            {test: /\.html$/, loader: "raw"}
        ]
    },

    devServer: {
        port: 3000,
        inline: true,
        historyApiFallback: true,
        contentBase: "./src/__build"
    }
};

module.exports = webpackConfig;
