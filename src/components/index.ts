import SvgIcon from './SvgIcon/svgIcon.vue'
import type { App, Component } from 'vue'

const components: { [name: string]: Component } = { SvgIcon }
export default {
  // 注册组件
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
