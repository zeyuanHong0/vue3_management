// el-input
export const registerElFocus = (app: any) => {
  app.directive('el-focus', {
    mounted(el: any) {
      // console.log(el)
      // 拿到 el元素里面的 input
      const input = el.querySelector('input')
      input?.focus()
    },
  })
}

// input
export const registerFocus = (app: any) => {
  app.directive('focus', {
    mounted(el: any) {
      el.focus()
    },
  })
}
