import request from '@/utils/axios'
import type { loginForm, loginRes, userInfoRes } from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/userInfo',
}

// 登录接口
export const fetchLogin = (data: loginForm) => {
  return request.post<any, loginRes>(API.LOGIN_URL, data)
}

// 获取用户信息
export const fetchUserInfo = () => {
  return request.get<any, userInfoRes>(API.USERINFO_URL)
}
