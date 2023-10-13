import { defineStore } from 'pinia'
import { SettingsState } from './types/types'

export const useSettingsStore = defineStore('Settings', {
  state: (): SettingsState => {
    return {
      isFold: false, //侧边栏是否折叠
      isRefresh: false, //是否刷新
    }
  },
})
