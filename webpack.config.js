
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const { isProd, envs, env } = require('./scripts/envs.js');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },

  mode: isProd ? envs.production : envs.development ,
  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name,
      template: './src/assets/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'sass-loader']
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    port: 4000,
    host: 'localhost',
    hot: true,
    inline: true
  }
}