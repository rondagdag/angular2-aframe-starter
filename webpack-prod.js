'use strict';

const commonConfig = require('./webpack.common.config.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        entry: {
            'prod': './app/bootstrap-prod.ts'
        },
        output: {
            path: './dist/prod'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index-prod.html',
                inject: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                },
                sourceMap: false
            }),
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            })
        ],
        devServer: {
            contentBase: 'dist/prod'
        },
        bail: false
    });
};
