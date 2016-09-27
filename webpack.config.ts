import path = require("path");
import webpack = require("webpack");
import HtmlWebpackPlugin = require("html-webpack-plugin");

let webpackConfig: bc.IWebpackConfig = {
    context: path.resolve(__dirname, "src"),

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
        new webpack.optimize.CommonsChunkPlugin({name: ["app", "vendor"]})
    ],

    resolve: {
        extensions: [".ts", ".js", ".json"]
    },

    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: 'tslint'
        }],
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
        contentBase: "./src/__build"
    }
};

module.exports = webpackConfig;
