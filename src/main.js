import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueWriter from "vue-writer"
import Vue3Marquee from 'vue3-marquee'




const app = createApp(App)

app.use(VueWriter)
app.use(Vue3Marquee)
app.use(createPinia())
app.use(router)

app.mount('#app')
