// 登录接口参数类型
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token: string
}
// 登录接口返回数据类型
export interface loginRes {
  code: number
  data: dataType
}

interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo
}

// 获取用户信息返回数据类型
export interface userInfoRes {
  code: number
  data: user
}
