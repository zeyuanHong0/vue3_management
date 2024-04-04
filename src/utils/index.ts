// 校验一个数组的对象中某个属性是否为空
export const checkEmptyArray = (arr: any[], key: string) => {
  return arr.some((item) => item[key].trim() === '')
}
