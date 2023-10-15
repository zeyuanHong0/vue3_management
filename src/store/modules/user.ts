import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { fetchLogin, fetchUserInfo } from '@/api/user/index'
import type { loginForm, loginRes, userInfoRes } from '@/api/user/type'
import { constantRoute } from '@/router/routes'
import { UserState } from './types/types'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

export const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, //仓库存储生成菜单需要的数组
      username: '', // 用户名
      avatar: '', // 头像
    }
  },
  // 处理异步操作
  actions: {
    // 登录
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

    // 获取用户信息
    async getUserInfo() {
      try {
        const res: userInfoRes = await fetchUserInfo()
        if (res.code === 200) {
          this.username = res.data.checkUser.username
          this.avatar = res.data.checkUser.avatar
        } else {
          ElMessage({
            type: 'error',
            message: '获取用户信息失败',
          })
        }
      } catch (error: any) {
        ElMessage({
          type: 'error',
          message: error.message,
        })
      }
    },
  },
  getters: {},
})
