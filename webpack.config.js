var path = require('path');
var webpack = require('webpack');
var console = require('console');

var appDictyPath = path.join(path.resolve('../app'), 'dictyHFdirective');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');

// DJM commented out this
// var publicAssetsPath = path.join(path.resolve('../app'), 'public', 'assets');
// var themePath = path.join(path.resolve('../app'), 'theme');


module.exports = {
    cache: true,

    context: appDictyPath,
    entry: {
        entryMain: './entryMain',
        entrySignin: './entrySignin'
    },

    output: {
        path: path.resolve('./res'),
        publicPath: '/res/',
        filename: "[name].bundle.js",
        chunkFilename: '[id].bundle.js'
    },

    // webpack-dev-server options
    contentBase: __dirname,

    resolve: {
        // Removing themePath for now:
        // root: [appDictyPath, nodeModulesPath, bowerComponentsPath, themePath],
        root: [appDictyPath, nodeModulesPath, bowerComponentsPath],

//        modulesDirectories: ['bower_components', 'node_modules'],

        alias: {
            lodash: 'lodash/dist/lodash',
            jquery: 'jquery/dist/jquery',
            angular: 'angular/angular',
            angularRouter: 'angular-ui-router/release/angular-ui-router',
            angularCookies: 'angular-cookies/angular-cookies',
            angularResource: 'angular-resource/angular-resource'
        },
        extensions: [
            '',
            '.js', '.coffee',
            '.html', '.jade',
            '.css', '.styl', '.scss', '.less'
        ]
    },
    resolveLoader: {
        root: nodeModulesPath
    },

    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        // this plugin makes webpack not only looking for package.json, but also for a bower.json with a main-field
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ]),
        new webpack.DefinePlugin({
          VERSION: JSON.stringify('alpha'),
          // ASSETS_PATH: JSON.stringify(publicAssetsPath + '/'),
          DEVEL: true
        })
    ],

    module: {
        loaders: [
            // Exports Angular
            { test: /[\/]angular\.js$/, loader: "exports?angular" },
            // Script Loaders
            { test: /\.coffee$/, loader: "coffee" },
            // Markup Loaders
            { test: /\.html$/, loader: "html" },
            { test: /\.jade$/, loader: "template-html" },
            // Style Loaders, style! inlines the css into the bundle files
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.styl$/, loader: "style!css!stylus" },
            // Fonts
            { test: /\.woff$/,   loader: "url?prefix=fonts/&limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file?prefix=fonts/" },
            { test: /\.eot$/,    loader: "file?prefix=fonts/" },
            { test: /\.svg$/,    loader: "file?prefix=fonts/" }
        ]
    }

};