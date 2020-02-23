const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.js', '.json']
	},
	entry: {
		'./dist': './src'
	},
	output: {
		path: path.resolve(__dirname, '../../client_packages/'),
		filename: '[name]/client.js'
	},
	target: 'node',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new RemovePlugin({
			before: {
				include: ['./dist'],
				allowRootAndOutside: true
			}
		})
	]
};