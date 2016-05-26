var webpack = require('webpack')
var html = require('html-webpack-plugin')
var extract = require('extract-text-webpack-plugin')
module.exports = {
	entry: [
		'./index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?limit=8192' },
			{ test: /\.(png|jpg|gif|svg)$/, loader: 'img' }
		]
	},
	plugins: [
		new html()
	]
}