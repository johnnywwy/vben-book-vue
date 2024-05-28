import { asyncRoutes } from './routes'
// import { LAYOUT } from '/@/router/constant'

const newRoutes = {}
function generateRouteMap(routes) {
  return routes.map((item) => {
    if (item.children && item.children.length > 0) {
      generateRouteMap(item.children)
    }
    newRoutes[item.name] = item.component
  })
}

generateRouteMap(asyncRoutes)
export const ROUTE_MAP = newRoutes
