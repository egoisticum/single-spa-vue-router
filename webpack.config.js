// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: {
      // Set the single-spa config as the project entry point
        'single-spa.config': 'single-spa.config.js',
    },
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            // Webpack style loader added so we can use materialize
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.js$/,
            exclude: [path.resolve(__dirname, 'node_modules')],
            loader: 'babel-loader'
          },
        {
            // This plugin will allow us to use html templates when we get to the angularJS app
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'html-loader',
        },
        {
            test: /\.vue$/,
            use: { 
                loader: 'vue-loader'               
            }
        }
        ],
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        },
        modules: [
            __dirname,
            'node_modules',
        ],
    },
    plugins: [
      // A webpack plugin to remove/clean the build folder(s) before building
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin()
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
        historyApiFallback: true
    }
};
