import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import System from '../views/system'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'first'
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/system',
    component: System,
    name: 'system'
  }
]

export const newRouter = new VueRouter({
  routes
})
