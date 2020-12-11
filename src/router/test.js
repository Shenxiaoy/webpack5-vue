import newRouter from './exportRouters'
function _addRoutes (routes = []) {
  // const ary = newRouter.options.routes.concat([], routes)
  // newRouter.options.routes = ary
  newRouter.addRoutes(routes)
}
export default _addRoutes