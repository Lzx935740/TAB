import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/caiyun': {
        target: 'https://api.caiyunapp.com/v2.6/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/caiyun/, '')
      },
      '/api/getSysTime': {
        target: 'https://quan.suning.com/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/getSysTime/, '')
      },
      '/api/mxnzp': {
        target: 'https://www.mxnzp.com/api/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/mxnzp/, '')
      },
      '/api/amap': {
        target: 'https://restapi.amap.com/v3/',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/amap/, '')
      }
    }
  }
})
