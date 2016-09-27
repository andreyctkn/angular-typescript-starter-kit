var path = require("path"),
    webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, 'app'),

    entry: {
        vendor: 'angular',
        app: './src/app.ts',
    },

    stats: {
        colors: true,
        reasons: true
    },

    devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, 'app', '__build'),
        filename: '[name].[hash].bundle.js',
        publicPath: "/"
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: ['app', 'vendor']}),
    ],

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    module: {
        loaders: [
            {test: /\.ts$/, loader: 'awesome-typescript', exclude: /(node_modules|bower_components)/},
            {test: /\.html$/, loader: 'raw'}
        ],
    }
};
