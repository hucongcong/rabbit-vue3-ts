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
      this.allCategory = res.data.result
    }
  }
})

export default useCategoryPinia
