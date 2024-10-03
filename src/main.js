import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import '@/assets/font/iconfont.css'
import '@/assets/css/index.css'
import "@/mockjs/index";

createApp(App)
.use(router)
.use(store)
.mount('#app')
