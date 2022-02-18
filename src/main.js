import { createApp } from 'vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import App from './App.vue'
import router from '@/router'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
myApp.use(router)
myApp.mount('#app')
