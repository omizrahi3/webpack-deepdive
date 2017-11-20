import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
    entry: path.join(__dirname, '../src/js/main.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist')
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/main.css',
            allChunks: true
        })
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
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    }
}

module.exports = config;