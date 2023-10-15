// 设置 token 和获取 token 的方法

// 设置token
export const SET_TOKEN = (token: string) => {
  sessionStorage.setItem('token', token)
}

// 获取token
export const GET_TOKEN = () => {
  return sessionStorage.getItem('token')
}

// 删除token
export const REMOVE_TOKEN = () => {
  sessionStorage.removeItem('token')
}
