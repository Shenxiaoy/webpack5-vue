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
      name: 'stockt',
      // library: { type: 'var', name: 'stockt' },
      remotes: {
        // stockM: 'bsadmin@http://localhost:8080/commont.js',
        stockM: 'bsadmin@../public/test.js',
      },
      exposes: {

      },
      shared: {
        vue: {
          singleton: true,
          import: false
        }
      }
    })
  ]
})

module.exports = prodConfig
