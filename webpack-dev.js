'use strict';

const commonConfig = require('./webpack.common.config.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        devtool: 'source-map',
        entry: {
            'dev': './app/bootstrap.ts'
        },
        output: {
            path: './dist/dev'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
                inject: false
            })
        ],
        devServer: {
            contentBase: 'dist/dev'
        }
    });
};
