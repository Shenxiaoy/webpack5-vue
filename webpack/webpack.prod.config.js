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
    new CleanWebpackPlugin()
  ]
})

module.exports = prodConfig
