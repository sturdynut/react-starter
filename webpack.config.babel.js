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

  const entry = {
    main: './index',
    vendor: ['normalize.css']
  }

  if (env.dev) {
     entry.main = [
       'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index'
      ]
  }
  
  const loaders = [
    {
      test: /\.jsx?$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: 'eslint-loader'
    },
    {
      test: /\.jsx?$/, 
      use: 'babel-loader', 
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?modules'
      ]
    }
  ]

  const plugins = removeEmpty([
    ...ifDev([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ], []),
    ...ifProd([
      new InlineManifestWebpackPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
      }),
      new OfflinePlugin(),
    ], []),
    new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: ifProd('"production"', '"development"')
      }
    })
  ])
  
  const config = {
    context: resolve('src'),
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    },
    entry: entry,
    output: {
      filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
      path: resolve('dist'),
      publicPath: '/',
      pathinfo: ifNotProd(),
    },
    devtool: ifProd('source-map', 'eval'),
    devServer: {
      hot: true,
      historyApiFallback: true,
      contentBase: resolve(__dirname, 'dist'),
      publicPath: '/',
      port: 8080
    },
    module: {
      rules: loaders
    },
    plugins: plugins
  }
  
  return config
}
