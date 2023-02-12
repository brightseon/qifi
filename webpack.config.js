require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MODE = process.env.MODE;
const PORT = process.env.PORT || 3000;

module.exports = {
    mode: MODE,
    devtool: 'eval',
    // devtool: 'hidden-source-map',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
    devServer: {
        historyApiFallback: true,
        port: PORT,
        hot: true,
        open: true
    }
};
