import { LAYOUT } from '/@/router/constant'

export const ROUTE_MAP = {
  Dashboard: LAYOUT,
  Analysis: () => import('/@/views/dashboard/analysis/index.vue'),
  Workbench: () => import('/@/views/dashboard/workbench/index.vue'),
  PermissionFrontDemo: () => import('/@/views/dashboard/workbench/index.vue'),
  FrontPageAuth: () => import('/@/views/dashboard/workbench/index.vue'),
  FrontBtnAuth: () => import('/@/views/dashboard/workbench/index.vue'),
  FrontAuthPageA: () => import('/@/views/dashboard/workbench/index.vue'),
  FrontAuthPageB: () => import('/@/views/dashboard/workbench/index.vue'),
  NotFound: () => import('/@/views/sys/exception/Exception.vue'),
}
