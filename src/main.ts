import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css'
import 'ress'
import './style.css'
import './style/scss/index.scss'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
      
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
  }
})

createApp(App).use(router).use(vuetify).mount('#app')
