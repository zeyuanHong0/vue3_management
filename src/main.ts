import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app
  .use(ElementPlus)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app')
