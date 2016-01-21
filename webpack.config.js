var path =require('path');
var webpack = require('webpack');
var ComponentPlugin =require('babel-plugin-transform-react-jsx');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'entry.js')
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    plugins: [["transform-react-jsx", { "pragma": "hJSX" }]],
                    presets: ['es2015']
                }
            }
        ]
    }
};