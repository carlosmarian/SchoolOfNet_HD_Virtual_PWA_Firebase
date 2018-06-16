
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path : path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000
    },
    module: {
        rules :[
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader : 'html-loader',
                        options: {
                            minimize : false
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: path.resolve(__dirname, 'dist/index.html')
        })
    ]
}
