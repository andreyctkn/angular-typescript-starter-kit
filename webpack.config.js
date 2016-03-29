var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'app'),

    entry: {
        app: './src/app.ts',
        vendor: ['angular']
    },

    stats: {
        colors: true,
        reasons: true
    },

    devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, 'app', '__build'),
        filename: '[name].[hash].bundle.js',
        publicPath: "/",
        sourceMapFilename: '[name].[hash].bundle.js.map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].bundle.js'),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            minify: false
        })
    ],

    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: 'tslint'
        }],
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript', exclude: /(node_modules|bower_components)/ },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') }
        ],
        noParse: [/[\/\\]angular\.js$/]
    },

    devServer: {
        port: 3000,
        inline: true,
        colors: true,
        contentBase: './app/__build',
        publicPath: '/'
    }
}