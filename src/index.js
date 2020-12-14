
import('stockM/commont').then(json => {
  import('./main.js')
  // 从commont 中获取实例化的路由回调，并触发dom render
  console.log(json.default)
  window.stock_m = json.default
  console.log('import_child_1')
})


