// axios通用返回类型
export type ApiRes<T> = {
  code: string
  msg: string
  result: T
}

export type CategoryGoods = {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}

export type CategoryItem = {
  id: string
  name: string
  picture: string
  open: boolean
  children: CategoryItem[]
  goods: CategoryGoods[]
}
