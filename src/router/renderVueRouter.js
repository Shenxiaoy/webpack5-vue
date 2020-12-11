// import newRouter from './index'
import Vue from 'vue'
import App from '../App.vue'
import addRouters from './exportRouters'
function renderDom (routes = []) {
  addRouters.addRoutes(routes)
  new Vue({
    el: '#app',
    router: addRouters,
    render: h => h(App)
  })
}
export default renderDom
