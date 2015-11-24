var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

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

	devtool: 'source-map',

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
			{ test: /\.ts$/, loader: 'ts', exclude: /(node_modules|bower_components)/ },
			{ test: /\.html$/, loader: 'raw' }
		],
		noParse: [/[\/\\]angular\.js$/]
	},

	devServer: {
		inline: true,
		colors: true,
		contentBase: './app/__build',
		publicPath: '/'
	}
}