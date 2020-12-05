const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const ESLintPlugin = require('eslint-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const isDeveopment = process.env.NODE_ENV === 'development'
// const eslintConfig = {
//   formatter: require('eslint-friendly-formatter'),
//   emitWarning: true,
//   fix: true
// }
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isDeveopment ? 'app.js' : '[hash:8].app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false,
          },
        }, 'css-loader']
      },
      {
        test: /\.scss$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: false,
          },
        }, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: isDeveopment ? '[name].[ext]' : '[name].[hash:16].[ext]',
              limit: 1024 * 8,
              outputPath: 'assets/img',
              publicPath: 'assets/img'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new ESLintPlugin(eslintConfig),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      fileName: 'index.html',
      template: 'public/index.html',
      inject: 'body',
      title: 'DOTA2 hreo bp',
      minify: {
        removeComments: true, // 去掉注释
        collapseWhitespace: true // 去掉空格
      }
    }),
    new MiniCssExtractPlugin(),
    // new ModuleFederationPlugin({
    //   filename: 'commont.js',
    //   name: 'bsadmin',
    //   // library: { type: 'var', name: 'bsadmin' },
    //   exposes: {
    //     './commont': path.resolve(__dirname, '../src/components/test.js')
    //   },
    //   // remotes: {
    //   //   bsadmin: 'bsadmin@http://localhost:8080/commont.js'
    //   // },
    //   shared: {
    //     vue: {
    //       singleton: true
    //     }
    //   }
    // })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  // 配置全局变量，不会被工程打包
  // externals: {}
}
