// 防抖
export default function (app: any) {
  app.directive('debounce', {
    mounted(el: any, binding: any) {
      let timer: any
      el.addEventListener('click', () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          binding.value()
        }, 500)
      })
    },
  })
}
