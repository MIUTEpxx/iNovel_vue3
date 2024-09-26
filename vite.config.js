import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true,//运行 npm run dev后自动打开页面
    port:8088
  },
  resolve:{
    //简化导入路径 将 @ 别名解析为项目根目录下的 src 目录
    '@':path.resolve(__dirname,'src'),
  },
  plugins: [vue()],
})
