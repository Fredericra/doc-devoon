import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Clipboard from "v-clipboard"
const app = createApp(App)

app.use(router)
.use(Clipboard)
.mount("#app")
