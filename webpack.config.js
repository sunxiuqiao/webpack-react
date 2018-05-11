const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
                use: ['url-loader']
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']   
    },
    
    plugins: [
        new HtmlWebpackPlugin({template: 'public/index.html'}),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/static'),
                to: 'static'
            }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist")
       
    }
};