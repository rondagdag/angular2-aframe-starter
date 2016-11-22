'use strict';
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function () {
    return {

        debug: false,
        profile: true,
        bail: false,

        entry: {
            polyfills: [
                path.resolve(__dirname, 'node_modules/es6-shim/es6-shim.min.js'),
                path.resolve(__dirname, 'node_modules/es6-promise/dist/es6-promise.min.js'),
                path.resolve(__dirname, 'node_modules/reflect-metadata/Reflect.js'),
                path.resolve(__dirname, 'node_modules/zone.js/dist/zone.min.js'),
                path.resolve(__dirname, 'node_modules/zone.js/dist/long-stack-trace-zone.min.js')
            ],
            libs: [
                path.resolve(__dirname, 'node_modules/aframe/dist/aframe-v0.3.2.min.js'),
                path.resolve(__dirname, 'node_modules/aframe-animation-component/dist/aframe-animation-component.min.js'),
                path.resolve(__dirname, 'node_modules/aframe-bmfont-text-component/dist/aframe-bmfont-text-component.min.js')
            ]
        },

        output: {
            filename: '[name].bundle.js'
        },

        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loaders: ['angular2-template-loader', 'awesome-typescript-loader'],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.(html)$/,
                    loader: 'raw-loader',
                    exclude: ['app/index.html']
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    loaders: ['raw-loader', 'sass-loader']
                }
            ]
        },

        resolve: {
            root: [path.resolve(__dirname, 'app')],
            extensions: ['', '.ts', '.js']
        },

        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new CopyWebpackPlugin([
                { from: 'assets', to: 'assets' }
            ])
        ],

        devtool: false,

        devServer: {
            compress: true
        }

    };
};
