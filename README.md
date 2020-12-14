# webpack5
[官方文档](https://webpack.docschina.org/concepts/)

### 首先安装 webpack webpack-cli 插件
```js
npm install webpack webpack-cli -D
```
> 最新版本webpack-cli可能会与webpack-dev-server 4 不兼容，不能配置其命令；

## webpack 打包方式
1) 通过在package.json script中配置 webpack需要运行的配置文件；
```js
 "scripts": {
    "dev": "webpack --config ./build/webpack.base.config.js"
  },
```
2) node脚本运行 webpack api进行打包；
> [文档](https://www.webpackjs.com/api/node/)
```js
const path = require('path')
const webpack = require('webpack')
const obj = {
  entry: {
    app: path.resolve(__dirname, '../src/components/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  }
}

const compiler =  webpack(obj)
compiler.run((err, stats) => {
})
```

## 安装babel模块
1) 添加module 文件解析模块
```js
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
```

2) 根目录配置 .babelrc文件，配合babel解析各种配置和插件(也可以在rules解析模块配置项中去配置presets)。
```js
// .babelrc
{
  "presets": [
    "@babel/preset-env"
  ]
}
```
### 对css样式的loader处理
安装：
```js
npm install css-loader mini-css-extract-plugin -D
```
css样式抽离
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
plugins: [new MiniCssExtractPlugin()]
```
- css-loader 对css内容进行解析
- mini-css-extract-plugin 抽离css样式出单独文件 [具体参数配置](https://webpack.docschina.org/plugins/mini-css-extract-plugin/#root)

### 对图片的loader处理
- file-loader 对图片进行打包，把图片存储到打包后的路径中，会是http请求的图片文件；
- url-loader  对图片进行打包，通过配置可以将小体积的图片转成base64存储于js中；
- 可通过配置 img-loader，对图片格式进行压缩处理。
```js
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // name: "[name].[hash:16].[ext]",
              limit: 1024 * 8,
              outputPath: 'assets/img',
              publicPath: 'assets/img'
            }
          }
        ]
      }
```
> 在这里容易犯的小错误的解析后图片获取不到，可能回执publicPath配置路径的不对；

### 安装 cross-env ，设置node环境变量，为兼容windows 平台
```js
npm install -D cross-env 

  "scripts": {
    "test": "webpack-cli init",
    "dev": "cross-env NODE_ENV=development node ./webpack/webpack.dev.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./webpack/webpack.prod.config.js"
  },
```

### 配置 async await 语法使用
- 引入@babel/polyfill 为解决语法兼容问题和async使用问题，打包体积直接增加了100kb;
- 使用  @babel/plugin-transform-runtime、 @babel/runtime 解决async await的处理，增加的打包体积不到20kb。
exam
```js
npm install --save @babel/runtime
npm install --save-dev @babel/plugin-transform-runtime

// .babelrc
{
  "presets": [
    "@babel/preset-env",
    "@vue/babel-preset-jsx"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```


### 安装htmlWebpackPlugin，打包出html文件
```js
npm install -D html-webpack-plugin

// 初级配置
  plugins: [
    new htmlWebpackPlugin({
      fileName: 'index.html',
      template: 'public/index.html',
      inject: 'body',
      title: 'webpack5 config',
      minify: {
        removeComments: true,  // 去掉注释
        collapseWhitespace: true  // 去掉空格
      }
    })
  ],
```

### 合并webpack对象和清空之前打包内容
```js
npm install webpack-merge clean-webpack-plugin -D
---------
const {merge} = require('webpack-merge')
module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].bundle.js',
  },
--------------
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
  plugins: [
    new CleanWebpackPlugin()
  ]
```

### 本地服务开发环境配置
[查看文档](https://webpack.docschina.org/guides/development/)
1) 可以用webpack-dev-server开箱即用，配置到devServer配置项，在package.json 中运行 webpack-dev-server命令执行webpack配置文件；
```js
  "scripts": {
    "dev": "webpack-dev-server --config ./webpack/webpack.dev.config.js",
  }
