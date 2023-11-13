import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//按需自动引入
import Components from 'unplugin-vue-components/vite'
//element-plus解析器
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // 设置生成 .d.ts 文件的路径  (生成 `components.d.ts` 全局声明)
      // ./src/components.d.ts 这个目录更符合 vite-vue-ts 项目的 typescript 的配置
      dts: './src/components.d.ts', // 默认是：'./components.d.ts'

      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
