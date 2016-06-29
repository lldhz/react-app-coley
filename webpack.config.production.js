var version = require('./package').version;

var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}});

var path = require('path');

var configPlugin = new webpack.DefinePlugin({
    "process.env": {
        VERSION: JSON.stringify(version),
        NODE_ENV: JSON.stringify("production")
    }
});

module.exports = {
    entry: {
        'main': './js/index.js'
    },
    output: {
        path: `build/${version}/`,
        publicPath: `build/${version}/`,
        filename: '[name].js'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'backbone': 'Backbone',
        'window': 'window',
        'wx': 'wx',
    },
    resolve: {
        alias: {
            
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015'],
                }
            },
        ]

    },
    plugins: [commonsPlugin,uglifyJsPlugin, configPlugin]
};