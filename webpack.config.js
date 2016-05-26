var webpack = require('webpack')
module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080/",
		"webpack/hot/dev-server",
		'index.js'
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
	}
}