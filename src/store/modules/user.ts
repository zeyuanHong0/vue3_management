import { defineStore } from 'pinia'
// import { ElMessage } from 'element-plus'
import { fetchLogin } from '@/api/user/index'
import type { loginForm, loginRes } from '@/api/user/type'
export const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: sessionStorage.getItem('token') || '',
    }
  },
  // 处理异步操作
  actions: {
    async userLogin(data: loginForm) {
      try {
        const res = await fetchLogin(data)
        if (res.code === 200) {
          sessionStorage.setItem('token', res.data.token)
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
