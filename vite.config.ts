import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vuetify from "vite-plugin-vuetify";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/style/scss/_custom-variable.scss";`,
      },
    },
  },
  server: {
    port: 9000,
    proxy: {
      "/appApi": {
        target: "http://geniussbg.cn:10010/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/appApi/, ""),
      },
    },
  },
});
