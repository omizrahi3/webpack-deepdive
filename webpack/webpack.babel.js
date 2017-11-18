import path from 'path';
import webpack from 'webpack';

const config = {
    entry: path.join(__dirname, '../src/main.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    plugins: [

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['babel-preset-es2015'].map(require.resolve)
                },
                include: [
                    path.resolve(__dirname, '../src')
                ]
            }
        ]
    }
}

module.exports = config;