const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }, {
    test: /\.scss$/,
    use: [
      'to-string-loader',
      'css-loader',
      'sass-loader']
    }, {
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
  })
  // config.module.rules.push({
  //   test: /\.(ts|tsx|js)$/,
  //   loader: require.resolve('awesome-typescript-loader'),
  // });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push('.ts', '.tsx', '.js');
  return config;
};