import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vuetify from 'vite-plugin-vuetify'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true }),],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  css:{
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/style/scss/_custom-variable.scss";`,
      },
    },
  },
  server: {
    port:9000,
    proxy: {
      "/appApi": {
        target: "http://localhost:8888",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/appApi/, ""),
      },
    },
  },
})
