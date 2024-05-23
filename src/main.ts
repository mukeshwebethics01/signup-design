import './assets/main.scss'
import "./assets/colors/colors.scss"
import "./assets/mediaqueries/mediaqueries.scss"
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';  
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'; 
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Stepper from 'primevue/stepper';
import StepperPanel from 'primevue/stepperpanel';
import Steps from 'primevue/steps';
// @ts-ignore
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(PrimeVue);
app.component('Stepper', Stepper);
app.component('StepperPanel', StepperPanel);
app.component('Steps', Steps);
app.mount('#app')
