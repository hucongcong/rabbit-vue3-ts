import useCategoryPinia from './modules/category'

const useStore = () => {
  return {
    category: useCategoryPinia()
  }
}

export default useStore
