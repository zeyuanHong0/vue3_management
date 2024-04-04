import { registerElFocus, registerFocus } from './focus' // 获取焦点
import registerDebounce from './debounce' // 防抖

export default function registerDirectives(app: any) {
  registerFocus(app)
  registerElFocus(app)
  registerDebounce(app)
}
