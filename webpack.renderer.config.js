const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const webpack = require('webpack');

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules: require('./webpack.rules'),
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".vue"],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CopyPlugin([
            { from: 'assets', to: 'assets' }
        ])
    ]
};
