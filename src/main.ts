import './assets/main.scss'
import 'primevue/resources/themes/aura-light-green/theme.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// @ts-ignore
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(PrimeVue);
app.mount('#app')
