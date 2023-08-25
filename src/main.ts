import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import 'normalize.css'
import 'ress'
import 'vuetify/styles' // 原子样式可参考 vuetify\lib\styles\main.css
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import './style/scss/index.scss'
import 'element-plus/dist/index.css'
import 'jquery'

import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  theme:{
    themes:{
       light:{
          dark:false,
          colors:{
      //       primary:'#316ce8',
      //       accent:'#607df9',
      //       secondary:'#a73aeb',
      //       info:'#0164d3',
      //       warning:'#fec500',
            error:'#ff4d7e',
      //       success:'#2cdd9b',
          },
          variables:{}
       }
    }
  },
  display:{
    thresholds:{
        // "xs": 0,
        // "sm": 600, // min
        // "md": 960,
        // "lg": 1280,
        // "xl": 1920,
        // "xxl": 2560
    }
  }
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
.use(store)
.use(router)
.use(vuetify)
.mount('#app')
