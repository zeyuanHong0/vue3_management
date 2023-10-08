import { defineStore } from 'pinia'
// import { ElMessage } from 'element-plus'
import { fetchLogin } from '@/api/user/index'
import type { loginForm, loginRes } from '@/api/user/type'
import { constantRoute } from '@/router/routes'
import { UserState } from './types/types'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

export const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, //仓库存储生成菜单需要的数组
    }
  },
  // 处理异步操作
  actions: {
    async userLogin(data: loginForm) {
      try {
        const res: loginRes = await fetchLogin(data)
        if (res.code === 200) {
          this.token = res.data.token as string
          SET_TOKEN(res.data.token as string)
          return 'is login'
        } else {
          return Promise.reject(res)
        }
      } catch (error: any) {
        return Promise.reject(error)
      }
    },
  },
  getters: {},
})
