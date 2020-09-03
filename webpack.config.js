const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV === 'development';

module.exports =
{
    entry: ['babel-polyfill', './src/js/index.js'],
    output:
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer:
    {
        contentBase: path.resolve(__dirname, './dist')
    },
    plugins:
    [
        new HtmlWebpackPlugin
        ({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin
        ({
            filename: 'styles.css'
        })
    ],
    module:
    {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use:
                [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};