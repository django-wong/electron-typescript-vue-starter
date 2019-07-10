const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules: require('./webpack.rules'),
    },

    // resolve: {
    //     // Add `.ts` and `.tsx` as a resolvable extension.
    //     extensions: [".ts", ".tsx", ".js"]
    // },

    plugins: [
        new VueLoaderPlugin()
    ]
};
