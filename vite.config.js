import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true,//运行 npm run dev后自动打开
    port:8088
  },
  plugins: [vue()],
})
