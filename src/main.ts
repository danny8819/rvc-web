import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import 'virtual:svg-icons-register';
import 'normalize.css'
import 'ress'
import 'vuetify/styles' // 原子样式可参考 vuetify\lib\styles\main.css
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import './style/scss/index.scss'
import 'element-plus/dist/index.css'
import 'jquery'

import vuetify from './plugins/vuetify'
import SvgIcon from './components/SvgIcon.vue'

// import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
// import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
 

 
// const FilePond = vueFilePond(
//   // FilePondPluginFileValidateType,
//   // FilePondPluginImagePreview
// );

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.component('file-pond', FilePond)
app.component('SvgIcon', SvgIcon)
app.use(ElementPlus)
.use(store)
.use(router)
.use(vuetify)
.mount('#app')
