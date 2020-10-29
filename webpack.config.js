const path = require('path');

module.exports = {
	// original file to be transpiled
	entry: path.resolve(__dirname, 'src', 'index.js'),
	// destiny of transpiled file
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@components': path.resolve(__dirname, 'src/components'),
    }
  },
	// directory watched by webpack-dev-server when any update comes
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		historyApiFallback: true,
	},
	// config. rules to transpiling project
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				use: { loader: 'ts-loader' }
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader'  },
					{ loader: 'sass-loader', options: { data: '@import "~@styles/global.scss";' }}
				]
			},
			{
				test: /\.(jpeg|jpg|png|gif|woff|woff2|eot|ttf)$/,
				use: [
					{ loader: 'file-loader' },
					{ loader: 'url-loader' }
				]
      		},
      		{
				test: /\.svg$/,
				use: [
					{ loader: '@svgr/webpack' },
					{ loader: 'url-loader' }
				]
			}
		]
	}
};
