module.exports = {
    entry: {
        main: './client/app.js'
    },
    output: {
        filename: './dist/scripts/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}