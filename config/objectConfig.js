const path = require('path')
module.exports = {
  faberationConfig: {
    filename: 'remoteEntry.js',
    name: 'bsApp',
    exposes: {
      // 公共组件库
      './common': path.resolve(__dirname, '../src/common/index.js'),
      '': ''
    }
  }
}