import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), styleImport({
    libs: [
      {
        libraryName:"zarm",
        esModule: true,
        resolveStyle: (name) => {
          return `zarm/es/${name}/style/css`
        }
      }
    ]
  })],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
     proxy: {
       '/api': {
         target: 'http://localhost:5000', // /api/userInfo => http://localhost:5000/api/userInfo
         changeOrigin: true,
         rewrite: path => path.replace(/^\/api/, '')
       }
     }
  },
  resolve: {
    alias: {
      
    }
  }
})
