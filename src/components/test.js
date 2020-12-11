import renderDom from '../router/renderVueRouter'
import exportRouters from '../router/exportRouters'
const abRouter = {
  vueRouter: 'vueRouter',
  jsDomRouter: 'jsDomRouter'
}
function addRoutes (routes) {
  exportRouters.addRoutes(routes)
}
export default {
  abRouter,
  renderDom,
  addRoutes
}
