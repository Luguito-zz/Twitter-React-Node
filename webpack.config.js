const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:'./src/App.js',
    output:{
        path:  path.resolve(__dirname + '/build'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer:{
        historyApiFallback:true,
    },
    plugins:[
        new HtmlWebpackPlugin({
        template:'./src/index.html'
    }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}