export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface Product {
  category1Id?: number
  category2Id?: number
  id: number
  createTime: string
  updateTime: string
  name: string
}

export type Products = Product[]

export interface ProductsResponseData extends ResponseData {
  data: Products
}

export interface AttrValue {
  id?: number
  createTime?: string | null
  updateTime?: string | null
  valueName: string
  attrId?: number
}

export interface Attr {
  id?: number
  createTime?: string | null
  updateTime?: string | null
  attrName: string
  categoryId: number
  categoryLevel: number
  attrValueList: AttrValue[]
}

export type Attrs = Attr[]

export interface AttrsResponseData extends ResponseData {
  data: Attrs
}
