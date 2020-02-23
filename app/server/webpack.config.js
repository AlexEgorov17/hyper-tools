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
		path: path.resolve(__dirname, '../../packages/hyper-tools/'),
		filename: '[name]/server.js'
	},
	target: 'node',
	module: {
		rules: [
			{
				test: /\.js$/,
                exclude: '/node_modules/'
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