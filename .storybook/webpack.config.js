const path = require('path');

module.exports = ({ config }) => {
	config.module.rules.push({
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			alias: {
				'@styles': path.resolve(__dirname, '../src/styles'),
				'@lib': path.resolve(__dirname, '../src/lib'),
				'@components': path.resolve(__dirname, '../src/components'),
			}
		},
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
					{ loader: 'css-loader' },
					{
						loader: 'sass-loader',
						options: {
							data: `@import "~@styles/global.scss";`
						}
					}
				]
			},
			{
				test: /\.(jpeg|jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
				use: [{ loader: 'file-loader' }, { loader: 'url-loader' }]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'react-svg-loader',
						options: {
							jsx: true
						}
					}
				]
			}
		]
	});

	return config;
};
