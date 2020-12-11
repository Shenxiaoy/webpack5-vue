// import newRouter from './index'
import Vue from 'vue'
import App from '../App.vue'
import addRouters from './exportRouters'
function renderDom (routes = []) {
  console.log('5555')
  addRouters.addRoutes(routes)
  new Vue({
    el: '#app',
    router: addRouters,
    render: h => h(App)
  })
}
export default renderDom
