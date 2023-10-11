import type { RouteRecordRaw } from 'vue-router'
// 定义小仓库数据类型
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
}

export interface SettingsState {
  isFold: boolean
}
