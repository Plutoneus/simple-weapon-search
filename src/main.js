import { createApp } from 'vue'
import store from './store';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(store).mount('#app');