'use strict';

var webpack = require('webpack');
var argv = require('yargs').argv;
var path = require('path');

var PATHS = {
    app: __dirname + '/app/src/'
};

var plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
];

if (argv.production) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        compress: true,
        comments: false
    }));
}

var config = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules/,
                    /bower_components/
                ],
                include: PATHS.app,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json?$/,
                loader: 'json-loader',
            }
        ],
    },
    watch: argv.production ? false : true,
    resolve:  {
	    alias: {
		    'ScrollMagic': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
		    'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
	    },
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    plugins: plugins,
    debug: argv.production ? false : true,
    devtool: argv.production ? null : '#eval',
    externals: {
        '../TweenLite': 'TweenLite',
        './TweenLite': 'TweenLite',
        'TweenLite': 'TweenLite',
        '../CSSPlugin': 'CSSPlugin',
        './CSSPlugin': 'CSSPlugin',
        'CSSPlugin': 'CSSPlugin',
        'jquery': 'jQuery'
    }
};

module.exports = config;
