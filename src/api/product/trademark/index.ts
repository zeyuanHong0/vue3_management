import request from '@/utils/axios'
import type { TradeMarkResponsedata, Trademark } from './type'

enum API {
  LIST_URL = '/admin/product/baseTrademark',
  ADD_TRANMARK_URL = '/admin/product/baseTrademark/save',
  UPDATE_TRANMARK_URL = '/admin/product/baseTrademark/update',
}

/**
 * 获取品牌列表
 * @param page 当前页
 * @param limit 每页条数
 */
export const fetchTrademarkList = (page: number, limit: number) => {
  return request.get<any, TradeMarkResponsedata>(
    `${API.LIST_URL}/${page}/${limit}`,
  )
}

/**
 * 添加品牌
 * @param trademark 品牌数据
 */
export const fetchAddTrademark = (data: Trademark) => {
  return request.post<any, any>(API.ADD_TRANMARK_URL, data)
}

/**
 * 修改品牌
 * @param trademark 品牌数据
 * */
export const fetchUpdateTrademark = (data: Trademark) => {
  return request.put<any, any>(API.UPDATE_TRANMARK_URL, data)
}
