var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	},
	module: {
		rules: [
			{ test: /\.(ts|tsx|js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' }
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	]
}