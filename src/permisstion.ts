// 路由鉴权
import router from '@/router'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 关闭进度环
nprogress.configure({ showSpinner: false })
import setting from '@/settings'
import pinia from './store'
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore(pinia)

// 全局前置守卫
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    // 设置页面标题
    const title = to.meta.title as string
    if (title) {
      document.title = `${setting.title} - ${title}`
    }
    nprogress.start()
    const token = userStore.token
    const username = userStore.username
    // 判断用户是否登录
    if (token) {
      //已登录访问登录页跳转首页
      if (to.path === '/login') {
        next('/')
      } else {
        // 判断是否获取到了用户的信息
        if (username) {
          next()
        } else {
          try {
            await userStore.getUserInfo()
            // userStore.username = 'admin'
            // userStore.avatar =
            //   'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
            next()
          } catch (error) {
            // 获取用户信息失败，清除token，跳转登录页(可能是token过期)
            await userStore.userLogout()
            next({
              path: '/login',
              query: { redirect: to.path },
            })
          }
        }
      }
    } else {
      //未登录只能访问登录页
      if (to.path === '/login') {
        next()
      } else {
        next({ path: '/login', query: { redirect: to.path } })
      }
    }
  },
)

// 全局后置守卫
router.afterEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    nprogress.done()
  },
)
