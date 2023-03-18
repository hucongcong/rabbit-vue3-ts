import { createApp } from 'vue'
import App from './App.vue'
// 样式处理
import 'normalize.css'
import '@/assets/styles/common.less'

import router from '@/router'

const app = createApp(App)

app.use(router)
app.mount('#app')
