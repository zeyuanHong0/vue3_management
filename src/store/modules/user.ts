import { defineStore } from 'pinia'
// import { ElMessage } from 'element-plus'
import { fetchLogin, fetchUserInfo, fetchLogout } from '@/api/user/index'
import type {
  LoginFormData,
  LoginResponseData,
  UserInfoResponsedata,
} from '@/api/user/type'

import { constantRoute } from '@/router/routes'
import { UserState } from './types/types'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'

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
    async userLogin(data: LoginFormData) {
      try {
        const res: LoginResponseData = await fetchLogin(data)
        if (res.code === 200) {
          this.token = res.data as string
          SET_TOKEN(res.data as string)
          return 'is login'
        } else {
          return Promise.reject(res.message)
        }
      } catch (error: any) {
        return Promise.reject(error)
      }
    },

    // 获取用户信息
    async getUserInfo() {
      try {
        const res: UserInfoResponsedata = await fetchUserInfo()
        if (res.code === 200) {
          this.username = res.data.name
          this.avatar = res.data.avatar
          return '获取用户信息成功'
        } else {
          return Promise.reject(new Error(res.message))
        }
      } catch (error: any) {
        return Promise.reject(error)
      }
    },

    // 退出登录
    async userLogout() {
      try {
        const res: any = await fetchLogout()
        if (res.code === 200) {
          REMOVE_TOKEN()
          this.token = ''
          this.username = ''
          this.avatar = ''
          return '退出登录成功'
        } else {
          return Promise.reject(new Error(res.message))
        }
      } catch (error) {
        return Promise.reject(error)
      }
    },
  },
  getters: {},
})
