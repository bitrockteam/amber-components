
require('typescript-require')({
  nodeLib: true,
  targetES5: false
});

const path = require('path');

const { isProd, envs } = require('./scripts/envs.ts');
console.log(isProd());


module.exports = {
  entry: {
    index: './src/index.ts',
    banner: './src/components/banner/index.ts',
    button: './src/components/button/index.ts',
    card: './src/components/card/index.ts',
    code: './src/components/code/index.ts',
    date: './src/components/date/index.ts',
    modal: './src/components/modal/index.ts',
    progress: './src/components/progress/index.ts',
    tabs: './src/components/tabs/index.ts',
  },
  output: {
    path: path.join(__dirname, './'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },

  mode: isProd() ? envs.production : envs.development ,
  devtool: 'source-map',

  plugins: [ ],

  optimization: {
    concatenateModules: false,
    // runtimeChunk: {
    //   name: entrypoint => `runtime~${entrypoint.name}`
    // }
    // minimizer: [
    //   new TerserPlugin({ /* your config */ })
    // ]
  },

  resolve: {
    extensions: ['.mjs', '.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'to-string-loader',
          'css-loader',
          'sass-loader']
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
}