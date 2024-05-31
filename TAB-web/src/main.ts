import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/stores/index'
import '@/assets/main.scss'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
