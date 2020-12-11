import Vue from 'vue'
import App from './App.vue'
// import router from './router/exportRouters'

import test from '@/components/test'
const router = test.routers

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
