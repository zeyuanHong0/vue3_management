import request from '@/utils/axios'
import type { TradeMarkResponsedata } from './type'

enum API {
  LIST_URL = '/admin/product/baseTrademark',
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
