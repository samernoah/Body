import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import globale styles
import style from '../public/style.css'

//import store
import store from './store/index.js'

createApp(App).use(router).use(store).mount('#app')
