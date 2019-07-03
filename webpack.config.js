const path = require('path');
const webpack = require('webpack');

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
            {
                test: /\.(t|j)sx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    },
                ],
            },
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
    }
};
