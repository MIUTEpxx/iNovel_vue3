import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    open:true,//运行 npm run dev后自动打开页面
    port:8088
  },
  resolve:{
    alias:{
      //简化导入路径 将 @ 别名解析为项目根目录下的 src 目录
      '@': path.resolve(__dirname,'src'),
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
})
