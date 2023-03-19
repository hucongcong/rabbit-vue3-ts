import { defineStore } from 'pinia'

const useCategoryPinia = defineStore('category', {
  state: () => {
    return {
      money: 100
    }
  }
})

export default useCategoryPinia
