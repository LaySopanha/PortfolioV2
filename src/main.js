import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerIntersectDirective } from './directives/v-intersect.js' // Import the directive registration function

const app = createApp(App)

app.use(router)
registerIntersectDirective(app) // Register the directive globally

app.mount('#app')
