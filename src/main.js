import "@/assets/main.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vFocus } from '@/directives/vFocus'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('focus', vFocus);
app.use(createPinia())
app.use(router)

app.mount('#app')
