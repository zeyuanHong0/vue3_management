import request from '@/utils/axios'

enum API {
  LIST_URL = '/admin/product/baseTrademark',
}

/**
 * 获取品牌列表
 * @param page 当前页
 * @param limit 每页条数
 */
export const fetchTrademarkList = (page: number, limit: number) => {
  return request.get<any, any>(`${API.LIST_URL}/${page}/${limit}`)
}