```

2) 也可以起一个node服务，如果你正在使用 webpack-dev-middleware，可以通过 webpack-hot-middleware 依赖包，在自定义 dev server 中启用 HMR。
```js
const path = require('path')
const express = require('express')
const app = express()
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const {merge} = require('webpack-merge')
const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
const compiler = webpack(devConfig)
app.use(webpackDevMiddleware(compiler, {
  
}))
app.use(require("webpack-hot-middleware")(compiler))
app.listen(3000, function () {
  console.log("browser open in http://www.localhost:3000")
})
```
3) 通过webpack-dev-server 构建本地启动服务
```js
// 通过package.json 调用webpack-dev-sever命令去执行对应的webpack 配置文件；
// 在js中引入 webpack-dev-server 进行加载使用
const config = require('./webpack.config.js');const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',};

webpackDevServer.addDevServerEntrypoints(config, options);const compiler = webpack(config);const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');});
```

4) watch mode 观察模式，可以指示 webpack "watch" 依赖图中所有文件的更改。如果其中一个文件被更新，代码将被重新编译，所以你不必再去手动运行整个构建。
```js
  "scripts": {
    "dev": "webpack --watch --config ./webpack/webpack.dev.config.js"
  },
```

## Module Federation
webpack bundle 模块聚合、共享，也是我觉得webpack5最大的特色，提供了微前端的解决方案；
把多个应用模块最后聚合成一个程序，这些应用模块之间无任何依赖联系，可以单独开发和部署它们，这可以成为微前端。
[官方示例](https://github.com/module-federation/module-federation-examples)

先看一个配置示例：
```js
// module app1
        new ModuleFederationPlugin({
            filename: "remoteEntry.js",
            name: "app1",
            exposes: {
                './Header': "./src/components/Header.vue",
            }
          })
// module app2
        new ModuleFederationPlugin({
          name: "app2",
          remotes: {
            app1: "app1@http://localhost:3000/remoteEntry.js",
          }
        })
```
- filename： 暴露的模块文件名称，也可以说是配置打包后单独文件的名称；
- name： 模块全局唯一名称，对当前模块的标记；
- exposes：表示导出的模块，可以在别的bundle中引入使用；为了兼容一些版本，建议名称写成文件路径形式字符串；
- shared： 共享模块队列，配置此参数后，也会把配置的模块打包出单独文件；[shared 配置参数文档](https://github.com/webpack/webpack/pull/10960)
- library: 声明一个挂载在全局下的变量名，默认为当前name的名称，可以更改全局的名称；
- remotes：作为引用方最关键的配置项，用于声明需要引用的远程资源包的名称与模块名称；

模块之间共享代码片段，属于异步远程资源请求，所以在webpack配置入口文件需要异步加载，可以通过import 返回promise的方式去加载js文件；

#### 配置主项目和子项目共享代码块配置
主项目共享test.js和vue给子模块使用
```js
// 主项目
  new ModuleFederationPlugin({
    filename: 'commont.js',
    name: 'bsadmin',
    exposes: {
      './commont': path.resolve(__dirname, '../src/components/test.js')
    },
    shared: {  // 主项目和子项目都需配置shared，才能实现模块共享
      vue: {
        singleton: true
      }
    }
  })

```
子项目获取主项目共享的test.js导出模块和公共module vue
```js
    new ModuleFederationPlugin({
      name: 'stockt',
      remotes: {
        stockM: 'bsadmin@http://localhost:8080/commont.js',  // 指向主项目打包下的commot.js文件
      },
      exposes: {
      },
      shared: {
        vue: {
          singleton: true,
          import: false  // 表示不本地导入vue，远程remotes获取 vue模块
        }
      }
    })
