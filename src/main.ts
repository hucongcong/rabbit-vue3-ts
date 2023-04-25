import { createApp } from 'vue'
import App from './App.vue'
// 样式处理
import 'normalize.css'
import '@/assets/styles/common.less'

import router from '@/router'
import { createPinia } from 'pinia'
import XtxUI from './components'
const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(XtxUI)
app.mount('#app')
