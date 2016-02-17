var path =require('path');
var webpack = require('webpack');
var ComponentPlugin =require('babel-plugin-transform-react-jsx');

module.exports = {
    devServer: {
        port: 8080,
        contentBase: 'build/',
        historyApiFallback: {
            index: 'gettingstarted.html',
            rewrites: [
                { from: /\/egghead-01/, to: 'egghead-01.html'},
                { from: /\/egghead-02/, to: 'egghead-02.html'},
                { from: /\/egghead-03/, to: 'egghead-03.html'},
                { from: /\/egghead-04/, to: 'egghead-04.html'},
                { from: /\/egghead-05/, to: 'egghead-05.html'}
            ]
        }
    },
    entry: {
        "getting-started": [path.resolve(__dirname, 'js/gettingstarted.js'),'webpack/hot/dev-server'],
        "egghead-01": [path.resolve(__dirname, 'js/egghead-01.js'),'webpack/hot/dev-server'],
        "egghead-02": [path.resolve(__dirname, 'js/egghead-02.js'),'webpack/hot/dev-server'],
        "egghead-03": [path.resolve(__dirname, 'js/egghead-03.js'),'webpack/hot/dev-server'],
        "egghead-04": [path.resolve(__dirname, 'js/egghead-04.js'),'webpack/hot/dev-server'],
        "egghead-05": [path.resolve(__dirname, 'js/egghead-05.js'),'webpack/hot/dev-server']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].js'
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