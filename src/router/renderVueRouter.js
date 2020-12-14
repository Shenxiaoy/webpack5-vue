import Vue from 'vue'
import App from '../App.vue'
import router from './exportRouters'
function renderDom (routes = []) {
  console.log(router, 'import_main_1')
  router.addRoutes(routes)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
}
export default renderDom
