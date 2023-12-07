import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve : {
    alias : {
      "@" : path.resolve(__dirname,"./src"),
      "@components" : path.resolve(__dirname, "./src/components"),
      "@pages" : path.resolve(__dirname, "./src/pages"),
      "@model" : path.resolve(__dirname, "./src/model"),
      "@dummy" : path.resolve(__dirname, "./src/dummy"),
    }
  },
  server:{
    port:3000,
    host:"localhost",
    proxy:{
      '/proxy/3000/absproxy/3000/api' : 'http://localhost:8080'
    }
  },
  base:"/absproxy/3000"
})
