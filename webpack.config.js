const path = require('path')
const webpack = require('webpack');
const NpmDtsPlugin = require('npm-dts-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'output'),
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ],
            },
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
                           failOnHint: true,
                        },
                    },
                ],
            },
            // {
            //     test: /\.js$/, exclude: /(node_modules)/,
            //     loader: 'babel-loader',
            //     query: {presets: ['es2015']}
            // }
        ]
    },
    plugins: [
        new NpmDtsPlugin(),
    ],
};
