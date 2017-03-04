/* eslint no-console:"off" */
const {resolve} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')
const OfflinePlugin = require('offline-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = env => {
  const {ifProd, ifNotProd, ifDev} = getIfUtils(env)

  const entry = removeEmpty([
    ...ifDev([
      'react-hot-loader/patch',
    ], []),
    './index'
  ])

  const loaders = [
    {
      test: /\.js$/, 
      loaders: ['babel-loader'], 
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader',
      })
    },
  ]

  const plugins = removeEmpty([
    ...ifDev([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
      new ExtractTextPlugin('styles.[name].css')
    ], []),
    ...ifProd([
      new InlineManifestWebpackPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
      }),
      new ExtractTextPlugin('styles.[name].[chunkhash].css')
    ], []),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new OfflinePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: ifProd('"production"', '"development"')
      }
    })
  ])
  
  const config = {
    context: resolve('src'),
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.css']
    },
    entry: entry,
    output: {
      filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
      path: resolve('dist'),
      pathinfo: ifNotProd(),
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: loaders
    },
    plugins: plugins
  }
  
  return config
}
