import path = require("path");
import webpack = require("webpack");
import HtmlWebpackPlugin = require("html-webpack-plugin");

let webpackConfig: IWebpackConfig = {
    context: path.resolve(__dirname, "app"),

    entry: {
        vendor: "angular",
        app: "./src/app.ts",
    },

    stats: {
        colors: true,
        reasons: true
    },

    devtool: "inline-source-map",

    output: {
        path: path.resolve(__dirname, "app", "__build"),
        filename: "[name].[hash].bundle.js",
        publicPath: "/"
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: ["app", "vendor"]}),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
            minify: false
        })
    ],

    resolve: {
        extensions: [".ts", ".js", ".json"]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript",
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.html$/, loader: "raw"
            }
        ],
    },

    devServer: {
        port: 3000,
        inline: true,
        historyApiFallback: true,
        contentBase: "./app/__build"
    }
};

module.exports = webpackConfig;
