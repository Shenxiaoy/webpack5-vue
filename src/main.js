// import Vue from 'vue'
// import App from './App.vue'
// // import router from './router/index.js'
// console.log(stock_m, 'main.js')
// const router = stock_m.renderDom
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })

import routes from './router'
const isDeveopment = process.env.NODE_ENV === 'development'
console.log('import_child_2')
if (isDeveopment) {
  stock_m.renderDom(routes)
} else {
  stock_m.addRoutes(routes)  // 只打包路由对应内容
  // stock_m.renderDom(routes)
}