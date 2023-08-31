import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import SvgIcon from './components/SvgIcon.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'jquery'

import 'ress'
import './style/main.css' // 原子样式 源 vuetify\lib\styles\main.css

import '@mdi/font/css/materialdesignicons.css'

import './style/scss/index.scss'

// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 
import './style/index.scss'
import 'virtual:svg-icons-register';

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('SvgIcon', SvgIcon)

// app.use(ElementPlus)
app.use(store)
.use(router)
.use(vuetify)
.mount('#app')
