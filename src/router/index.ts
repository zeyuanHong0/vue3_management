import { createWebHashHistory, createRouter } from 'vue-router'
import { constantRoute } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior: () => ({
    top: 0,
    behavior: 'smooth',
  }),
})

export default router
