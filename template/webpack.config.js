
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        publicPath: '/dist/',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.({{#sass}}less|{{/sass}}css)$/,
            use: ['style-loader', 'css-loader'{{#sass}}, 'less-loader'{{/sass}}]
        }, {
            test: /\.(svg|ttf|eot|svg|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/,
            use: "file-loader"
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({ie8: true, compress: {
          warnings: false
        }})
    ]
};
