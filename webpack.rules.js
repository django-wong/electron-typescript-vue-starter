module.exports = [
	// Add support for native node modules
	{
		test: /\.node$/,
		use: 'node-loader',
	},
	{
		test: /\.(m?js|node)$/,
		parser: { amd: false },
		use: {
			loader: '@marshallofsound/webpack-asset-relocator-loader',
			options: {
				outputAssetBase: 'native_modules',
			},
		},
	},
    {
        test: /\.vue$/,
        loader: 'vue-loader'
    },
	{
		test: /\.ts(x?)$/,
		exclude: /node_modules/,
		use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                    /**
                     * If you want to speed up compilation significantly. However,
                     * many of the benefits you get from static type checking
                     * between different dependencies in your application wll be lost
                     * transpileOnly: true
                     */
                }
            }
        ]
	}
	// Put your webpack loader rules in this array.  This is where you would put
	// your ts-loader configuration for instance:
	/**
	 * Typescript Example:
	 *
	 * {
	 *   test: /\.tsx?$/,
	 *   exclude: /(node_modules|.webpack)/,
	 *   loaders: [{
	 *     loader: 'ts-loader',
	 *     options: {
	 *       transpileOnly: true
	 *     }
	 *   }]
	 * }
	 */
];
