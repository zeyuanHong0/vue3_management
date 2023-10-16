import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg图标
import 'virtual:svg-icons-register'
// 全局组件
import gloablComponent from './components/index'
import pinia from './store'
import './permisstion' // 路由鉴权

const app = createApp(App)
app
  .use(router)
  .use(ElementPlus)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(gloablComponent)
  .use(pinia)
  .mount('#app')
