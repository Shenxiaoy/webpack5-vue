import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import System from '../views/system'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/system',
    component: System
  }
]

export default new VueRouter({
  routes
})
