const webpack = require("webpack");
const path = require("path");
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const socketConfig = require('./config');
const addBaseConfig = require('./webpack-base.config');


module.exports={

    devtool:"inline-source-map",
    entry:{
        "index":"./client/src/index.js"
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:"index.js"
    },

    module :{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:"babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
              },
              {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets'
                    }
                  }
                ]
              },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          title: 'React VideoCall - Minh Son Nguyen',
          filename: 'index.html',
          template: 'client/public/index.html'
        })
      ],
    devServer:{
        contentBase:path.join(__dirname,"public/"),
        compress: true,
        port: 9000,
        hot:true,
        historyApiFallback:true,
        proxy: {
            '/bridge/': `http://localhost:${socketConfig.PORT}`
          },
          watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
          }
          
    }
}