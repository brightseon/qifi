require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()]
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
                    {
                        loader: 'sass-loader',
                        options: { additionalData: `@import "./src/global";` }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use: [{ loader: 'file-loader', options: { name: 'images/[name].[ext]?[hash]' } }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new MiniCssExtractPlugin({ filename: 'bundle.css' }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        port: PORT,
        hot: true,
        open: true
    }
};
