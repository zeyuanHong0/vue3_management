// 校验一个数组的对象中某个属性是否为空
export const checkEmptyArray = (arr: any[], key: string) => {
  return arr.some((item) => item[key].trim() === '')
}

// 深拷贝对象
export const cloneObj = (obj: Record<string, any>) => {
  const newObj: Record<string, any> = obj instanceof Array ? [] : {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key]
      if ((key === 'createTime' || key === 'updateTime') && val === null) {
        newObj[key] = null
      } else {
        newObj[key] = typeof val === 'object' ? cloneObj(val) : val
      }
    }
  }
  return newObj
}
