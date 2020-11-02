const path = require('path')
// const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const deps = require('../package.json').dependencies
const { ModuleFederationPlugin } = require('webpack').container
const prodConfig = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      filename: 'test.js',
      name: 'app1',
      // library: {type: 'var', name: 'app1'},
      exposes: {
        './exam': path.resolve(__dirname, '../src/components/test.js')
      },
      shared: {
        vue: {
          singleton: true
        }
      }
    })
  ]
})

module.exports = prodConfig
