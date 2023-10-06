import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import SvgIcon from './components/SvgIcon.vue'
import 'virtual:svg-icons-register';

import { inject } from '@vercel/analytics';
inject();

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'jquery'
import {clickOutside} from './directives'

import 'ress'
import '@mdi/font/css/materialdesignicons.css'

// import './style/element/index.scss'
import './style/scss/index.scss'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.directive('clickOutside', clickOutside)
app.component('SvgIcon', SvgIcon)

app.use(store)
.use(router)
.use(vuetify)
.mount('#app')