```
> 以上一般普通的项目使用这样的配置就可以实现公共模块包括公共组件、UI、类库等共享，及node_modules 模块的共享，这样既保证公共模块的一致性，也减少了代码复用性和bundle的体积。

### 微服务架构实现
在我们想实现微服务统筹子模块集合，为避免远程模块重复调用，又要保证公共模块的一致性，需要想出一个思路去解决这样的问题；最初想到的是通过dns引入公共js解决问题，但我们还是想尝试使用 federation的配置去实现。

在查看官方 [module-fedration example](https://github.com/module-federation/module-federation-examples),看到 ModuleFederationPlugin 下remotes参数还可以配置 相对路径和全局变量，如何这样可以成功的话，那么主项目，配置后部署后，引入子项目路由后的js,或者动态配置路由指向子项目的bundle 主js，remotes暴露出全局变量映射出公共代码库和node_modules的shared，这样每个路由对应的子项目都是远程加载，主项目占据顶端渲染，完成微服务架构的一次循环。

> 思路：首先我们要确保 node_modules 中 vue公共模块是通过shared配置达成公用一致目标，和exposes 共享的公共模块也要一致性，即便是在后期合并主项目和子项目的时候；其次路由配置也要放到主项目中去，路由要统一管理配置，在主项目暴露出路由实例，通过addRoutes去配置加载子项目中的路由；剩下需要去配置vue实例，使得主项目和子项目路由内容确保在一个SPA中。

项目demo参考，分支game 为主项目，导出公共js，分支game-child1为子项目引入主项目公共包。[github wbepack5-vue](https://github.com/Shenxiaoy/webpack5-vue/tree/game)

##### 主项目相关配置示例
```js
// webpack 配置   webpack.base.config.js
  plugins: [
    new ModuleFederationPlugin({
      filename: 'commont.js',
      name: 'bsadmin',
      library: { type: 'var', name: 'bsadmin' },
      exposes: {
        './commont': path.resolve(__dirname, '../src/components/test.js')
      },
      shared: {
        vue: {
          singleton: true
        }
      }
    })
  ]

// test.js 导出模块内容
import renderDom from '../router/renderVueRouter'
export default {
  renderDom
}

// 主项目renderDom 和 router配置
import Vue from 'vue'
import App from '../App.vue'
import addRouters from './exportRouters'  // 主项目相关路由组件及一些补充配置
function renderDom (routes = []) {
  console.log('5555')
  addRouters.addRoutes(routes)
  new Vue({
    el: '#app1',
    router: addRouters,
    render: h => h(App)
  })
}
export default renderDom

```
##### 子项目对应配置
```js
// wbepack配置
  plugins: [
    new ModuleFederationPlugin({
      name: 'stockt',
      remotes: {
        // stockM: 'bsadmin@http://localhost:8080/commont.js',  // 远程请求可以用到本地开发环境中去
        stockM: 'bsadmin@../public/test.js',  // 以后合并到主项目中去，为公用一份commont.js，不配置远程资源，在本地实例化一个全局变量；未找到更好的配置去解决这个问题，目前是兼容这个请求形式。
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

// 入口文件配置
import('stockM/commont').then(json => {
  import('./main.js')
  // 从commont 中获取实例化的路由回调，并触发dom render
  window.stock_m = json.default
})

// main.js
import routes from './router'  // 子项目相关路由配置
stock_m.renderDom(routes)

```
把各个子项目bundle后的入口js 通过script插入，就可以实现SPA加载主项目和子项目的页面，而vue commont.js共享一份。

报错：<code>Container initialization failed as it has already been initialized with a different share scope</code>，提示在共享模块中不能引入shared的公共模块，否则会导致初始化失败；我的解决方案是不再使用暴露的全局变量去引用exposes的入口参数，而是通过import远程引入exposes获取暴露的模块。



### 配置解析vue
- 安装 vue vue-loader vue-template-compiler 插件
- rules中加入vue解析配置，{test: /\.vue$/, loader: 'vue-loader'}
- 引入vueloader插件：const VueLoaderPlugin = require('vue-loader/lib/plugin')  ；new VueLoaderPlugin();

### eslint
可选规范有'eslint-config-google''、'airbnb-base'、‘standard'(前端标准)，我们一般选择 <code>standard</code>;
- vue eslint [官方文档](https://eslint.vuejs.org/)
- eslint 配置项、配置参数：[参考文章](https://blog.csdn.net/qq_41257129/article/details/104839746)
- eslint-loader 配置：
```js
// 需安装的插件：
    "babel-eslint": "^10.1.0",
    "eslint": "^7.12.1",
    "eslint-config-standard": "^15.0.1",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-html": "^6.1.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.2",
    "eslint-plugin-vue": "^7.1.0",

// webpack.config.js
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },

.eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
```
#### 官方推荐eslint-webpack-plugin 取代eslint-loader，但在配置vue eslint过程中出现很多问题；
```js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const eslintConfig = {
  formatter: require('eslint-friendly-formatter'),
  emitWarning: true,
  fix: true
}

plugins: [new ESLintPlugin(eslintConfig)]
```





































