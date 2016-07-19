var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!sass-loader')
      }
      // {
      //   test: /\.scss$/,
      //   loaders: [
      //     'style?sourceMap',
      //     'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
      //     // 'resolve-url',
      //     'sass?sourceMap'
      //   ]
      // }
    ]
  }, 
  plugins: [
    new ExtractTextPlugin('./dist/style.css', { allChunks: true })
  ]
}