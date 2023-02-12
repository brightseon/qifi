require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE = process.env.MODE;
const IS_DEV = MODE === 'development';
const PORT = process.env.PORT || 3000;

module.exports = {
    mode: MODE,
    devtool: 'eval',
    // devtool: 'hidden-source-map',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    { loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: IS_DEV ? '[local]-[hash:base64:5]' : '[hash:base64]'
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new MiniCssExtractPlugin({ filename: 'bundle.css' })
    ],
    devServer: {
        historyApiFallback: true,
        port: PORT,
        hot: true,
        open: true
    }
};
