import SvgIcon from './SvgIcon/svgIcon.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App, Component } from 'vue'

const components: { [name: string]: Component } = { SvgIcon }
export default {
  // 注册组件
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
    // 注册element-plus的图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
