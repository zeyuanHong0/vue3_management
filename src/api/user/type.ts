// 登录接口参数类型
export interface loginFormData {
  username: string
  password: string
}

// 定义全部接口都有的返回的数据类型
interface ResponseData {
  code: number
  message: string
  ok: boolean
}

// 登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

// 获取用户信息接口返回数据类型
export interface userInfoResponsedata extends ResponseData {
  data: userInfo
}

interface userInfo {
  avatar: string
  name: string
  roles: string[]
  buttons: string[]
  routes: string[]
}
