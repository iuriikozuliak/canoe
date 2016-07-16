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
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          // 'resolve-url',
          'sass?sourceMap'
        ]
      }
    ]
  }
}