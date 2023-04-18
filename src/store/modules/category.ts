import type { ApiRes, CategoryItem } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'

const useCategoryPinia = defineStore('category', {
  state: () => {
    return {
      allCategory: [] as CategoryItem[]
    }
  },
  actions: {
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      res.data.result.forEach((item) => {
        // 添加open属性
        item.open = false
      })
      this.allCategory = res.data.result
    },
    show(id: string) {
      this.allCategory.forEach((item) => {
        if (item.id === id) {
          item.open = true
        }
      })
    },
    hide(id: string) {
      this.allCategory.forEach((item) => {
        if (item.id === id) {
          item.open = false
        }
      })
    }
  }
})

export default useCategoryPinia
